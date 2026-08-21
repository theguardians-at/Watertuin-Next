// Baustein aus der Design-Vorlage: Konzept-Statement
// CSS ist auf .wt-home-statement begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-statement .statement{background: var(--cs);\n    padding: 120px 60px 100px;}\n.wt-home-statement .statement__inner{max-width: 1100px;\n    margin: 0 auto;}\n.wt-home-statement .statement__tag{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 32px;}\n.wt-home-statement .statement__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(40px, 5.5vw, 80px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.05;\n    letter-spacing: -0.5px;\n    max-width: 900px;\n    margin-bottom: 48px;}\n.wt-home-statement .statement__headline em{color: var(--cp);\n    font-style: italic;}\n.wt-home-statement .statement__body{font-size: 19px;\n    line-height: 1.65;\n    color: var(--cb);\n    max-width: 580px;\n    margin-bottom: 40px;}\n.wt-home-statement .statement__link{display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--cp);\n    border-bottom: 1.5px solid var(--cpl);\n    padding-bottom: 2px;\n    transition: color 0.2s;}\n.wt-home-statement .statement__link:hover{color: var(--cpd);}\n@media (max-width: 900px){.wt-home-statement .statement{padding: 80px 24px;}}"

export default function HomeStatement({ link, tag, headline, body }) {
  return (
    <div className="wt-home-statement">
      <style href="wt-home-statement" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="statement">
        <div className="statement__inner">
          <p className="statement__tag" data-cms="homepage.concept_tag" dangerouslySetInnerHTML={{ __html: tag }}></p>
          <h2 className="statement__headline" data-cms="homepage.concept_headline" dangerouslySetInnerHTML={{ __html: headline }}></h2>
          <p className="statement__body" data-cms="homepage.concept_body" dangerouslySetInnerHTML={{ __html: body }}></p>
          <a className="statement__link" href="/06_sortiment">
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
