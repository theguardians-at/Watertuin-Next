export const metadata = {
  title: 'Seite nicht gefunden — Watertuin Vienna',
}

// Bewusst eine reine Server-Komponente ohne Builder-Import: wird der
// Builder-SDK hier in einer Client-Komponente geladen, bricht das SSR ab
// und die 404-Seite wird mit leerem Body ausgeliefert.
//
// Farben und Schriften stehen fest, weil die Seiten ihr CSS jeweils
// selbst mitbringen und es hier keine globalen Tokens gibt.
export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
        minHeight: '100vh',
        padding: '64px 24px',
        textAlign: 'center',
        background: '#F7F3EE',
      }}
    >
      <p
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 700,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          fontSize: '.8rem',
          color: '#8A7468',
          margin: 0,
        }}
      >
        Fehler 404
      </p>
      <h1
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: '#1B3A2D',
          margin: 0,
        }}
      >
        Diese Seite wurde nicht gefunden.
      </h1>
      <p
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          color: '#4D3F37',
          maxWidth: '46ch',
          margin: 0,
        }}
      >
        Vielleicht wurde sie verschoben oder die Adresse enthält einen Tippfehler.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: 8,
          padding: '14px 28px',
          borderRadius: 9999,
          background: '#E8A020',
          color: '#1B3A2D',
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        Zurück zur Startseite
      </a>
    </div>
  )
}
