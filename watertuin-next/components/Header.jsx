'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/sortiment',      label: 'Sortiment' },
  { href: '/live-cooking',   label: 'Live Cooking' },
  { href: '/preise',         label: 'Preise' },
  { href: '/geburtstag',     label: 'Geburtstag' },
  { href: '/gruppen-events', label: 'Gruppen & Events' },
  { href: '/ueber-uns',      label: 'Über uns' },
  { href: '/kontakt',        label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const bg = scrolled ? 'rgba(27,58,45,.97)' : 'rgba(27,58,45,.6)'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: bg,
      backdropFilter: 'blur(10px)',
      transition: 'background .3s ease, box-shadow .3s ease',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.25)' : 'none',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 800, fontStyle: 'italic',
          fontSize: '1.5rem', color: '#FFFFFF', letterSpacing: '-.02em',
        }}>
          Watertuin
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="desktop-nav">
          {NAV.map(link => (
            <Link key={link.href} href={link.href} className="nav-link" style={{
              color: pathname === link.href ? '#E8A020' : 'rgba(255,255,255,.85)',
              fontWeight: 600, fontSize: '.875rem', transition: 'color .2s',
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="nav-cta" style={{
            background: '#E8A020', color: '#1B3A2D',
            fontWeight: 700, padding: '10px 20px',
            borderRadius: 9999, fontSize: '.875rem',
          }}>
            Reservieren
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menü"
          className="hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          {[
            menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            null,
            menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          ].map((transform, i) => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: '#FFFFFF', borderRadius: 2,
              transition: 'transform .3s, opacity .3s',
              transform: transform ?? 'none',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#1B3A2D', borderTop: '1px solid rgba(255,255,255,.1)', padding: '16px 24px 24px' }}>
          {NAV.map(link => (
            <Link key={link.href} href={link.href} style={{
              display: 'block', color: pathname === link.href ? '#E8A020' : 'rgba(255,255,255,.85)',
              fontWeight: 600, padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,.08)', fontSize: '1rem',
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" style={{
            display: 'block', background: '#E8A020', color: '#1B3A2D',
            fontWeight: 700, padding: '14px 24px', borderRadius: 9999,
            textAlign: 'center', marginTop: 16,
          }}>
            Reservieren
          </Link>
        </div>
      )}

      <style>{`
        .nav-link, .nav-cta { display: none !important; }
        .hamburger           { display: flex !important; }
        @media (min-width: 900px) {
          .nav-link, .nav-cta { display: block !important; }
          .hamburger           { display: none  !important; }
        }
      `}</style>
    </header>
  )
}
