// Baustein aus der Design-Vorlage: Foto-Kacheln
// CSS ist auf .wt-home-photo-tiles begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-photo-tiles .photo-tiles{display: grid;\n    grid-template-columns: 55% 45%;\n    height: 680px;}\n.wt-home-photo-tiles .photo-tile{position: relative;\n    overflow: hidden;}\n.wt-home-photo-tiles .photo-tile img{transition: transform 8s ease;}\n.wt-home-photo-tiles .photo-tile:hover img{transform: scale(1.04);}\n.wt-home-photo-tiles .photo-tile__caption{position: absolute;\n    bottom: 0; left: 0; right: 0;\n    padding: 40px 44px;\n    background: linear-gradient(to top, rgba(10,20,15,0.65), transparent);}\n.wt-home-photo-tiles .photo-tile__label{font-family: var(--fa);\n    font-style: italic;\n    font-size: 28px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 1.2;}\n@media (max-width: 900px){.wt-home-photo-tiles .photo-tiles{grid-template-columns: 1fr; height: auto;}\n.wt-home-photo-tiles .photo-tile{height: 320px;}}"

export default function HomePhotoTiles({ photoItems }) {
  return (
    <div className="wt-home-photo-tiles">
      <style href="wt-home-photo-tiles" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <div className="photo-tiles">
        {(photoItems || []).map((item, i) => (
            <div className="photo-tile" key={i}>
              <img alt="Asiatische Spezialitäten" loading="lazy" src={item.img}/>
              <div className="photo-tile__caption">
                <p className="photo-tile__label" dangerouslySetInnerHTML={{ __html: item.label }}></p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}
