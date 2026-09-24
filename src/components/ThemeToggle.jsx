import { useEffect, useId, useRef, useState } from 'react'
import { Check, Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'

const OPTIONS = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

/** Icon button + dropdown (menu of radio items) for choosing Light / Dark / System. */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const itemRefs = useRef([])
  const menuId = useId()

  const selectedIndex = Math.max(0, OPTIONS.findIndex((option) => option.value === theme))
  const { icon: CurrentIcon, label: currentLabel } = OPTIONS[selectedIndex]

  // While open: focus the selected option, and close on outside pointer-down
  useEffect(() => {
    if (!isOpen) return
    itemRefs.current[selectedIndex]?.focus()

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [isOpen, selectedIndex])

  const close = ({ restoreFocus = true } = {}) => {
    setIsOpen(false)
    if (restoreFocus) buttonRef.current?.focus()
  }

  const choose = (value) => {
    setTheme(value)
    close()
  }

  const onButtonKeyDown = (event) => {
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !isOpen) {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  const onMenuKeyDown = (event) => {
    const items = itemRefs.current
    const current = items.indexOf(document.activeElement)
    const focusAt = (index) => items[(index + items.length) % items.length]?.focus()

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        focusAt(current + 1)
        break
      case 'ArrowUp':
        event.preventDefault()
        focusAt(current - 1)
        break
      case 'Home':
        event.preventDefault()
        focusAt(0)
        break
      case 'End':
        event.preventDefault()
        focusAt(items.length - 1)
        break
      case 'Escape':
        event.preventDefault()
        close()
        break
      case 'Tab':
        close({ restoreFocus: false })
        break
      default:
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={onButtonKeyDown}
        aria-label={`Theme: ${currentLabel}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        title="Change theme"
        className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:bg-surface hover:text-foreground"
      >
        <CurrentIcon size={18} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label="Theme"
          onKeyDown={onMenuKeyDown}
          className="absolute top-full right-0 z-50 mt-2 w-44 origin-top-right animate-menu-in rounded-2xl border border-border bg-background p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] motion-reduce:animate-none"
        >
          {OPTIONS.map(({ value, label, icon: Icon }, index) => {
            const isSelected = value === theme
            return (
              <button
                key={value}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => choose(value)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  isSelected ? 'bg-accent-soft text-accent' : 'text-foreground/80 hover:bg-surface hover:text-foreground'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
                {isSelected && <Check size={15} aria-hidden="true" className="ml-auto" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
