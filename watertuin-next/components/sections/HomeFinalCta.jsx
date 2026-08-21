// Baustein aus der Design-Vorlage: Abschluss-CTA
// CSS ist auf .wt-home-final-cta begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-final-cta .final-cta{position: relative;\n    overflow: hidden;\n    background: var(--cp);\n    padding: 140px 60px;\n    text-align: center;}\n.wt-home-final-cta .final-cta::before{content: '';\n    position: absolute;\n    top: -150px; left: 50%;\n    transform: translateX(-50%);\n    width: 700px; height: 700px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.06);}\n.wt-home-final-cta .final-cta__eyebrow{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.6);\n    margin-bottom: 28px;}\n.wt-home-final-cta .final-cta__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(44px, 6vw, 88px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.02;\n    letter-spacing: -0.5px;\n    max-width: 800px;\n    margin: 0 auto 48px;}\n.wt-home-final-cta .final-cta__headline em{color: var(--ca);}\n.wt-home-final-cta .final-cta__actions{display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    flex-wrap: wrap;}\n.wt-home-final-cta .final-cta__btn-primary{background: var(--ca);\n    color: var(--cd);\n    padding: 18px 44px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 17px;\n    transition: background 0.2s, transform 0.2s;}\n.wt-home-final-cta .final-cta__btn-primary:hover{background: #f5b030;\n    transform: translateY(-2px);}\n.wt-home-final-cta .final-cta__btn-secondary{background: rgba(255,255,255,0.15);\n    color: #fff;\n    padding: 18px 36px;\n    border-radius: 100px;\n    font-weight: 600;\n    font-size: 17px;\n    transition: background 0.2s;}\n.wt-home-final-cta .final-cta__btn-secondary:hover{background: rgba(255,255,255,0.25);}\n.wt-home-final-cta .final-cta__info{margin-top: 32px;\n    font-size: 14px;\n    color: rgba(255,255,255,0.5);}\n@media (max-width: 900px){.wt-home-final-cta .final-cta{padding: 100px 24px;}}"

export default function HomeFinalCta({ eyebrow, headline, btnPrimary, btnSecondary, info }) {
  return (
    <div className="wt-home-final-cta">
      <style href="wt-home-final-cta" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="final-cta">
        <p className="final-cta__eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p>
        <h2 className="final-cta__headline" data-cms="homepage.cta_headline" dangerouslySetInnerHTML={{ __html: headline }}></h2>
        <div className="final-cta__actions">
          <a className="final-cta__btn-primary" href="/11_kontakt#form" dangerouslySetInnerHTML={{ __html: btnPrimary }}></a>
          <a className="final-cta__btn-secondary" href="/05_preise" dangerouslySetInnerHTML={{ __html: btnSecondary }}></a>
        </div>
        <p className="final-cta__info" dangerouslySetInnerHTML={{ __html: info }}></p>
      </section>
    </div>
  )
}
