import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Preise \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}\nimg{display:block;width:100%;height:100%;object-fit:cover}\na{text-decoration:none;color:inherit}\n\n/* HEADER */\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px;transition:background .2s,transform .2s}\n.btn-reserve:hover{background:#f5b030;transform:translateY(-1px)}\n\n/* PAGE HERO */\n.page-hero{padding:160px 60px 100px;background:var(--cs);border-bottom:1px solid var(--cbr)}\n.page-hero__inner{max-width:1100px;margin:0 auto}\n.page-hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cp);margin-bottom:20px}\n.page-hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(44px,6vw,88px);font-weight:700;color:var(--cd);line-height:1.02;letter-spacing:-0.5px;margin-bottom:24px}\n.page-hero__sub{font-size:19px;color:var(--cb);line-height:1.6;max-width:560px}\n\n/* PRICING SECTION */\n.pricing{padding:100px 60px;background:var(--cbg)}\n.pricing__inner{max-width:1100px;margin:0 auto}\n.pricing__intro{text-align:center;margin-bottom:72px}\n.pricing__intro-label{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cm);margin-bottom:20px}\n.pricing__intro-text{font-family:var(--fa);font-style:italic;font-size:clamp(28px,3.5vw,48px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.1;max-width:700px;margin:0 auto}\n\n.pricing__tabs{display:flex;justify-content:center;gap:0;margin-bottom:64px;border:1px solid var(--cbr);border-radius:100px;width:fit-content;margin:0 auto 64px;overflow:hidden}\n.tab-btn{padding:12px 32px;font-family:var(--ff);font-size:14px;font-weight:600;color:var(--cm);background:none;border:none;cursor:pointer;transition:background .2s,color .2s}\n.tab-btn.active{background:var(--cp);color:#fff}\n\n.pricing__grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:var(--cbr)}\n.price-tier{background:var(--cs);padding:56px 44px;position:relative}\n.price-tier.featured{background:var(--cpd)}\n.price-tier__badge{position:absolute;top:28px;right:28px;background:var(--ca);color:var(--cd);padding:4px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase}\n.price-tier__name{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cm);margin-bottom:16px}\n.price-tier.featured .price-tier__name{color:rgba(255,255,255,.5)}\n.price-tier__price{font-family:var(--fa);font-style:italic;font-size:72px;font-weight:700;color:var(--cp);letter-spacing:-1px;line-height:1;margin-bottom:4px}\n.price-tier.featured .price-tier__price{color:var(--ca)}\n.price-tier__unit{font-size:14px;color:var(--cm);margin-bottom:32px}\n.price-tier.featured .price-tier__unit{color:rgba(255,255,255,.45)}\n.price-tier__divider{height:1px;background:var(--cbr);margin-bottom:32px}\n.price-tier.featured .price-tier__divider{background:rgba(255,255,255,.1)}\n.price-tier__includes{font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:var(--cm);margin-bottom:20px}\n.price-tier.featured .price-tier__includes{color:rgba(255,255,255,.4)}\n.price-tier__list{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:40px}\n.price-tier__list li{font-size:15px;color:var(--cb);line-height:1.4;display:flex;align-items:flex-start;gap:10px}\n.price-tier.featured .price-tier__list li{color:rgba(255,255,255,.75)}\n.price-tier__list li::before{content:'\u2713';color:var(--cp);font-weight:700;flex-shrink:0;margin-top:1px}\n.price-tier.featured .price-tier__list li::before{color:var(--ca)}\n.price-tier__cta{display:block;text-align:center;padding:14px 28px;border-radius:100px;font-weight:700;font-size:15px;transition:background .2s,transform .2s}\n.price-tier__cta.primary{background:var(--ca);color:var(--cd)}\n.price-tier__cta.primary:hover{background:#f5b030;transform:translateY(-2px)}\n.price-tier__cta.secondary{background:rgba(255,255,255,.08);color:rgba(255,255,255,.8)}\n.price-tier__cta.secondary:hover{background:rgba(255,255,255,.15)}\n.price-tier__cta.outline{border:1.5px solid var(--cbr);color:var(--cb)}\n.price-tier__cta.outline:hover{border-color:var(--cp);color:var(--cp)}\n\n/* INCLUDED SECTION */\n.included{background:var(--cs);padding:100px 60px;border-top:1px solid var(--cbr)}\n.included__inner{max-width:1100px;margin:0 auto}\n.included__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,56px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05;margin-bottom:64px;max-width:600px}\n.included__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--cbr)}\n.included-item{padding:44px 36px 44px 0;border-right:1px solid var(--cbr)}\n.included-item:last-child{border-right:none}\n.included-item:not(:first-child){padding-left:36px}\n.included-item__icon{font-size:28px;margin-bottom:16px}\n.included-item__title{font-family:var(--fa);font-style:italic;font-size:20px;font-weight:600;color:var(--cd);margin-bottom:8px}\n.included-item__desc{font-size:14px;color:var(--cm);line-height:1.6}\n\n/* CHILDREN */\n.children{background:var(--cpxl);padding:60px}\n.children__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}\n.children__headline{font-family:var(--fa);font-style:italic;font-size:36px;font-weight:700;color:var(--cpd);letter-spacing:-1px;line-height:1.1;margin-bottom:16px}\n.children__body{font-size:16px;color:var(--cp);line-height:1.6}\n.children__prices{display:flex;flex-direction:column;gap:16px}\n.child-price{display:flex;align-items:center;justify-content:space-between;padding:20px 28px;background:rgba(255,255,255,.6);border-radius:12px}\n.child-price__label{font-size:15px;font-weight:500;color:var(--cpd)}\n.child-price__value{font-family:var(--fa);font-style:italic;font-size:24px;font-weight:700;color:var(--cp)}\n\n/* FAQ */\n.faq{padding:100px 60px;background:var(--cbg)}\n.faq__inner{max-width:780px;margin:0 auto}\n.faq__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;margin-bottom:56px;text-align:center}\n.faq-list{list-style:none;border-top:1px solid var(--cbr)}\n.faq-item{border-bottom:1px solid var(--cbr)}\n.faq-question{width:100%;background:none;border:none;cursor:pointer;padding:24px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;font-family:var(--fa);font-style:italic;font-size:19px;font-weight:600;color:var(--cd);line-height:1.3;transition:color .2s}\n.faq-question:hover,.faq-question.open{color:var(--cp)}\n.faq-icon{flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--cbr);display:flex;align-items:center;justify-content:center;transition:background .2s,transform .3s}\n.faq-question.open .faq-icon{background:var(--cp);transform:rotate(45deg)}\n.faq-icon svg{stroke:var(--cd);width:11px;height:11px}\n.faq-question.open .faq-icon svg{stroke:#fff}\n.faq-answer{display:none;padding:0 0 24px;font-size:15px;color:var(--cb);line-height:1.65}\n.faq-answer.open{display:block}\n\n/* CTA STRIP */\n.cta-strip{background:var(--cp);padding:80px 60px;text-align:center}\n.cta-strip__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,56px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:32px}\n.cta-strip__btn{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;transition:background .2s,transform .2s}\n.cta-strip__btn:hover{background:#f5b030;transform:translateY(-2px)}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .pricing{padding:60px 24px}\n  .pricing__tabs{flex-wrap:wrap;justify-content:center}\n  .pricing__grid{grid-template-columns:1fr}\n  .price-tier{padding:36px 24px}\n  .price-tier__price{font-size:56px}\n  .included{padding:60px 24px}\n  .included__grid{grid-template-columns:1fr}\n  .included-item{border-right:none;padding:28px 0;border-bottom:1px solid var(--cbr)}\n  .included-item:last-child{border-bottom:none}\n  .included-item:not(:first-child){padding-left:0}\n  .children{padding:40px 24px}\n  .children__inner{grid-template-columns:1fr;gap:32px}\n  .child-price{flex-direction:column;align-items:flex-start;gap:8px}\n  .child-price__value{font-size:20px}\n  .faq{padding:60px 24px}\n  .cta-strip{padding:60px 24px}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function PreisePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link active' href='/preise'>Preise</a>
      <a className='nav-link' href='/live-cooking'>Live Cooking</a>
      <a className='nav-link' href='/geburtstag'>Events</a>
      <a className='nav-link' href='/ueber-uns'>Über uns</a>
      <a className='nav-link' href='/kontakt'>Kontakt</a>
      <a className='btn-reserve' href='/kontakt#form'>Tisch reservieren</a></nav>
      <button aria-label="Menü" className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
      </header>
      <div className="mobile-menu" id="mobileMenu">
      <button className="mobile-menu__close" id="menuClose">✕</button>
      <a href='/'>Home</a>
      <a href='/sortiment'>Sortiment</a>
      <a className='active' href='/preise'>Preise</a>
      <a href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="page-hero">
      <div className="page-hero__inner">
      <p className="page-hero__eyebrow" data-cms="preise.hero_eyebrow">Transparenz von Anfang an</p>
      <h1 className="page-hero__headline" data-cms="preise.hero_headline">Ein Preis.<br/>Alles dabei.</h1>
      <p className="page-hero__sub" data-cms="preise.hero_sub">Kein Zählen, keine Extras. Einmal bezahlen — dann einfach genießen, so viel Sie möchten.</p>
      </div>
      </section>
      <section className="pricing">
      <div className="pricing__inner">
      <div className="pricing__intro">
      <p className="pricing__intro-label">Unsere Tarife</p>
      <p className="pricing__intro-text">Essen, Trinken, Desserts — alles in einem Preis.</p>
      </div>
      <div className="pricing__grid">
      <div className="price-tier">
      <p className="price-tier__name" data-cms="prices.weekday.name">Weekday Dinner</p>
      <p className="price-tier__price" data-cms="prices.weekday.price" data-cms-raw-price="1">30<span style={{fontSize: "36px"}}>,50€</span></p>
      <p className="price-tier__unit" data-cms="prices.weekday.desc">ab 16 J. · Mo, Mi &amp; Do · 17:30–22:00</p>
      <div className="price-tier__divider"></div>
      <p className="price-tier__includes">Alle Altersgruppen</p>
      <ul className="price-tier__list">
      <li>Ab 16 Jahre: €30,50</li>
      <li>Jugendliche 12–15 J.: €27,00</li>
      <li>Kinder 8–11 J.: €15,00</li>
      <li>Kinder 4–7 J.: €10,00</li>
      <li>SB-Buffet bis 21:30</li>
      </ul>
      <a className='price-tier__cta outline' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <div className="price-tier featured">
      <span className="price-tier__badge">Beliebt</span>
      <p className="price-tier__name" data-cms="prices.friday.name">Friday Dinner</p>
      <p className="price-tier__price" data-cms="prices.friday.price" data-cms-raw-price="1">33<span style={{fontSize: "36px"}}>,50€</span></p>
      <p className="price-tier__unit" data-cms="prices.friday.desc">ab 16 J. · Freitag · 17:30–22:00</p>
      <div className="price-tier__divider"></div>
      <p className="price-tier__includes">Alle Altersgruppen</p>
      <ul className="price-tier__list">
      <li>Ab 16 Jahre: €33,50</li>
      <li>Jugendliche 12–15 J.: €29,00</li>
      <li>Kinder 8–11 J.: €17,00</li>
      <li>Kinder 4–7 J.: €12,00</li>
      <li>SB-Buffet bis 21:30</li>
      </ul>
      <a className='price-tier__cta secondary' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <div className="price-tier">
      <p className="price-tier__name" data-cms="prices.weekend.name">Weekend</p>
      <p className="price-tier__price" data-cms="prices.weekend.price" data-cms-raw-price="1">33<span style={{fontSize: "36px"}}>,50€</span></p>
      <p className="price-tier__unit" data-cms="prices.weekend.desc">ab 16 J. · Sa, So &amp; Feiertag · 11:30–16:00 &amp; 17:30–22:00</p>
      <div className="price-tier__divider"></div>
      <p className="price-tier__includes">Alle Altersgruppen</p>
      <ul className="price-tier__list">
      <li>Ab 16 Jahre: €33,50</li>
      <li>Jugendliche 12–15 J.: €29,00</li>
      <li>Kinder 8–11 J.: €17,00</li>
      <li>Kinder 4–7 J.: €12,00</li>
      <li>11:30–16:00 und 17:30–22:00</li>
      </ul>
      <a className='price-tier__cta outline' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      </div>
      </div>
      </section>
      <section className="included">
      <div className="included__inner">
      <h2 className="included__headline">Was in jedem Preis enthalten ist.</h2>
      <div className="included__grid">
      <div className="included-item">
      <div className="included-item__icon">🍣</div>
      <h3 className="included-item__title">80+ Gerichte</h3>
      <p className="included-item__desc">Sushi, Sashimi, Dim Sum, Wok, Grill, Suppen, Salate, Desserts — täglich frisch, täglich neu.</p>
      </div>
      <div className="included-item">
      <div className="included-item__icon">🍹</div>
      <h3 className="included-item__title">Getränke inklusive</h3>
      <p className="included-item__desc">Je nach Tarif: Softdrinks und Tee, oder das volle Programm mit Sake, Wein, Bier und Cocktails.</p>
      </div>
      <div className="included-item">
      <div className="included-item__icon">🍡</div>
      <h3 className="included-item__title">Desserts &amp; Beilagen</h3>
      <p className="included-item__desc">Mochi, Matcha-Eis, Waffeln, hausgemachte Saucen — alles ohne Aufpreis, so oft Sie möchten.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="children">
      <div className="children__inner">
      <div>
      <h2 className="children__headline" data-cms="preise.children_headline">Für die ganze Familie.</h2>
      <p className="children__body" data-cms="preise.children_body">Kinder sind bei uns herzlich willkommen. Unsere Küche bietet milde, kinderfreundliche Optionen — und faire Preise für die Kleinen.<br/><br/>*Kinder unter 4 Jahren: bis zu 2 Kinder gratis pro Erwachsenem; jedes weitere Kind €3,– Servicepauschale. Preise: Weekday Dinner / Freitag &amp; Weekend.</p>
      </div>
      <div className="children__prices">
      <div className="child-price" style={{background: "rgba(255,255,255,.3)", fontSize: "12px", letterSpacing: "1px", padding: "10px 28px"}}>
      <span style={{fontWeight: "600", color: "var(--cpd)"}}>Altersgruppe</span>
      <span style={{fontWeight: "600", color: "var(--cpd)"}}>Mo/Mi/Do · Fr/Sa/So</span>
      </div>
      <div className="child-price">
      <span className="child-price__label">Kinder 4–7 Jahre</span>
      <span className="child-price__value">€10,00 · €12,00</span>
      </div>
      <div className="child-price">
      <span className="child-price__label">Kinder 8–11 Jahre</span>
      <span className="child-price__value">€15,00 · €17,00</span>
      </div>
      <div className="child-price">
      <span className="child-price__label">Jugendliche 12–15 J.</span>
      <span className="child-price__value">€27,00 · €29,00</span>
      </div>
      <div className="child-price">
      <span className="child-price__label">Unter 4 Jahre</span>
      <span className="child-price__value">Gratis*</span>
      </div>
      </div>
      </div>
      </section>
      <section className="faq">
      <div className="faq__inner">
      <h2 className="faq__headline">Fragen zu den Preisen?</h2>
      <ul className="faq-list">
      <li className="faq-item">
      <button className="faq-question">Gibt es einen Mindestverzehr?<span className="faq-icon"><svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span></button>
      <div className="faq-answer">Nein. Der Preis pro Person ist der Gesamtpreis — egal wie viel oder wie wenig Sie essen. Kein Mindestverzehr, keine Servicegebühren.</div>
      </li>
      <li className="faq-item">
      <button className="faq-question">Sind Trinkgeld und Service inkludiert?<span className="faq-icon"><svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span></button>
      <div className="faq-answer">Service ist inklusive, Trinkgeld ist freiwillig und immer willkommen. Kein automatischer Aufschlag.</div>
      </li>
      <li className="faq-item">
      <button className="faq-question">Kann ich zwischen den Tarifen wechseln?<span className="faq-icon"><svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span></button>
      <div className="faq-answer">Alle Personen am Tisch wählen denselben Tarif entsprechend dem Besuchstag (Weekday Dinner, Friday Dinner oder Weekend).</div>
      </li>
      <li className="faq-item">
      <button className="faq-question">Was passiert, wenn ich über 90 Minuten bleibe?<span className="faq-icon"><svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span></button>
      <div className="faq-answer">Das SB-Buffet ist bis 15:30 (Mittagssession) bzw. 21:30 (Abendsession) geöffnet. Bei freier Kapazität sind wir flexibel — aber ohne Stress.</div>
      </li>
      </ul>
      </div>
      </section>
      <section className="cta-strip">
      <h2 className="cta-strip__headline" data-cms="preise.cta_headline">Bereit? Ihr Tisch wartet.</h2>
      <a className="cta-strip__btn" href="#reservieren">Jetzt reservieren</a>
      </section>
      <footer>
      <div className="footer__grid">
      <div>
      <span style={{display: "block", marginBottom: "20px"}}><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></span>
      <p className="footer__tagline">Mehr von allem.<br/>Für jeden.</p>
      <div className="footer__social">
      <a aria-label="Instagram" className="social-icon" href="#">IG</a>
      <a aria-label="Facebook" className="social-icon" href="#">FB</a>
      <a aria-label="TikTok" className="social-icon" href="#">TT</a>
      </div>
      </div>
      <div>
      <p className="footer__col-title">Restaurant</p>
      <ul className="footer__links">
      <li><a href='/sortiment'>Sortiment</a></li>
      <li><a href='/preise'>Preise</a></li>
      <li><a href='/live-cooking'>Live Cooking</a></li>
      <li><a href='/kontakt#form'>Tisch reservieren</a></li>
      </ul>
      </div>
      <div>
      <p className="footer__col-title">Events</p>
      <ul className="footer__links">
      <li><a href='/geburtstag'>Geburtstage</a></li>
      <li><a href='/gruppen-events'>Gruppen &amp; Events</a></li>
      <li><a href='/ueber-uns'>Über uns</a></li>
      <li><a href='/kontakt'>Kontakt</a></li>
      </ul>
      </div>
      <div>
      <p className="footer__col-title">Besuchen</p>
      <address className="footer__address">
      <strong>Watertuin Vienna</strong><br/>
              Etrichstraße 23<br/>
              A-1110 Wien<br/><br/>
              Mo/Mi/Do/Fr 17:30–22:00<br/>
              Sa/So/Feiertag 11:30–16:00 &amp; 17:30–22:00<br/>
              Di geschlossen<br/><br/>
      <a href="tel:+4317671497" style={{color: "rgba(255,255,255,0.55)"}}>+43 1 767 14 97</a>
      </address>
      </div>
      </div>
      <div className="footer__bottom">
      <span>© 2025 Watertuin Vienna</span>
      <div className="footer__legal">
      <a href='/impressum'>Impressum</a>
      <a href='/datenschutz'>Datenschutz</a>
      </div>
      </div>
      </footer>
      <DesignInteractions />
    </>
  )
}
