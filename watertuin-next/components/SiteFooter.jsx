'use client'
import { usePathname } from 'next/navigation'

// Aus der Design-Vorlage, mit den Inhalten aus /_data uebernommen.
// Adresse und Oeffnungszeiten stammen aus global.json, wie sie der
// cms-loader der Vorlage einsetzt.
export default function SiteFooter() {
  const pathname = usePathname()
  const variant = pathname === '/' ? 'chrome-home' : 'chrome-inner'

  return (
      <footer className={variant}>
      <div className="footer__grid">
      <div className="footer__brand">
      <span className="footer__logo"><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></span>
      <p className="footer__tagline">Mehr von allem.<br/>Für jeden.</p>
      <div className="footer__social">
      <a aria-label="Instagram" className="social-icon" href="#">IG</a>
      <a aria-label="Facebook" className="social-icon" href="#">FB</a>
      <a aria-label="TikTok" className="social-icon" href="#">TT</a>
      </div>
      </div>
      <div>
      <p className="footer__col-title">Restaurant</p>
      <ul className="footer__links">
      <li><a href="/sortiment">Sortiment</a></li>
      <li><a href="/preise">Preise</a></li>
      <li><a href="/live-cooking">Live Cooking</a></li>
      <li><a href="/kontakt#form">Tisch reservieren</a></li>
      </ul>
      </div>
      <div>
      <p className="footer__col-title">Events</p>
      <ul className="footer__links">
      <li><a href="/geburtstag">Geburtstage</a></li>
      <li><a href="/gruppen-events">Gruppen &amp; Events</a></li>
      <li><a href="/ueber-uns">Über uns</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
      </ul>
      </div>
      <div>
      <p className="footer__col-title">Besuchen</p>
      <address className="footer__address"><strong>Watertuin Vienna</strong><br/>Etrichstraße 23<br/>A-1110 Wien<br/><br/>Mo, Mi, Do & Fr 17:30 – 22:00<br/>Sa, So & Feiertag 11:30 – 16:00 &amp; 17:30 – 22:00<br/>Dienstag geschlossen<br/><br/><a href="tel:+4317671497" style={{color: "rgba(255,255,255,0.55)"}}>+43 1 767 14 97</a></address>
      </div>
      </div>
      <div className="footer__bottom">
      <span>© 2025 Watertuin Vienna</span>
      <div className="footer__legal">
      <a href="/impressum">Impressum</a>
      <a href="/datenschutz">Datenschutz</a>
      <a href="#">AGB</a>
      </div>
      </div>
      </footer>
  )
}
