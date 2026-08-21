// Baustein aus der Design-Vorlage: Anlässe
// CSS ist auf .wt-home-occasions begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-occasions .occasions{display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 560px;}\n.wt-home-occasions .occasion-tile{position: relative;\n    overflow: hidden;}\n.wt-home-occasions .occasion-tile img{height: 100%;\n    transition: transform 6s ease;}\n.wt-home-occasions .occasion-tile:hover img{transform: scale(1.04);}\n.wt-home-occasions .occasion-tile__overlay{position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(10,20,15,0.72) 0%, rgba(10,20,15,0.1) 60%);}\n.wt-home-occasions .occasion-tile__content{position: absolute;\n    bottom: 0; left: 0; right: 0;\n    padding: 48px;\n    z-index: 2;}\n.wt-home-occasions .occasion-tile__eyebrow{font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 12px;}\n.wt-home-occasions .occasion-tile__title{font-family: var(--fa);\n    font-style: italic;\n    font-size: 36px;\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.1;\n    letter-spacing: -1px;\n    margin-bottom: 14px;}\n.wt-home-occasions .occasion-tile__desc{font-size: 15px;\n    color: rgba(255,255,255,0.7);\n    line-height: 1.55;\n    margin-bottom: 28px;\n    max-width: 380px;}\n.wt-home-occasions .occasion-tile__link{display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 14px;\n    font-weight: 600;\n    color: #fff;\n    border-bottom: 1px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: border-color 0.2s;}\n.wt-home-occasions .occasion-tile__link:hover{border-color: #fff;}\n@media (max-width: 900px){.wt-home-occasions .occasions{grid-template-columns: 1fr;}\n.wt-home-occasions .occasion-tile{height: 400px;}}"

export default function HomeOccasions() {
  return (
    <div className="wt-home-occasions">
      <style href="wt-home-occasions" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <div className="occasions">
      <div className="occasion-tile">
      <img alt="Geburtstag feiern" loading="lazy" src="/images/686273227_18332842036220022_8080592644259100875_n.jpg"/>
      <div className="occasion-tile__overlay"></div>
      <div className="occasion-tile__content">
      <p className="occasion-tile__eyebrow">Feiern</p>
      <h3 className="occasion-tile__title">Geburtstage,<br/>die man nicht vergisst.</h3>
      <p className="occasion-tile__desc">Reservierter Tisch, persönliche Deko, ein Abend komplett nach Ihren Wünschen.</p>
      <a className='occasion-tile__link' href='/geburtstag'>
              Mehr erfahren
              <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      <div className="occasion-tile">
      <img alt="Gruppenevents" loading="lazy" src="/images/707781232_18336043660220022_6272018094492056676_n.jpg"/>
      <div className="occasion-tile__overlay"></div>
      <div className="occasion-tile__content">
      <p className="occasion-tile__eyebrow">Gruppen &amp; Events</p>
      <h3 className="occasion-tile__title">Großer Hunger,<br/>große Runde.</h3>
      <p className="occasion-tile__desc">Firmenevents, Teamdinners, Familienfeiern — wir kümmern uns um alles.</p>
      <a className='occasion-tile__link' href='/gruppen-events'>
              Anfragen
              <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      </div>
    </div>
  )
}
