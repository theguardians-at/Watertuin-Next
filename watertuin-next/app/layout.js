import './globals.css'

export const metadata = {
  title: 'Watertuin Vienna — All You Can Eat & Drink',
  description:
    'All You Can Eat & Drink Restaurant in Wien. Österreichische & asiatische Küche, Live Cooking, Sushi und mehr — alles inklusive, ein Preis.',
}

// Header und Footer stehen im Markup jeder Seite, so wie in der
// Design-Vorlage. Das Layout haelt nur die Huelle.
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
