import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Gruppen & Events \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}img{display:block;width:100%;height:100%;object-fit:cover}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px}\n\n/* HERO \u2014 dark statement, no photo */\n.hero{background:var(--cpd);padding:180px 60px 120px;position:relative;overflow:hidden}\n.hero::before{content:'';position:absolute;top:-200px;right:-200px;width:700px;height:700px;border-radius:50%;background:rgba(82,183,136,.06)}\n.hero::after{content:'';position:absolute;bottom:-100px;left:-100px;width:400px;height:400px;border-radius:50%;background:rgba(232,160,32,.04)}\n.hero__inner{max-width:1100px;margin:0 auto;position:relative;z-index:1}\n.hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cpl);margin-bottom:24px}\n.hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(52px,7vw,108px);font-weight:700;color:#fff;line-height:.97;letter-spacing:-1px;max-width:800px;margin-bottom:32px}\n.hero__headline em{color:var(--ca)}\n.hero__sub{font-size:19px;color:rgba(255,255,255,.65);max-width:560px;line-height:1.6;margin-bottom:48px}\n.hero__cta{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;transition:background .2s,transform .2s}\n.hero__cta:hover{background:#f5b030;transform:translateY(-2px)}\n\n/* NUMBERS STRIP */\n.numbers{background:var(--cpxl);padding:60px}\n.numbers__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(45,106,79,.2)}\n.num-item{padding:40px 32px 40px 0;border-right:1px solid rgba(45,106,79,.2)}\n.num-item:last-child{border-right:none}\n.num-item:not(:first-child){padding-left:32px}\n.num-item__val{font-family:var(--fa);font-style:italic;font-size:56px;font-weight:700;color:var(--cpd);letter-spacing:-0.5px;line-height:1;margin-bottom:8px}\n.num-item__label{font-size:13px;font-weight:500;color:var(--cp)}\n\n/* PHOTO STRIP */\n.photo-strip{display:grid;grid-template-columns:2fr 1fr 1fr;height:480px}\n.photo-strip__main{position:relative;overflow:hidden}\n.photo-strip__main img{height:100%}\n.photo-strip__side{display:grid;grid-template-rows:1fr 1fr}\n.photo-strip__side-item{position:relative;overflow:hidden}\n.photo-strip__side-item img{height:100%}\n\n/* EVENT TYPES */\n.event-types{padding:100px 60px;background:var(--cs)}\n.event-types__inner{max-width:1100px;margin:0 auto}\n.event-types__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,4.5vw,60px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05;margin-bottom:64px}\n.event-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:var(--cbr)}\n.event-type{background:var(--cs);padding:44px 36px;position:relative;overflow:hidden}\n.event-type__icon{font-size:36px;margin-bottom:20px}\n.event-type__title{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:600;color:var(--cd);margin-bottom:10px}\n.event-type__desc{font-size:15px;color:var(--cm);line-height:1.6;margin-bottom:20px}\n.event-type__details{font-size:13px;font-weight:500;color:var(--cp)}\n\n/* LEISTUNGEN */\n.leistungen{background:var(--cbg);padding:100px 60px}\n.leistungen__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:400px 1fr;gap:80px;align-items:start}\n.leistungen__left{position:sticky;top:100px}\n.leistungen__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.1;margin-bottom:20px}\n.leistungen__sub{font-size:16px;color:var(--cm);line-height:1.6}\n.leistungen__list{display:flex;flex-direction:column;gap:1px;background:var(--cbr)}\n.leistung-item{background:var(--cs);padding:32px 36px;display:flex;align-items:flex-start;gap:20px}\n.leistung-item__check{width:24px;height:24px;border-radius:50%;background:var(--cpxl);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;color:var(--cp);font-weight:700;font-size:13px}\n.leistung-item__content{}\n.leistung-item__title{font-size:16px;font-weight:600;color:var(--cd);margin-bottom:4px}\n.leistung-item__desc{font-size:14px;color:var(--cm);line-height:1.5}\n\n/* FORM */\n.anfrage{padding:100px 60px;background:var(--cpd)}\n.anfrage__inner{max-width:780px;margin:0 auto}\n.anfrage__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:12px}\n.anfrage__sub{font-size:17px;color:rgba(255,255,255,.5);margin-bottom:48px}\n.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}\n.form-full{grid-column:1/-1}\n.form-group{display:flex;flex-direction:column;gap:8px}\n.form-label{font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.4)}\n.form-input,.form-select,.form-textarea{padding:14px 18px;border:1.5px solid rgba(255,255,255,.15);border-radius:8px;font-family:var(--ff);font-size:15px;color:#fff;background:rgba(255,255,255,.08);transition:border-color .2s;outline:none}\n.form-input::placeholder{color:rgba(255,255,255,.3)}\n.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--cpl)}\n.form-select{color:rgba(255,255,255,.7)}\n.form-select option{background:var(--cpd);color:#fff}\n.form-textarea{resize:vertical;min-height:120px;color:#fff}\n.form-textarea::placeholder{color:rgba(255,255,255,.3)}\n.form-submit{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;border:none;cursor:pointer;transition:background .2s,transform .2s;margin-top:12px}\n.form-submit:hover{background:#f5b030;transform:translateY(-2px)}\n.form-note{font-size:13px;color:rgba(255,255,255,.35);margin-top:16px}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .hero{padding:120px 24px 80px}\n  .numbers{padding:40px 24px}\n  .numbers__inner{grid-template-columns:1fr 1fr}\n  .num-item{border-right:none;padding:24px 0;border-bottom:1px solid rgba(45,106,79,.2)}\n  .num-item:not(:first-child){padding-left:0}\n  .photo-strip{grid-template-columns:1fr;height:auto}\n  .photo-strip__main,.photo-strip__side{height:240px}\n  .photo-strip__side{grid-template-rows:1fr}\n  .event-types{padding:60px 24px}\n  .event-grid{grid-template-columns:1fr}\n  .event-type{padding:32px 24px}\n  .leistungen{padding:60px 24px}\n  .leistungen__inner{grid-template-columns:1fr;gap:40px}\n  .leistungen__left{position:static}\n  .anfrage{padding:60px 24px}\n  .form-grid{grid-template-columns:1fr}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function GruppenEventsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
      <a className='nav-link' href='/live-cooking'>Live Cooking</a>
      <a className='nav-link' href='/geburtstag'>Geburtstag</a>
      <a className='nav-link active' href='/gruppen-events'>Gruppen</a>
      <a className='nav-link' href='/ueber-uns'>Über uns</a>
      <a className='nav-link' href='/kontakt'>Kontakt</a>
      <a className="btn-reserve" href="#anfrage">Anfrage senden</a></nav>
      <button aria-label="Menü" className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
      </header>
      <div className="mobile-menu" id="mobileMenu">
      <button className="mobile-menu__close" id="menuClose">✕</button>
      <a href='/'>Home</a>
      <a href='/sortiment'>Sortiment</a>
      <a href='/preise'>Preise</a>
      <a href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a className='active' href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="hero">
      <div className="hero__inner">
      <p className="hero__eyebrow" data-cms="gruppen.hero_eyebrow">Gruppen &amp; Events</p>
      <h1 className="hero__headline" data-cms="gruppen.hero_headline">Großer Hunger,<br/><em>große Runde.</em></h1>
      <p className="hero__sub" data-cms="gruppen.hero_sub">Ob Firmenfeier, Weihnachtsfeier, Geburtstag oder Familienfest — Watertuin bietet Platz für über 500 Personen und unterstützt Sie gerne bei der Organisation.</p>
      <a className="hero__cta" href="#anfrage">Anfrage senden</a>
      </div>
      </section>
      <section className="numbers">
      <div className="numbers__inner">
      <div className="num-item">
      <p className="num-item__val" data-cms="gruppen.stat1_val">6</p>
      <p className="num-item__label" data-cms="gruppen.stat1_label">Separees verfügbar</p>
      </div>
      <div className="num-item">
      <p className="num-item__val" data-cms="gruppen.stat2_val">30</p>
      <p className="num-item__label" data-cms="gruppen.stat2_label">Personen pro Separee</p>
      </div>
      <div className="num-item">
      <p className="num-item__val" data-cms="gruppen.stat3_val">400+</p>
      <p className="num-item__label" data-cms="gruppen.stat3_label">Sitzplätze im Restaurantbereich</p>
      </div>
      <div className="num-item">
      <p className="num-item__val" data-cms="gruppen.stat4_val">500+</p>
      <p className="num-item__label" data-cms="gruppen.stat4_label">Sitzplätze gesamt</p>
      </div>
      </div>
      </section>
      <div className="photo-strip">
      <div className="photo-strip__main">
      <img alt="Gruppenessen" loading="lazy" src="/images/707781232_18336043660220022_6272018094492056676_n.jpg"/>
      </div>
      <div className="photo-strip__side">
      <div className="photo-strip__side-item">
      <img alt="Essen" loading="lazy" src="/images/697084703_18334830958220022_594618541243141696_n.jpg"/>
      </div>
      <div className="photo-strip__side-item">
      <img alt="Getränke" loading="lazy" src="/images/719032355_18337562068220022_4587586276842441353_n.jpg"/>
      </div>
      </div>
      </div>
      <section className="event-types">
      <div className="event-types__inner">
      <h2 className="event-types__headline" data-cms="gruppen.types_headline">Für welchen Anlass feiern Sie?</h2>
      <div className="event-grid">
      <div className="event-type">
      <div className="event-type__icon">💼</div>
      <h3 className="event-type__title">Firmenfeier &amp; Weihnachtsfeier</h3>
      <p className="event-type__desc">Teamdinner, Firmenfeier, Weihnachtsfeier — ein unkompliziertes Setting mit großer Auswahl, das alle zusammenbringt.</p>
      <p className="event-type__details">Separees bis 30 Personen · Restaurantbereich über 400 Personen</p>
      </div>
      <div className="event-type">
      <div className="event-type__icon">🎉</div>
      <h3 className="event-type__title">Geburtstag &amp; Jubiläum</h3>
      <p className="event-type__desc">Geburtstage, Jubiläen und besondere Anlässe — Ihre Runde, Ihr Abend. Das Watertuin-Team unterstützt gerne bei der Organisation.</p>
      <p className="event-type__details">Reservierung über +43 1 767 14 97 oder Kontaktformular</p>
      </div>
      <div className="event-type">
      <div className="event-type__icon">👨‍👩‍👧‍👦</div>
      <h3 className="event-type__title">Familienfeste</h3>
      <p className="event-type__desc">Familienfeiern in gemütlicher Atmosphäre — für Gruppen jeder Größe, ob klein oder im großen Restaurantbereich.</p>
      <p className="event-type__details">Anfrage jederzeit willkommen</p>
      </div>
      </div>
      </div>
      </section>
      <section className="leistungen">
      <div className="leistungen__inner">
      <div className="leistungen__left">
      <h2 className="leistungen__headline" data-cms="gruppen.leistungen_headline">Was wir für Gruppen bieten.</h2>
      <p className="leistungen__sub" data-cms="gruppen.leistungen_sub">Alles, was eine Gruppenreservierung reibungslos und unvergesslich macht.</p>
      </div>
      <div className="leistungen__list">
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Reservierter Bereich</p>
      <p className="leistung-item__desc">Ihr Tisch ist für Sie reserviert und bereit — kein Warten, kein Teilen mit Fremden.</p>
      </div>
      </div>
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Sammelrechnung für Firmen</p>
      <p className="leistung-item__desc">Eine Rechnung auf die Firma — inklusive aller Getränke und Extras. Buchungsbestätigung auf Wunsch.</p>
      </div>
      </div>
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Flexible Tischkonfiguration</p>
      <p className="leistung-item__desc">Wir passen die Bestuhlung an Ihre Gruppe an — von U-Form bis lange Tafel.</p>
      </div>
      </div>
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Begrüßungsgetränk</p>
      <p className="leistung-item__desc">Optional: Ein Willkommens-Drink für alle beim Ankommen — Prosecco, Sake oder alkoholfrei.</p>
      </div>
      </div>
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Deko auf Wunsch</p>
      <p className="leistung-item__desc">Für private Anlässe: Tischdekoration nach Ihren Farben und Wünschen.</p>
      </div>
      </div>
      <div className="leistung-item">
      <span className="leistung-item__check">✓</span>
      <div className="leistung-item__content">
      <p className="leistung-item__title">Persönliche Betreuung</p>
      <p className="leistung-item__desc">Ein fixer Ansprechpartner für Ihre Gruppe — von der Buchung bis zum Ende des Abends.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="anfrage" id="anfrage">
      <div className="anfrage__inner">
      <h2 className="anfrage__headline" data-cms="gruppen.cta_headline">Gruppenanfrage stellen.</h2>
      <p className="anfrage__sub" data-cms="gruppen.cta_sub">Wir antworten innerhalb von 24 Stunden.</p>
      <form>
      <div className="form-grid">
      <div className="form-group">
      <label className="form-label">Name / Firma</label>
      <input className="form-input" placeholder="Mustermann GmbH" type="text"/>
      </div>
      <div className="form-group">
      <label className="form-label">Kontakt (Tel. oder E-Mail)</label>
      <input className="form-input" placeholder="office@firma.at" type="text"/>
      </div>
      <div className="form-group">
      <label className="form-label">Wunschdatum</label>
      <input className="form-input" type="date"/>
      </div>
      <div className="form-group">
      <label className="form-label">Personenanzahl</label>
      <input className="form-input" min="4" placeholder="z.B. 20" type="number"/>
      </div>
      <div className="form-group">
      <label className="form-label">Art des Events</label>
      <select className="form-select">
      <option>Firmenevent / Teamdinner</option>
      <option>Private Feier</option>
      <option>Geburtstag</option>
      <option>Jubiläum</option>
      <option>Familientreffen</option>
      <option>Sonstiges</option>
      </select>
      </div>
      <div className="form-group form-full">
      <label className="form-label">Anmerkungen &amp; besondere Wünsche</label>
      <textarea className="form-textarea" placeholder="Sammelrechnung, Deko, Allergien, Sitzordnung …"></textarea>
      </div>
      </div>
      <button className="form-submit" type="submit">Anfrage senden</button>
      <p className="form-note">Anfragen auch telefonisch: +43 1 767 14 97. Keine Vorauszahlung nötig. Wir melden uns so bald wie möglich.</p>
      </form>
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
