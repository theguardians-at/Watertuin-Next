// Baustein aus der Design-Vorlage: Foto-Kacheln
// CSS ist auf .wt-home-photo-tiles begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-photo-tiles .photo-tiles{display: grid;\n    grid-template-columns: 55% 45%;\n    height: 680px;}\n.wt-home-photo-tiles .photo-tile{position: relative;\n    overflow: hidden;}\n.wt-home-photo-tiles .photo-tile img{transition: transform 8s ease;}\n.wt-home-photo-tiles .photo-tile:hover img{transform: scale(1.04);}\n.wt-home-photo-tiles .photo-tile__caption{position: absolute;\n    bottom: 0; left: 0; right: 0;\n    padding: 40px 44px;\n    background: linear-gradient(to top, rgba(10,20,15,0.65), transparent);}\n.wt-home-photo-tiles .photo-tile__label{font-family: var(--fa);\n    font-style: italic;\n    font-size: 28px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 1.2;}\n@media (max-width: 900px){.wt-home-photo-tiles .photo-tiles{grid-template-columns: 1fr; height: auto;}\n.wt-home-photo-tiles .photo-tile{height: 320px;}}"

export default function HomePhotoTiles() {
  return (
    <div className="wt-home-photo-tiles">
      <style href="wt-home-photo-tiles" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <div className="photo-tiles">
      <div className="photo-tile">
      <img alt="Asiatische Spezialitäten" loading="lazy" src="/images/697084703_18334830958220022_594618541243141696_n.jpg"/>
      <div className="photo-tile__caption">
      <p className="photo-tile__label">World Kitchen.<br/>Jeden Abend.</p>
      </div>
      </div>
      <div className="photo-tile">
      <img alt="Frische Zutaten" loading="lazy" src="/images/719939721_18337807327220022_5964613539873214482_n.jpg"/>
      <div className="photo-tile__caption">
      <p className="photo-tile__label">Frisch zubereitet.<br/>Täglich.</p>
      </div>
      </div>
      </div>
    </div>
  )
}
