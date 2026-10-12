import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import Logo from '../common/Logo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Admissions', to: '/admissions' },
]

const desktopLink = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gold after:transition-transform after:duration-200 hover:text-royal hover:after:scale-x-100 ${
    isActive ? 'text-royal after:scale-x-100' : 'text-ink-soft'
  }`

const mobileLink = ({ isActive }) =>
  `rounded-lg border-l-2 px-3 py-3 text-sm font-medium transition-colors duration-200 ${
    isActive
      ? 'border-gold bg-royal/5 text-royal'
      : 'border-transparent text-ink-soft hover:bg-surface hover:text-royal'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-royal/10 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLink} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/admissions">Apply Now</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-royal transition-colors duration-200 hover:bg-surface md:hidden"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} border-t border-royal/10 bg-white md:hidden`}
      >
        <Container className="flex flex-col gap-1 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/admissions" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Apply Now
          </Button>
        </Container>
      </div>
    </header>
  )
}
