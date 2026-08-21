const NAV = [
  { href: '/sortiment',      label: 'Sortiment' },
  { href: '/live-cooking',   label: 'Live Cooking' },
  { href: '/preise',         label: 'Preise' },
  { href: '/geburtstag',     label: 'Geburtstag' },
  { href: '/gruppen-events', label: 'Gruppen & Events' },
  { href: '/ueber-uns',      label: 'Über uns' },
  { href: '/kontakt',        label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1B3A2D', color: 'rgba(255,255,255,.65)', padding: '64px 24px 32px' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 48, marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <a href="/" style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800, fontStyle: 'italic', fontSize: '1.75rem',
            color: '#FFFFFF', display: 'block', marginBottom: 12,
          }}>Watertuin</a>
          <p style={{ fontSize: '.9rem', lineHeight: 1.7 }}>
            All You Can Eat &amp; Drink.<br />World Kitchen. Wien.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: 16,
            fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            Navigation
          </h3>
          {NAV.map(link => (
            <a key={link.href} href={link.href} style={{
              display: 'block', color: 'rgba(255,255,255,.55)',
              fontSize: '.9rem', marginBottom: 8, transition: 'color .2s',
            }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: 16,
            fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            Kontakt &amp; Öffnungszeiten
          </h3>
          <address style={{ fontStyle: 'normal', fontSize: '.9rem', lineHeight: 1.9 }}>
            <strong style={{ color: '#FFFFFF' }}>Watertuin Vienna</strong><br />
            Etrichstraße 23<br />
            A-1110 Wien<br /><br />
            Mo, Mi, Do &amp; Fr · 17:30 – 22:00<br />
            Sa, So &amp; Feiertag · 11:30 – 16:00 &amp; 17:30 – 22:00<br />
            Dienstag geschlossen<br /><br />
            <a href="tel:+4317671497" style={{ color: 'rgba(255,255,255,.45)' }}>
              +43 1 767 14 97
            </a>
          </address>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
        gap: 12, fontSize: '.8rem', color: 'rgba(255,255,255,.3)',
      }}>
        <span>© {new Date().getFullYear()} Watertuin Vienna. Alle Rechte vorbehalten.</span>
        <span>
          <a href="/impressum"  style={{ color: 'rgba(255,255,255,.3)' }}>Impressum</a>
          {' · '}
          <a href="/datenschutz" style={{ color: 'rgba(255,255,255,.3)' }}>Datenschutz</a>
        </span>
      </div>
    </footer>
  )
}
