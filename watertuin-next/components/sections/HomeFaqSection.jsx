'use client'
// Baustein aus der Design-Vorlage: FAQ
// CSS ist auf .wt-home-faq-section begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-faq-section .faq-section{background: var(--cs);\n    padding: 120px 60px;}\n.wt-home-faq-section .faq-section__inner{max-width: 1100px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 360px 1fr;\n    gap: 80px;\n    align-items: start;}\n.wt-home-faq-section .faq-section__left{position: sticky;\n    top: 100px;}\n.wt-home-faq-section .faq-section__eyebrow{font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 24px;}\n.wt-home-faq-section .faq-section__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(34px, 3.5vw, 52px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.1;\n    letter-spacing: -1.5px;\n    margin-bottom: 24px;}\n.wt-home-faq-section .faq-section__sub{font-size: 15px;\n    color: var(--cm);\n    line-height: 1.6;}\n.wt-home-faq-section .faq-list{list-style: none;\n    border-top: 1px solid var(--cbr);}\n.wt-home-faq-section .faq-item{border-bottom: 1px solid var(--cbr);}\n.wt-home-faq-section .faq-question{width: 100%;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 28px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 24px;\n    text-align: left;\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 600;\n    color: var(--cd);\n    line-height: 1.3;\n    transition: color 0.2s;}\n.wt-home-faq-section .faq-question:hover{color: var(--cp);}\n.wt-home-faq-section .faq-question.open{color: var(--cp);}\n.wt-home-faq-section .faq-icon{flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: var(--cbr);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.3s;}\n.wt-home-faq-section .faq-question.open .faq-icon{background: var(--cp);\n    transform: rotate(45deg);}\n.wt-home-faq-section .faq-icon svg{stroke: var(--cd); width: 12px; height: 12px;}\n.wt-home-faq-section .faq-question.open .faq-icon svg{stroke: #fff;}\n.wt-home-faq-section .faq-answer{display: none;\n    padding: 0 0 28px;\n    font-size: 16px;\n    color: var(--cb);\n    line-height: 1.65;}\n.wt-home-faq-section .faq-answer.open{display: block;}\n@media (max-width: 900px){.wt-home-faq-section .faq-section{padding: 80px 24px;}\n.wt-home-faq-section .faq-section__inner{grid-template-columns: 1fr;}\n.wt-home-faq-section .faq-section__left{position: static;}}"

export default function HomeFaqSection({ faqItems, eyebrow, headline, sub }) {
  return (
    <div className="wt-home-faq-section">
      <style href="wt-home-faq-section" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="faq-section">
        <div className="faq-section__inner">
          <div className="faq-section__left">
            <p className="faq-section__eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p>
            <h2 className="faq-section__headline" dangerouslySetInnerHTML={{ __html: headline }}></h2>
            <p className="faq-section__sub" dangerouslySetInnerHTML={{ __html: sub }}></p>
          </div>
          <ul className="faq-list">
            {(faqItems || []).map((item, i) => (
                <li className="faq-item" key={i}>
                  <button aria-expanded="false" className="faq-question">
                    <span dangerouslySetInnerHTML={{ __html: item.faqQuestion }} />
                    <span className="faq-icon">
                      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
                        <line x1="12" x2="12" y1="5" y2="19"></line>
                        <line x1="5" x2="19" y1="12" y2="12"></line>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.faqAnswer }}></div>
                </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
