// Baustein aus der Design-Vorlage: Angebot
// CSS ist auf .wt-home-offer-statement begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-offer-statement .offer-statement{background: var(--cpd);\n    padding: 120px 60px;\n    position: relative;\n    overflow: hidden;}\n.wt-home-offer-statement .offer-statement::before{content: '';\n    position: absolute;\n    top: -200px; right: -200px;\n    width: 600px; height: 600px;\n    border-radius: 50%;\n    background: rgba(82, 183, 136, 0.08);}\n.wt-home-offer-statement .offer-statement__inner{max-width: 1100px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 80px;\n    align-items: center;}\n.wt-home-offer-statement .offer-statement__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(44px, 5vw, 72px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.05;\n    letter-spacing: -0.5px;}\n.wt-home-offer-statement .offer-statement__headline em{color: var(--ca);}\n.wt-home-offer-statement .offer-statement__right{}\n.wt-home-offer-statement .offer-statement__lead{font-size: 19px;\n    color: rgba(255,255,255,0.75);\n    line-height: 1.6;\n    margin-bottom: 40px;}\n.wt-home-offer-statement .offer-statement__pills{display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-bottom: 44px;}\n.wt-home-offer-statement .pill{padding: 8px 18px;\n    border: 1px solid rgba(255,255,255,0.2);\n    border-radius: 100px;\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.8);\n    letter-spacing: 0.3px;}\n.wt-home-offer-statement .pill.highlight{border-color: var(--ca);\n    color: var(--ca);}\n.wt-home-offer-statement .offer-statement__cta{display: inline-block;\n    background: var(--ca);\n    color: var(--cd);\n    padding: 15px 34px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 15px;\n    transition: background 0.2s, transform 0.2s;}\n.wt-home-offer-statement .offer-statement__cta:hover{background: #f5b030;\n    transform: translateY(-2px);}\n@media (max-width: 900px){.wt-home-offer-statement .offer-statement__inner{grid-template-columns: 1fr; gap: 40px;}\n.wt-home-offer-statement .offer-statement{padding: 80px 24px;}}"

export default function HomeOfferStatement({ offerHeadline }) {
  return (
    <div className="wt-home-offer-statement">
      <style href="wt-home-offer-statement" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="offer-statement">
      <div className="offer-statement__inner">
      <div className="offer-statement__left">
      <h2 className="offer-statement__headline" data-cms="homepage.offer_headline" dangerouslySetInnerHTML={{ __html: offerHeadline }}></h2>
      </div>
      <div className="offer-statement__right">
      <p className="offer-statement__lead">
              Ein Preis für alles — Essen, Trinken, so viel man möchte.
              Kein Zählen, kein Abrechnen, kein Limit. Einfach sitzen, bestellen, genießen.
            </p>
      <div className="offer-statement__pills">
      <span className="pill highlight">All You Can Eat</span>
      <span className="pill highlight">All You Can Drink</span>
      <span className="pill">Sushi &amp; Maki</span>
      <span className="pill">Live Cooking Grill</span>
      <span className="pill">Live Cooking Pasta</span>
      <span className="pill">Wok-Gerichte</span>
      <span className="pill">Österreichisch</span>
      <span className="pill">Chinesisch/Asiatisch</span>
      </div>
      <a className='offer-statement__cta' href='/preise'>Preise ansehen</a>
      </div>
      </div>
      </section>
    </div>
  )
}
