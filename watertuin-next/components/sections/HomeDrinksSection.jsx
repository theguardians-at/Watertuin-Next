// Baustein aus der Design-Vorlage: Getränke
// CSS ist auf .wt-home-drinks-section begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-drinks-section .drinks-section{position: relative;\n    height: 600px;\n    overflow: hidden;}\n.wt-home-drinks-section .drinks-section__bg{position: absolute;\n    inset: 0;\n    background: repeating-linear-gradient(45deg,#f0e8d8 0,#f0e8d8 12px,#e5d9c8 12px,#e5d9c8 24px); ;}\n.wt-home-drinks-section .drinks-section__bg::after{content: '';\n    position: absolute;\n    inset: 0;\n    background: rgba(10, 20, 15, 0.55);}\n.wt-home-drinks-section .drinks-section__content{position: absolute;\n    inset: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    padding: 0 60px;}\n.wt-home-drinks-section .drinks-section__inner{max-width: 640px;}\n.wt-home-drinks-section .drinks-section__eyebrow{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 24px;}\n.wt-home-drinks-section .drinks-section__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(38px, 4.5vw, 64px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.05;\n    letter-spacing: -0.5px;\n    margin-bottom: 24px;}\n.wt-home-drinks-section .drinks-section__body{font-size: 18px;\n    color: rgba(255,255,255,0.75);\n    line-height: 1.6;\n    margin-bottom: 36px;}\n.wt-home-drinks-section .drinks-section__link{display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #fff;\n    border-bottom: 1.5px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: border-color 0.2s;}\n.wt-home-drinks-section .drinks-section__link:hover{border-color: #fff;}"

export default function HomeDrinksSection({ link, eyebrow, headline, body }) {
  return (
    <div className="wt-home-drinks-section">
      <style href="wt-home-drinks-section" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="drinks-section">
        <div className="drinks-section__bg"></div>
        <div className="drinks-section__content">
          <div className="drinks-section__inner">
            <p className="drinks-section__eyebrow" data-cms="homepage.drinks_eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p>
            <h2 className="drinks-section__headline" data-cms="homepage.drinks_headline" dangerouslySetInnerHTML={{ __html: headline }}></h2>
            <p className="drinks-section__body" data-cms="homepage.drinks_body" dangerouslySetInnerHTML={{ __html: body }}></p>
            <a className="drinks-section__link" href="/06_sortiment#getraenke">
              <span dangerouslySetInnerHTML={{ __html: link }} />
              <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
