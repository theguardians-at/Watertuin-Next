// Baustein aus der Design-Vorlage: Erlebnis-Kacheln
// CSS ist auf .wt-home-experience-tiles begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-experience-tiles .experience-tiles{display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    height: 520px;}\n.wt-home-experience-tiles .exp-tile{position: relative;\n    overflow: hidden;}\n.wt-home-experience-tiles .exp-tile:hover img{transform: scale(1.05);}\n.wt-home-experience-tiles .exp-tile img{height: 100%;\n    transition: transform 6s ease;}\n.wt-home-experience-tiles .exp-tile__overlay{position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(10,20,15,0.7) 0%, transparent 60%);}\n.wt-home-experience-tiles .exp-tile__content{position: absolute;\n    bottom: 36px;\n    left: 32px;\n    right: 32px;\n    z-index: 2;}\n.wt-home-experience-tiles .exp-tile__title{font-family: var(--fa);\n    font-style: italic;\n    font-size: 26px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 1.2;\n    margin-bottom: 8px;}\n.wt-home-experience-tiles .exp-tile__sub{font-size: 13px;\n    color: rgba(255,255,255,0.65);\n    font-weight: 500;\n    letter-spacing: 0.5px;}\n.wt-home-experience-tiles .exp-tile__arrow{position: absolute;\n    top: 28px;\n    right: 28px;\n    z-index: 2;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.15);\n    backdrop-filter: blur(4px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    opacity: 0;\n    transition: opacity 0.3s;}\n.wt-home-experience-tiles .exp-tile:hover .exp-tile__arrow{opacity: 1;}\n@media (max-width: 900px){.wt-home-experience-tiles .experience-tiles{grid-template-columns: 1fr; height: auto;}\n.wt-home-experience-tiles .exp-tile{height: 260px;}}"

export default function HomeExperienceTiles() {
  return (
    <div className="wt-home-experience-tiles">
      <style href="wt-home-experience-tiles" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <div className="experience-tiles">
      <div className="exp-tile">
      <img alt="Sushi" loading="lazy" src="/images/713004012_18337062823220022_4374156640151234116_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Sushi &amp;<br/>Maki</h3>
      <p className="exp-tile__sub">Ausgefallene Variationen · inklusive</p>
      </div>
      <a className='exp-tile__arrow' href='/sortiment'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      <div className="exp-tile">
      <img alt="Live Cooking Grill" loading="lazy" src="/images/683837578_18333546976220022_6734153120687868386_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Live Cooking<br/>Grill</h3>
      <p className="exp-tile__sub">Steak, Burger, Meeresfrüchte · frisch gegrillt</p>
      </div>
      <a className='exp-tile__arrow' href='/live-cooking'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      <div className="exp-tile">
      <img alt="Wok Gerichte" loading="lazy" src="/images/671679572_18331732927220022_1737032185927338218_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Wok-<br/>Gerichte</h3>
      <p className="exp-tile__sub">Asiatisch · Chinesisch · täglich frisch</p>
      </div>
      <a className='exp-tile__arrow' href='/sortiment'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
    </div>
  )
}
