// Baustein aus der Design-Vorlage: Live Cooking
// CSS ist auf .wt-home-live-section begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-live-section .live-section{display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 620px;}\n.wt-home-live-section .live-section__photo{position: relative;\n    overflow: hidden;\n    background: var(--cpxl);}\n.wt-home-live-section .live-section__photo img{height: 100%;}\n.wt-home-live-section .live-section__content{background: var(--cbg);\n    padding: 80px 72px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;}\n.wt-home-live-section .live-section__eyebrow{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cp);\n    margin-bottom: 24px;}\n.wt-home-live-section .live-section__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(34px, 3.5vw, 52px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.1;\n    letter-spacing: -1.5px;\n    margin-bottom: 24px;}\n.wt-home-live-section .live-section__body{font-size: 17px;\n    line-height: 1.65;\n    color: var(--cb);\n    margin-bottom: 40px;}\n.wt-home-live-section .live-section__details{display: flex;\n    flex-direction: column;\n    gap: 14px;\n    margin-bottom: 44px;}\n.wt-home-live-section .live-detail{display: flex;\n    align-items: flex-start;\n    gap: 14px;\n    font-size: 15px;\n    color: var(--cb);\n    line-height: 1.5;}\n.wt-home-live-section .live-detail__icon{width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n    margin-top: 2px;\n    color: var(--cp);}\n.wt-home-live-section .live-section__link{display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--cp);\n    border-bottom: 1.5px solid var(--cpl);\n    padding-bottom: 2px;\n    width: fit-content;\n    transition: color 0.2s;}\n.wt-home-live-section .live-section__link:hover{color: var(--cpd);}\n@media (max-width: 900px){.wt-home-live-section .live-section{grid-template-columns: 1fr;}\n.wt-home-live-section .live-section__photo{height: 380px;}\n.wt-home-live-section .live-section__content{padding: 60px 24px;}}"

export default function HomeLiveSection({ link, img, eyebrow, headline, body }) {
  return (
    <div className="wt-home-live-section">
      <style href="wt-home-live-section" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="live-section">
        <div className="live-section__photo">
          <img alt="Live Cooking Station" loading="lazy" src={img}/>
        </div>
        <div className="live-section__content">
          <p className="live-section__eyebrow" data-cms="homepage.live_eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p>
          <h2 className="live-section__headline" data-cms="homepage.live_headline" dangerouslySetInnerHTML={{ __html: headline }}></h2>
          <p className="live-section__body" data-cms="homepage.live_body" dangerouslySetInnerHTML={{ __html: body }}></p>
          <div className="live-section__details">
            <div className="live-detail">
              <svg className="live-detail__icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>
                Grill — Steak, Burger mit Toppings nach Wahl, Meeresfrüchte
              </span>
            </div>
            <div className="live-detail">
              <svg className="live-detail__icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>
                Pasta — frisch für dich zubereitet
              </span>
            </div>
          </div>
          <a className="live-section__link" href="/07_live-cooking">
            <span dangerouslySetInnerHTML={{ __html: link }} />
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
