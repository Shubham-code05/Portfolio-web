function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

/**
 * `decorative` hides the avatar from assistive tech — use it when the name is already
 * rendered as text next to it, so screen readers don't announce the name twice.
 * `priority` loads the photo eagerly (above-the-fold usage like the navbar).
 */
export default function Avatar({ src, name, decorative = false, priority = false, className = '' }) {
  const base = `shrink-0 rounded-[50%] ring-2 ring-accent/15 ring-offset-2 ring-offset-background ${className}`

  if (src) {
    return (
      <img
        src={src}
        alt={decorative ? '' : name}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${base} object-cover`}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={`${base} flex items-center justify-center bg-accent-soft text-sm font-semibold text-accent`}
    >
      {getInitials(name)}
    </span>
  )
}
