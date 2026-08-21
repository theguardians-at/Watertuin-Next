import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Watertuin Vienna — All You Can Eat & Drink',
  description: 'All You Can Eat & Drink Restaurant in Wien. Österreichische & asiatische Küche, Live Cooking, Sushi und mehr — alles inklusive, ein Preis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
