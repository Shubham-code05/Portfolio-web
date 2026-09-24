function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Avatar({ src, name, className = '' }) {
  const base = `shrink-0 rounded-full ring-2 ring-accent/15 ring-offset-2 ring-offset-background ${className}`

  if (src) {
    return <img src={src} alt={name} className={`${base} object-cover`} />
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
