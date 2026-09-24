import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

// Data router (not <BrowserRouter>) so <ScrollRestoration> is available in Layout
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/skills', element: <Skills /> },
      { path: '/services', element: <Services /> },
      { path: '/projects', element: <Projects /> },
      { path: '/experience', element: <Experience /> },
      { path: '/education', element: <Education /> },
      { path: '/profile', element: <Profile /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
