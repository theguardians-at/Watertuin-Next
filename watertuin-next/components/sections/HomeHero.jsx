// Baustein aus der Design-Vorlage: Hero
// CSS ist auf .wt-home-hero begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-hero .hero{position: relative;\n    width: 100%;\n    height: 100vh;\n    min-height: 600px;\n    overflow: hidden;}\n.wt-home-hero .hero__bg{position: absolute;\n    inset: 0;\n    background: url('hero-food-table.jpg') center/cover no-repeat;}\n.wt-home-hero .hero__bg::after{content: '';\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      to top,\n      rgba(10,20,15,0.72) 0%,\n      rgba(10,20,15,0.15) 55%,\n      transparent 100%\n    );}\n.wt-home-hero .hero__content{position: absolute;\n    bottom: 72px;\n    left: 60px;\n    right: 60px;\n    z-index: 2;}\n.wt-home-hero .hero__eyebrow{font-family: var(--ff);\n    font-size: 13px;\n    font-weight: 500;\n    letter-spacing: 2.5px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 16px;}\n.wt-home-hero .hero__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(52px, 7vw, 100px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.02;\n    letter-spacing: -0.5px;\n    max-width: 780px;\n    margin-bottom: 32px;}\n.wt-home-hero .hero__actions{display: flex;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;}\n.wt-home-hero .hero__cta-primary{background: var(--ca);\n    color: var(--cd);\n    padding: 16px 36px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 16px;\n    letter-spacing: 0.2px;\n    transition: background 0.2s, transform 0.2s;}\n.wt-home-hero .hero__cta-primary:hover{background: #f5b030;\n    transform: translateY(-2px);}\n.wt-home-hero .hero__cta-secondary{color: rgba(255,255,255,0.85);\n    font-size: 15px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    border-bottom: 1px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: color 0.2s;}\n.wt-home-hero .hero__cta-secondary:hover{color: #fff;}\n.wt-home-hero .hero__badge{position: absolute;\n    bottom: 72px;\n    right: 60px;\n    z-index: 2;\n    text-align: right;}\n.wt-home-hero .hero__badge-text{font-family: var(--fa);\n    font-style: italic;\n    font-size: 15px;\n    color: rgba(255,255,255,0.7);\n    margin-bottom: 4px;}\n.wt-home-hero .hero__badge-info{font-size: 13px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.5);\n    letter-spacing: 1px;}\n.wt-home-hero .scroll-indicator{position: absolute;\n    bottom: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;}\n.wt-home-hero .scroll-indicator span{display: block;\n    width: 1px;\n    height: 48px;\n    background: rgba(255,255,255,0.3);\n    animation: scrollLine 2s ease-in-out infinite;}\n@media (max-width: 900px){.wt-home-hero .hero__content{bottom: 48px; left: 24px; right: 24px;}\n.wt-home-hero .hero__badge{display: none;}}"

export default function HomeHero({ ctaSecondary, eyebrow, headline, ctaPrimary, badgeText, badgeInfo }) {
  return (
    <div className="wt-home-hero">
      <style href="wt-home-hero" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="hero">
        <div className="hero__bg" data-cms-bg="homepage.hero_image"></div>
        <div className="hero__content">
          <p className="hero__eyebrow" data-cms="homepage.hero_eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p>
          <h1 className="hero__headline" dangerouslySetInnerHTML={{ __html: headline }}></h1>
          <div className="hero__actions">
            <a className="hero__cta-primary" href="/11_kontakt#form" dangerouslySetInnerHTML={{ __html: ctaPrimary }}></a>
            <a className="hero__cta-secondary" href="/06_sortiment">
              <span dangerouslySetInnerHTML={{ __html: ctaSecondary }} />
              <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero__badge">
          <p className="hero__badge-text" dangerouslySetInnerHTML={{ __html: badgeText }}></p>
          <p className="hero__badge-info" data-cms="homepage.hero_badge_info" dangerouslySetInnerHTML={{ __html: badgeInfo }}></p>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>
    </div>
  )
}
