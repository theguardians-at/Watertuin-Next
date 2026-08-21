// Baustein aus der Design-Vorlage: Schwebender CTA
// CSS ist auf .wt-home-float-cta__dot begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-float-cta__dot .float-cta{position: fixed;\n    bottom: 28px;\n    right: 28px;\n    z-index: 200;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background: var(--cpd);\n    color: #fff;\n    padding: 14px 24px;\n    border-radius: 100px;\n    font-weight: 600;\n    font-size: 14px;\n    box-shadow: 0 8px 32px rgba(0,0,0,0.3);\n    transform: translateY(80px);\n    opacity: 0;\n    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s;}\n.wt-home-float-cta__dot .float-cta.visible{transform: translateY(0); opacity: 1;}\n.wt-home-float-cta__dot .float-cta:hover{background: var(--cp);}\n.wt-home-float-cta__dot .float-cta__dot{width: 8px; height: 8px;\n    border-radius: 50%;\n    background: var(--ca);\n    animation: pulse 2s infinite;}"

export default function HomeFloatCtaDot() {
  return (
    <div className="wt-home-float-cta__dot">
      <style href="wt-home-float-cta__dot" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <a className='float-cta' href='/kontakt#form' id='floatCta'>
      <span className="float-cta__dot"></span>
        Tisch reservieren
      </a>
    </div>
  )
}
