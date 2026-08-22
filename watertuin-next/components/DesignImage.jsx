'use client'

// Builders eingebaute Image-Komponente rendert <picture><img>. Die beiden
// zusaetzlichen Ebenen aendern, wogegen height:100% aufgeloest wird - im
// Entwurf bestimmt das Bild ueber sein Seitenverhaeltnis die Zeilenhoehe,
// mit Wrapper bleibt sie beim min-height stehen.
//
// Mit noWrap gibt Builder keinen eigenen Container aus, wir setzen das <img>
// selbst und behalten trotzdem die Dateiauswahl im Editor.
export default function DesignImage({ image, altText, attributes }) {
  return <img {...attributes} src={image} alt={altText || ''} />
}
