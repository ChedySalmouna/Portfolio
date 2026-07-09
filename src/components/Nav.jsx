import { Link, useLocation } from 'react-router-dom'

const homeLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#volunteering', label: 'Volunteering' },
]

export function Nav() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <header className="nav">
      <Link to="/" className="nav-brand">
        Portfolio
      </Link>
      <nav className="nav-links">
        {onHome ? (
          homeLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))
        ) : (
          <Link to="/#about">About</Link>
        )}
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  )
}
