// Baustein aus der Design-Vorlage: Gästestimmen
// CSS ist auf .wt-home-testimonials begrenzt, damit sich Bausteine verschiedener
// Seiten nicht gegenseitig ueberschreiben.
const css = ".wt-home-testimonials .testimonials{background: var(--cpd);\n    padding: 120px 60px;}\n.wt-home-testimonials .testimonials__inner{max-width: 1100px;\n    margin: 0 auto;}\n.wt-home-testimonials .testimonials__header{margin-bottom: 72px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    gap: 40px;}\n.wt-home-testimonials .testimonials__headline{font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(36px, 4vw, 56px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.08;\n    letter-spacing: -1.5px;\n    max-width: 560px;}\n.wt-home-testimonials .testimonials__meta{text-align: right;}\n.wt-home-testimonials .testimonials__rating{font-family: var(--fa);\n    font-style: italic;\n    font-size: 52px;\n    font-weight: 700;\n    color: var(--ca);\n    letter-spacing: -0.5px;\n    line-height: 1;\n    margin-bottom: 6px;}\n.wt-home-testimonials .testimonials__platform{font-size: 13px;\n    color: rgba(255,255,255,0.5);\n    letter-spacing: 1px;\n    text-transform: uppercase;}\n.wt-home-testimonials .testimonials__grid{display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 1px;\n    background: rgba(255,255,255,0.08);}\n.wt-home-testimonials .testimonial-item{background: var(--cpd);\n    padding: 40px;}\n.wt-home-testimonials .testimonial-item__stars{color: var(--ca);\n    font-size: 16px;\n    letter-spacing: 2px;\n    margin-bottom: 20px;}\n.wt-home-testimonials .testimonial-item__quote{font-family: var(--fa);\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.9);\n    line-height: 1.45;\n    margin-bottom: 28px;}\n.wt-home-testimonials .testimonial-item__author{font-size: 13px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.45);\n    letter-spacing: 1px;\n    text-transform: uppercase;}\n@media (max-width: 900px){.wt-home-testimonials .testimonials{padding: 80px 24px;}\n.wt-home-testimonials .testimonials__header{flex-direction: column; align-items: flex-start;}\n.wt-home-testimonials .testimonials__meta{text-align: left;}\n.wt-home-testimonials .testimonials__grid{grid-template-columns: 1fr;}}"

export default function HomeTestimonials() {
  return (
    <div className="wt-home-testimonials">
      <style href="wt-home-testimonials" precedence="medium" dangerouslySetInnerHTML={{ __html: css }} />
      <section className="testimonials">
      <div className="testimonials__inner">
      <div className="testimonials__header">
      <h2 className="testimonials__headline">
              Was unsere<br/>
              Gäste sagen.
            </h2>
      <div className="testimonials__meta">
      <p className="testimonials__rating">—</p>
      <p className="testimonials__platform">Kundenbewertungen folgen</p>
      </div>
      </div>
      <div className="testimonials__grid">
      <div className="testimonial-item">
      <div className="testimonial-item__stars">★★★★★</div>
      <p className="testimonial-item__quote">Kundenbewertung folgt.</p>
      <p className="testimonial-item__author">Platzhalter</p>
      </div>
      <div className="testimonial-item">
      <div className="testimonial-item__stars">★★★★★</div>
      <p className="testimonial-item__quote">Kundenbewertung folgt.</p>
      <p className="testimonial-item__author">Platzhalter</p>
      </div>
      <div className="testimonial-item">
      <div className="testimonial-item__stars">★★★★★</div>
      <p className="testimonial-item__quote">Kundenbewertung folgt.</p>
      <p className="testimonial-item__author">Platzhalter</p>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
