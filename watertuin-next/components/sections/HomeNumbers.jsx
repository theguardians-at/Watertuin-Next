// Baustein aus der Design-Vorlage: Kennzahlen
// CSS ist auf .wt-home-numbers begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-numbers .numbers{background: var(--cs);\n    padding: 120px 60px;}\n.wt-home-numbers .numbers__inner{max-width: 1100px;\n    margin: 0 auto;}\n.wt-home-numbers .numbers__label{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 72px;\n    text-align: center;}\n.wt-home-numbers .numbers__grid{display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 0;\n    border-top: 1px solid var(--cbr);}\n.wt-home-numbers .number-item{padding: 56px 40px 56px 0;\n    border-right: 1px solid var(--cbr);}\n.wt-home-numbers .number-item:last-child{border-right: none; padding-right: 0; padding-left: 40px;}\n.wt-home-numbers .number-item:first-child{padding-left: 0;}\n.wt-home-numbers .number-item:nth-child(2), .wt-home-numbers .number-item:nth-child(3){padding-left: 40px;}\n.wt-home-numbers .number-item__value{font-family: var(--fa);\n    font-style: italic;\n    font-size: 72px;\n    font-weight: 700;\n    color: var(--cp);\n    line-height: 1;\n    letter-spacing: -1px;\n    margin-bottom: 12px;}\n.wt-home-numbers .number-item__unit{font-family: var(--fa);\n    font-style: italic;\n    font-size: 36px;\n    color: var(--ca);}\n.wt-home-numbers .number-item__label{font-size: 14px;\n    font-weight: 500;\n    color: var(--cm);\n    letter-spacing: 0.5px;\n    line-height: 1.5;}\n@media (max-width: 900px){.wt-home-numbers .numbers{padding: 80px 24px;}\n.wt-home-numbers .numbers__grid{grid-template-columns: 1fr 1fr;}\n.wt-home-numbers .number-item{border-right: none; padding: 32px 0; border-bottom: 1px solid var(--cbr);}\n.wt-home-numbers .number-item:last-child{padding-left: 0;}\n.wt-home-numbers .number-item:nth-child(2), .wt-home-numbers .number-item:nth-child(3){padding-left: 0;}\n.wt-home-numbers .number-item__value{font-size: 44px; letter-spacing: -0.5px;}\n.wt-home-numbers .number-item__unit{font-size: 24px;}}"

export default function HomeNumbers({ stat1Label, stat2Label, stat3Label, stat4Label }) {
  return (
    <div className="wt-home-numbers">
      <style href="wt-home-numbers" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="numbers">
      <div className="numbers__inner">
      <p className="numbers__label">Watertuin in Zahlen</p>
      <div className="numbers__grid">
      <div className="number-item">
      <div className="number-item__value">ab 30,50<span className="number-item__unit">€</span></div>
      <p className="number-item__label" data-cms="homepage.stat1_label" dangerouslySetInnerHTML={{ __html: stat1Label }}></p>
      </div>
      <div className="number-item">
      <div className="number-item__value">500<span className="number-item__unit">+</span></div>
      <p className="number-item__label" data-cms="homepage.stat2_label" dangerouslySetInnerHTML={{ __html: stat2Label }}></p>
      </div>
      <div className="number-item">
      <div className="number-item__value">6<span className="number-item__unit"></span></div>
      <p className="number-item__label" data-cms="homepage.stat3_label" dangerouslySetInnerHTML={{ __html: stat3Label }}></p>
      </div>
      <div className="number-item">
      <div className="number-item__value">1<span className="number-item__unit">×</span></div>
      <p className="number-item__label" data-cms="homepage.stat4_label" dangerouslySetInnerHTML={{ __html: stat4Label }}></p>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
