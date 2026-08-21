import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Kontakt \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}img{display:block;width:100%;height:100%;object-fit:cover}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px}\n\n/* PAGE HEADER */\n.page-header{padding:160px 60px 80px;background:var(--cs)}\n.page-header__inner{max-width:1100px;margin:0 auto}\n.page-header__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cp);margin-bottom:20px}\n.page-header__headline{font-family:var(--fa);font-style:italic;font-size:clamp(52px,7vw,96px);font-weight:700;color:var(--cd);line-height:1;letter-spacing:-0.5px;margin-bottom:20px}\n.page-header__sub{font-size:19px;color:var(--cb);line-height:1.6;max-width:520px}\n\n/* MAIN GRID */\n.contact-main{padding:0 60px 100px;background:var(--cs)}\n.contact-main__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}\n\n/* INFO COLUMN */\n.contact-info{padding-top:60px}\n.info-block{margin-bottom:48px}\n.info-block:last-child{margin-bottom:0}\n.info-block__label{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:var(--cm);margin-bottom:14px}\n.info-block__value{font-size:17px;color:var(--cd);line-height:1.6}\n.info-block__value a{color:var(--cp);transition:color .2s}\n.info-block__value a:hover{color:var(--cpd)}\n\n.hours-grid{display:flex;flex-direction:column;gap:8px}\n.hours-row{display:flex;justify-content:space-between;font-size:15px;color:var(--cb);padding-bottom:8px;border-bottom:1px solid var(--cbr)}\n.hours-row:last-child{border-bottom:none}\n.hours-row__day{font-weight:500;color:var(--cd)}\n\n/* MAP PLACEHOLDER */\n.map-block{position:relative;height:240px;background:var(--cpxl);border-radius:8px;overflow:hidden;margin-top:40px;display:flex;align-items:center;justify-content:center}\n.map-block__inner{text-align:center;z-index:1}\n.map-block__icon{font-size:40px;margin-bottom:12px}\n.map-block__title{font-family:var(--fa);font-style:italic;font-size:20px;font-weight:600;color:var(--cpd);margin-bottom:6px}\n.map-block__addr{font-size:14px;color:var(--cp)}\n.map-block__link{display:inline-block;margin-top:16px;background:var(--cp);color:#fff;padding:10px 22px;border-radius:100px;font-size:13px;font-weight:600;transition:background .2s}\n.map-block__link:hover{background:var(--cpd)}\n\n/* RESMIO WIDGET COLUMN */\n.resmio-col{background:var(--cbg);padding:56px 52px;margin-top:-1px}\n.resmio-col__headline{font-family:var(--fa);font-style:italic;font-size:28px;font-weight:700;color:var(--cd);letter-spacing:-.5px;margin-bottom:6px}\n.resmio-col__sub{font-size:15px;color:var(--cm);margin-bottom:32px}\n.resmio-placeholder{border:2px dashed var(--cpl);border-radius:10px;padding:48px 36px;text-align:center;background:var(--cpxl)}\n.resmio-placeholder__logo{font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--cp);margin-bottom:16px}\n.resmio-placeholder__title{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:var(--cpd);margin-bottom:10px}\n.resmio-placeholder__desc{font-size:14px;color:var(--cp);line-height:1.6;margin-bottom:24px}\n.resmio-placeholder__code{background:rgba(45,106,79,.08);border:1px solid var(--cpl);border-radius:6px;padding:14px 18px;font-family:monospace;font-size:12px;color:var(--cpd);text-align:left;line-height:1.8;word-break:break-all}\n\n/* QUICK ACTIONS */\n.quick-actions{padding:80px 60px;background:var(--cpd)}\n.quick-actions__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.08)}\n.quick-action{background:var(--cpd);padding:48px 40px;text-align:center}\n.quick-action__icon{font-size:36px;margin-bottom:16px}\n.quick-action__title{font-family:var(--fa);font-style:italic;font-size:20px;font-weight:600;color:#fff;margin-bottom:8px}\n.quick-action__desc{font-size:14px;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.5}\n.quick-action__btn{display:inline-block;border:1.5px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);padding:10px 22px;border-radius:100px;font-size:13px;font-weight:600;transition:border-color .2s,color .2s}\n.quick-action__btn:hover{border-color:#fff;color:#fff}\n.quick-action__btn.primary{background:var(--ca);border-color:var(--ca);color:var(--cd)}\n.quick-action__btn.primary:hover{background:#f5b030;border-color:#f5b030}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .contact-main{padding:0}\n  .contact-main__inner{grid-template-columns:1fr;gap:0}\n  .resmio-col{padding:40px 24px}\n  .quick-actions{padding:60px 24px}\n  .quick-actions__inner{grid-template-columns:1fr}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function KontaktPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
      <a className='nav-link' href='/live-cooking'>Live Cooking</a>
      <a className='nav-link' href='/geburtstag'>Events</a>
      <a className='nav-link' href='/ueber-uns'>Über uns</a>
      <a className='nav-link active' href='/kontakt'>Kontakt</a>
      <a className="btn-reserve" href="#form">Tisch reservieren</a></nav>
      <button aria-label="Menü" className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
      </header>
      <div className="mobile-menu" id="mobileMenu">
      <button className="mobile-menu__close" id="menuClose">✕</button>
      <a href='/'>Home</a>
      <a href='/sortiment'>Sortiment</a>
      <a href='/preise'>Preise</a>
      <a href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a className='active' href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="page-header">
      <div className="page-header__inner">
      <p className="page-header__eyebrow" data-cms="kontakt.hero_eyebrow">Wir freuen uns auf Sie</p>
      <h1 className="page-header__headline" data-cms="kontakt.hero_headline">Kommen<br/>Sie vorbei.</h1>
      <p className="page-header__sub" data-cms="kontakt.hero_sub">Haben Sie Fragen, möchten Sie reservieren oder einen Event anfragen? Wir sind für Sie da.</p>
      </div>
      </section>
      <section className="contact-main">
      <div className="contact-main__inner">
      <div className="contact-info">
      <div className="info-block">
      <p className="info-block__label">Adresse</p>
      <p className="info-block__value">Etrichstraße 23<br/>A-1110 Wien, Österreich</p>
      </div>
      <div className="info-block">
      <p className="info-block__label">Telefon</p>
      <p className="info-block__value"><a data-cms="contact.phone" data-cms-href="contact.phone_href" href="tel:+4317671497">+43 1 767 14 97</a></p>
      </div>
      <div className="info-block">
      <p className="info-block__label">E-Mail</p>
      <p className="info-block__value"><a href="mailto:hello@watertuin.at">hello@watertuin.at</a></p>
      </div>
      <div className="info-block">
      <p className="info-block__label">Öffnungszeiten</p>
      <div className="hours-grid">
      <div className="hours-row"><span className="hours-row__day" data-cms="hours.weekday">Mo, Mi, Do &amp; Fr</span><span data-cms="hours.weekday_time">17:30 – 22:00</span></div>
      <div className="hours-row"><span className="hours-row__day" data-cms="hours.weekend">Sa, So &amp; Feiertag</span><span><span data-cms="hours.weekend_time_lunch">11:30 – 16:00</span> &amp; <span data-cms="hours.weekend_time_dinner">17:30 – 22:00</span></span></div>
      <div className="hours-row"><span className="hours-row__day" style={{color: "var(--cm)"}}>Dienstag</span><span style={{color: "var(--cm)"}}>Geschlossen</span></div>
      <div className="hours-row"><span className="hours-row__day" style={{color: "var(--cm)"}}>SB-Buffet bis</span><span style={{color: "var(--cm)"}}>15:30 / 21:30</span></div>
      </div>
      </div>
      <div className="info-block">
      <p className="info-block__label">Anreise</p>
      <p className="info-block__value" style={{fontSize: "15px"}}>
                🚇 U3 Simmering — Etrichstraße<br/>
                🚃 Straßenbahn Linie 71<br/>
                🚗 Parkmöglichkeiten in der Nähe
              </p>
      </div>
      <div className="map-block">
      <div className="map-block__inner">
      <div className="map-block__icon">📍</div>
      <p className="map-block__title">Watertuin Vienna</p>
      <p className="map-block__addr">Etrichstraße 23, A-1110 Wien</p>
      <a className="map-block__link" href="https://goo.gl/maps/VZVHUAJz9t4nbBYi8" target="_blank">In Google Maps öffnen</a>
      </div>
      </div>
      </div>
      <div className="resmio-col" id="form">
      <h2 className="resmio-col__headline">Tisch reservieren.</h2>
      <p className="resmio-col__sub">Online buchen — sofortige Bestätigung via Resmio.</p>

      <div className="resmio-placeholder">
      <p className="resmio-placeholder__logo">⬛ Resmio</p>
      <p className="resmio-placeholder__title">Reservierungs-Widget</p>
      <p className="resmio-placeholder__desc">
                Hier erscheint das Resmio Online-Buchungsformular.<br/>
                Bitte den Platzhalter durch den echten Embed-Code ersetzen.
              </p>
      <div className="resmio-placeholder__code">
                &lt;!-- Resmio Widget einbinden --&gt;<br/>
                &lt;div id="resmio-IHR-SLUG"&gt;&lt;/div&gt;<br/>
                &lt;script src="https://booking.resmio.com/widget.js"&gt;&lt;/script&gt;
              </div>
      </div>
      </div>
      </div>
      </section>
      <section className="quick-actions">
      <div className="quick-actions__inner">
      <div className="quick-action">
      <div className="quick-action__icon">📅</div>
      <h3 className="quick-action__title">Tisch reservieren</h3>
      <p className="quick-action__desc">Online in 60 Sekunden. Sofortige Bestätigung.</p>
      <a className="quick-action__btn primary" href="#form">Online reservieren</a>
      </div>
      <div className="quick-action">
      <div className="quick-action__icon">🎂</div>
      <h3 className="quick-action__title">Event anfragen</h3>
      <p className="quick-action__desc">Geburtstage, Gruppen, Firmenevents — wir kümmern uns.</p>
      <a className='quick-action__btn' href='/geburtstag'>Anfrage senden</a>
      </div>
      <div className="quick-action">
      <div className="quick-action__icon">📞</div>
      <h3 className="quick-action__title">Direkt anrufen</h3>
      <p className="quick-action__desc">Mo, Mi–Fr: 17:30–22:00<br/>+43 1 767 14 97</p>
      <a className="quick-action__btn" href="tel:+4317671497">Jetzt anrufen</a>
      </div>
      </div>
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
