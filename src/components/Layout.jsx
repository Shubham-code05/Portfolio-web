import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/** Shared shell for every route: skip link, navbar, page content, footer. */
export default function Layout() {
  return (
    <>
      {/* Lets keyboard users jump past the navbar; visible only when focused */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      {/* pt-16 clears the fixed navbar */}
      <main id="main" tabIndex={-1} className="pt-16 outline-none">
        <Outlet />
      </main>
      <Footer />
      {/* Scrolls to top on new pages, to #hash targets, and restores position on back/forward */}
      <ScrollRestoration />
    </>
  )
}
