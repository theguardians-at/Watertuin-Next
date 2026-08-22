'use client'
import { usePathname } from 'next/navigation'

// Aus der Design-Vorlage, mit den Inhalten aus /_data uebernommen.
// Der Entwurf gibt Unterseiten eine eigene Kopfzeilen-Variante (hoeheres
// Padding, engere Navigation) - daher die Klasse je nach Route.
export default function SiteHeader() {
  const pathname = usePathname()
  const variant = pathname === '/' ? 'chrome-home' : 'chrome-inner'

  return (
    <>
      <header className={`site-header ${variant}`} id="header">
      <a className="logo" href="/"><img alt="Watertuin" src="/images/logo.png"/></a>
      <nav className="nav">
      <a className="nav-link" href="/sortiment">Sortiment</a>
      <a className="nav-link" href="/preise">Preise</a>
      <a className="nav-link" href="/live-cooking">Live Cooking</a>
      <a className="nav-link" href="/geburtstag">Events</a>
      <a className="nav-link" href="/ueber-uns">Über uns</a>
      <a className="nav-link" href="/kontakt">Kontakt</a>
      <a className="btn-reserve" href="/kontakt#form">Tisch reservieren</a>
      </nav>
      <button aria-label="Menü" className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
      </header>
      <div className="mobile-menu" id="mobileMenu">
      <button className="mobile-menu__close" id="menuClose">✕</button>
      <a className="active" href="/">Home</a>
      <a href="/sortiment">Sortiment</a>
      <a href="/preise">Preise</a>
      <a href="/live-cooking">Live Cooking</a>
      <a href="/geburtstag">Geburtstag</a>
      <a href="/gruppen-events">Gruppen &amp; Events</a>
      <a href="/ueber-uns">Über uns</a>
      <a href="/kontakt">Kontakt</a>
      <a className="mobile-menu__cta" href="/kontakt#form">Tisch reservieren</a>
      </div>
    </>
  )
}
