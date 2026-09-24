/**
 * Anchor that handles placeholder URLs: '#' (or empty) links stay visible
 * but don't navigate, so unfinished links never jump to the page top.
 * External http(s) URLs open in a new tab; mailto: and local files open normally.
 */
export default function ActionLink({ href, children, ...props }) {
  const isPlaceholder = !href || href === '#'

  if (isPlaceholder) {
    return (
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        aria-disabled="true"
        title="Link coming soon"
        {...props}
      >
        {children}
      </a>
    )
  }

  const isExternal = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </a>
  )
}
