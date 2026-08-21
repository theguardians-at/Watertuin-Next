// Baustein aus der Design-Vorlage: Ablauf
// CSS ist auf .wt-home-process begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-process .process{background: var(--cbg);\n    padding: 120px 60px;}\n.wt-home-process .process__inner{max-width: 1100px;\n    margin: 0 auto;}\n.wt-home-process .process__header{display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 60px;\n    align-items: end;\n    margin-bottom: 80px;}\n.wt-home-process .process__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(36px, 4vw, 56px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.08;\n    letter-spacing: -1.5px;}\n.wt-home-process .process__intro{font-size: 17px;\n    color: var(--cb);\n    line-height: 1.65;}\n.wt-home-process .process__steps{display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    border-top: 1px solid var(--cbr);}\n.wt-home-process .process-step{padding: 48px 32px 48px 0;\n    border-right: 1px solid var(--cbr);}\n.wt-home-process .process-step:last-child{border-right: none;}\n.wt-home-process .process-step:not(:first-child){padding-left: 32px;}\n.wt-home-process .process-step__num{font-family: var(--fa);\n    font-size: 13px;\n    font-style: italic;\n    color: var(--cm);\n    margin-bottom: 20px;}\n.wt-home-process .process-step__title{font-family: var(--fa);\n    font-style: italic;\n    font-size: 22px;\n    font-weight: 600;\n    color: var(--cd);\n    line-height: 1.2;\n    margin-bottom: 12px;}\n.wt-home-process .process-step__desc{font-size: 14px;\n    color: var(--cm);\n    line-height: 1.6;}\n@media (max-width: 900px){.wt-home-process .process{padding: 80px 24px;}\n.wt-home-process .process__header{grid-template-columns: 1fr;}\n.wt-home-process .process__steps{grid-template-columns: 1fr 1fr;}\n.wt-home-process .process-step{border-right: none; padding: 32px 0; border-bottom: 1px solid var(--cbr);}\n.wt-home-process .process-step:last-child{border-bottom: none;}}"

export default function HomeProcess({ processHeadline }) {
  return (
    <div className="wt-home-process">
      <style href="wt-home-process" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="process">
      <div className="process__inner">
      <div className="process__header">
      <h2 className="process__headline" data-cms="homepage.process_headline" dangerouslySetInnerHTML={{ __html: processHeadline }}></h2>
      <p className="process__intro">
              SB-Buffet, Live Cooking und Tischservice — so oft Sie möchten,
              alles inklusive, direkt zu Ihnen oder am Buffet geholt.
            </p>
      </div>
      <div className="process__steps">
      <div className="process-step">
      <p className="process-step__num">01.</p>
      <h3 className="process-step__title">Tisch reservieren</h3>
      <p className="process-step__desc">Online in 60 Sekunden. Oder rufen Sie uns an — wir freuen uns auf Sie.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">02.</p>
      <h3 className="process-step__title">Platz nehmen</h3>
      <p className="process-step__desc">Ankommen, wohlfühlen, die Karte in Ruhe studieren.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">03.</p>
      <h3 className="process-step__title">Bestellen</h3>
      <p className="process-step__desc">So viel Sie möchten, so oft Sie möchten. Alles kommt frisch an den Tisch.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">04.</p>
      <h3 className="process-step__title">Einfach genießen</h3>
      <p className="process-step__desc">Kein Limit, kein Stress, kein Zählen. Einmal zahlen — den Rest erledigen wir.</p>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
