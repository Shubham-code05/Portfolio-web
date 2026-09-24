import { useEffect, useId, useRef, useState } from 'react'
import { Check, CircleCheck, Copy, Send, X } from 'lucide-react'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import { EMAIL } from '../data/portfolioData'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }
const MESSAGE_MAX = 1500 // mailto: URLs get unreliable beyond ~2000 characters

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Please write a message (at least 10 characters).'
  return errors
}

// No backend: the form composes a pre-filled email in the visitor's mail app
function buildMailto({ name, email, subject, message }) {
  const body = `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`
  const params = new URLSearchParams({ subject: subject.trim() || `Portfolio enquiry from ${name.trim()}`, body })
  // URLSearchParams encodes spaces as "+", which mail clients show literally — use %20 instead
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, '%20')}`
}

const INPUT =
  'w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 transition-colors duration-150 outline-none focus:border-accent-bright/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent-bright/20'

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-white/80">
        {label}
        {optional && <span className="text-xs font-normal text-white/60">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — the address is still visible to select manually
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70 transition-colors hover:border-accent-bright/40 hover:text-white"
      aria-label={copied ? 'Email address copied' : 'Copy email address'}
    >
      {copied ? <Check size={13} aria-hidden="true" className="text-accent-bright" /> : <Copy size={13} aria-hidden="true" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

/**
 * Centered contact dialog (native <dialog> in the top layer).
 * Closes via the X button, Escape (native), or a click on the backdrop; locks page scroll while open.
 */
export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null)
  const pointerDownOnBackdrop = useRef(false)
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const uid = useId()
  const ids = {
    title: `${uid}-title`,
    description: `${uid}-description`,
    name: `${uid}-name`,
    email: `${uid}-email`,
    subject: `${uid}-subject`,
    message: `${uid}-message`,
  }

  useLockBodyScroll(open)

  // Keep the native dialog in sync with the `open` prop
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      // Start in the first field on desktop; on touch devices don't pop the keyboard over the form
      if (!window.matchMedia('(pointer: coarse)').matches) document.getElementById(ids.name)?.focus()
    }
    if (!open && dialog.open) dialog.close()
  }, [open, ids.name])

  // Escape (native "cancel"), the X button and backdrop clicks all end in the dialog's "close" event
  const handleDialogClose = () => {
    if (sent) reset()
    onClose()
  }

  // Backdrop clicks target the <dialog> element itself; require press AND release there,
  // so selecting text inside and releasing outside doesn't close the form.
  const onPointerDown = (event) => {
    pointerDownOnBackdrop.current = event.target === dialogRef.current
  }
  const onClick = (event) => {
    if (pointerDownOnBackdrop.current && event.target === dialogRef.current) dialogRef.current.close()
    pointerDownOnBackdrop.current = false
  }

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus()
      return
    }
    window.location.href = buildMailto(form)
    setSent(true)
  }

  const reset = () => {
    setForm(EMPTY_FORM)
    setErrors({})
    setSent(false)
  }

  const fieldProps = (field) => ({
    id: ids[field],
    name: field,
    value: form[field],
    onChange: update(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${ids[field]}-error` : undefined,
    className: `${INPUT} ${errors[field] ? 'border-red-400/60' : 'border-white/10'}`,
  })

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={ids.title}
      aria-describedby={ids.description}
      onPointerDown={onPointerDown}
      onClick={onClick}
      onClose={handleDialogClose}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-visible bg-transparent p-0 text-white backdrop:bg-black/65 backdrop:backdrop-blur-sm open:animate-dialog-in open:backdrop:animate-fade-in motion-reduce:open:animate-none"
    >
      {/* Fixed frame (keeps the X button visible) + inner scroll area for the form */}
      <div className="relative isolate flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Same green glow language as the Contact section — clipped in its own layer so it can't
            widen the panel (which would make the form scroll sideways on phones) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <div className="absolute -top-24 -right-16 size-64 rounded-full bg-accent-bright/15 blur-3xl" />
        </div>

        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close contact form"
          className="absolute top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="overflow-y-auto overscroll-contain p-6 sm:p-8">
          {sent ? (
            <div className="py-6 text-center" role="status">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent-bright/15 text-accent-bright">
                <CircleCheck size={28} aria-hidden="true" />
              </span>
              <h2 id={ids.title} className="mt-5 text-2xl font-bold tracking-tight">
                Almost there
              </h2>
              <p id={ids.description} className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-white/65">
                Your email app should now be open with your message ready — just press send. If nothing opened, you can
                email me directly:
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-accent-bright hover:underline">
                  {EMAIL}
                </a>
                <CopyEmail />
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-7 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
              >
                Write another message
              </button>
            </div>
          ) : (
            <>
              <div className="pr-12">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-accent-bright uppercase">Let&apos;s connect</p>
                <h2 id={ids.title} className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Get in touch
                </h2>
                <p id={ids.description} className="mt-2 text-[15px] leading-relaxed text-white/60">
                  Have an idea, opportunity, or question? Send me a message.
                </p>
              </div>

              <form noValidate onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id={ids.name} label="Name" error={errors.name}>
                    <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                  </Field>
                  <Field id={ids.email} label="Email" error={errors.email}>
                    <input type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" {...fieldProps('email')} />
                  </Field>
                </div>
                <Field id={ids.subject} label="Subject" optional>
                  <input type="text" placeholder="What's this about?" maxLength={120} {...fieldProps('subject')} />
                </Field>
                <Field id={ids.message} label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    placeholder="Tell me a little about it…"
                    maxLength={MESSAGE_MAX}
                    {...fieldProps('message')}
                    className={`${fieldProps('message').className} resize-y`}
                  />
                </Field>

                <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-white/60">
                    Opens your email app with the message ready to send.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
                  >
                    Send Message
                    <Send
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </form>

              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5 text-sm text-white/55">
                Prefer email?
                <a href={`mailto:${EMAIL}`} className="font-medium text-accent-bright hover:underline">
                  {EMAIL}
                </a>
                <CopyEmail />
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}
