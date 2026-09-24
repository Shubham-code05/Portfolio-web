/**
 * Anchor that handles placeholder URLs: '#' (or empty) links stay visible
 * but don't navigate, so unfinished project links never jump to the page top.
 * Real URLs open in a new tab.
 */
export default function ActionLink({ href, children, ...props }) {
  const isPlaceholder = !href || href === '#'

  if (isPlaceholder) {
    return (
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        title="Link coming soon"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
