export const metadata = {
  title: 'Seite nicht gefunden — Watertuin Vienna',
}

// Bewusst eine reine Server-Komponente ohne Builder-Import: wird der
// Builder-SDK hier in einer Client-Komponente geladen, bricht das SSR ab
// und die 404-Seite wird mit leerem Body ausgeliefert.
export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
        minHeight: '60vh',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--fa)',
          fontWeight: 700,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          fontSize: '.8rem',
          color: 'var(--cm)',
          margin: 0,
        }}
      >
        Fehler 404
      </p>
      <h1
        style={{
          fontFamily: 'var(--ff)',
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--cpd)',
          margin: 0,
        }}
      >
        Diese Seite wurde nicht gefunden.
      </h1>
      <p style={{ fontFamily: 'var(--fa)', color: 'var(--cb)', maxWidth: '46ch', margin: 0 }}>
        Vielleicht wurde sie verschoben oder die Adresse enthält einen Tippfehler.
      </p>
      <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>
        Zurück zur Startseite
      </a>
    </div>
  )
}
