export const metadata = {
  title: 'Watertuin Vienna — All You Can Eat & Drink',
  description:
    'All You Can Eat & Drink Restaurant in Wien. Österreichische & asiatische Küche, Live Cooking, Sushi und mehr — alles inklusive, ein Preis.',
}

// Die Schriften haengen als <link> im Layout, genau wie in der
// Design-Vorlage. Ueber @import in einer globals.css gingen sie beim
// Bundling verloren: die kompilierte CSS-Datei kam leer heraus und die
// Seiten fielen auf die Systemschrift zurueck.
//
// Header und Footer stehen im Markup jeder Seite, ebenfalls wie im
// Entwurf. Das Layout haelt nur die Huelle.
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600;1,700;1,800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
