import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { scrollToSection } from '../utils/smoothScroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id, e) => {
    e?.preventDefault()
    e?.stopPropagation()
    setActiveId(id)
    setMenuOpen((wasOpen) => {
      const delay = wasOpen ? 350 : 0
      window.setTimeout(() => scrollToSection(id), delay)
      return false
    })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button type="button" className="navbar__logo" onClick={(e) => scrollTo('home', e)}>
          <span className="navbar__logo-bracket">[</span>
          HC
          <span className="navbar__logo-bracket">]</span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              type="button"
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => scrollTo(link.id, e)}
            >
              <span className="navbar__link-index">0{i + 1}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
