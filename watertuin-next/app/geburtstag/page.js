import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Geburtstag feiern \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}img{display:block;width:100%;height:100%;object-fit:cover}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px}\n\n/* HERO */\n.hero{position:relative;height:100vh;min-height:600px;overflow:hidden}\n.hero__bg{position:absolute;inset:0;background:url('707781232_18336043660220022_6272018094492056676_n.jpg') center/cover no-repeat}\n.hero__bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,20,15,.72) 0%,rgba(10,20,15,.12) 65%,transparent 100%)}\n.hero__content{position:absolute;bottom:72px;left:60px;right:60px;z-index:2}\n.hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--ca);margin-bottom:16px}\n.hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(52px,8vw,110px);font-weight:700;color:#fff;line-height:.96;letter-spacing:-1px;max-width:820px;margin-bottom:28px}\n.hero__sub{font-size:18px;color:rgba(255,255,255,.7);max-width:500px;line-height:1.6;margin-bottom:36px}\n.hero__cta{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 36px;border-radius:100px;font-weight:700;font-size:16px;transition:background .2s,transform .2s}\n.hero__cta:hover{background:#f5b030;transform:translateY(-2px)}\n\n/* PROMISE */\n.promise{padding:100px 60px;background:var(--cs)}\n.promise__inner{max-width:1100px;margin:0 auto}\n.promise__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,5vw,72px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05;margin-bottom:64px;max-width:800px}\n.promise__headline em{color:var(--cp)}\n.promise__grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--cbr)}\n.promise-item{padding:48px 40px 48px 0;border-right:1px solid var(--cbr)}\n.promise-item:last-child{border-right:none}\n.promise-item:not(:first-child){padding-left:40px}\n.promise-item__icon{font-size:32px;margin-bottom:20px}\n.promise-item__title{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:600;color:var(--cd);margin-bottom:10px}\n.promise-item__desc{font-size:15px;color:var(--cm);line-height:1.6}\n\n/* PHOTO MOMENT */\n.photo-moment{height:560px;position:relative;overflow:hidden}\n.photo-moment img{height:100%}\n.photo-moment__overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,20,15,.5) 0%,transparent 60%)}\n.photo-moment__text{position:absolute;bottom:60px;left:60px;z-index:2}\n.photo-moment__quote{font-family:var(--fa);font-style:italic;font-size:clamp(28px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;line-height:1.1;max-width:560px}\n\n/* LEISTUNGEN */\n.leistungen{padding:100px 60px;background:var(--cbg)}\n.leistungen__inner{max-width:1100px;margin:0 auto}\n.leistungen__header{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:80px}\n.leistungen__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,4.5vw,60px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05}\n.leistungen__sub{font-size:17px;color:var(--cb);line-height:1.65}\n.leistungen__grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cbr)}\n.leistung{background:var(--cs);padding:44px 40px}\n.leistung__title{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:600;color:var(--cd);margin-bottom:10px}\n.leistung__desc{font-size:15px;color:var(--cb);line-height:1.6}\n\n/* ABLAUF */\n.ablauf{background:var(--cpd);padding:100px 60px}\n.ablauf__inner{max-width:1100px;margin:0 auto}\n.ablauf__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:60px}\n.ablauf__steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.08)}\n.ablauf-step{background:var(--cpd);padding:40px 32px}\n.ablauf-step__num{font-family:var(--fa);font-style:italic;font-size:48px;font-weight:700;color:rgba(255,255,255,.15);line-height:1;margin-bottom:16px}\n.ablauf-step__title{font-size:16px;font-weight:600;color:#fff;margin-bottom:8px}\n.ablauf-step__desc{font-size:14px;color:rgba(255,255,255,.5);line-height:1.6}\n\n/* TESTIMONIALS */\n.testimonials{padding:100px 60px;background:var(--cs)}\n.testimonials__inner{max-width:1100px;margin:0 auto}\n.testimonials__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;margin-bottom:60px}\n.testimonials__grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cbr)}\n.testimonial{background:var(--cs);padding:44px 40px}\n.testimonial__stars{color:var(--ca);font-size:15px;letter-spacing:2px;margin-bottom:18px}\n.testimonial__quote{font-family:var(--fa);font-style:italic;font-size:20px;color:var(--cd);line-height:1.4;margin-bottom:24px}\n.testimonial__author{font-size:13px;font-weight:500;color:var(--cm);letter-spacing:1px;text-transform:uppercase}\n\n/* FORM */\n.anfrage{padding:100px 60px;background:var(--cbg)}\n.anfrage__inner{max-width:780px;margin:0 auto}\n.anfrage__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;margin-bottom:12px}\n.anfrage__sub{font-size:17px;color:var(--cm);margin-bottom:48px}\n.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}\n.form-full{grid-column:1/-1}\n.form-group{display:flex;flex-direction:column;gap:8px}\n.form-label{font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--cm)}\n.form-input,.form-select,.form-textarea{padding:14px 18px;border:1.5px solid var(--cbr);border-radius:8px;font-family:var(--ff);font-size:15px;color:var(--cd);background:var(--cs);transition:border-color .2s;outline:none}\n.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--cp)}\n.form-textarea{resize:vertical;min-height:120px}\n.form-submit{display:inline-block;background:var(--cp);color:#fff;padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;border:none;cursor:pointer;transition:background .2s,transform .2s;margin-top:12px}\n.form-submit:hover{background:var(--cpd);transform:translateY(-2px)}\n.form-note{font-size:13px;color:var(--cm);margin-top:16px}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .promise{padding:60px 24px}\n  .promise__grid{grid-template-columns:1fr;border-top:none}\n  .promise-item{border-right:none;padding:28px 0;border-top:1px solid var(--cbr)}\n  .promise-item:not(:first-child){padding-left:0}\n  .leistungen{padding:60px 24px}\n  .leistungen__header{grid-template-columns:1fr;gap:20px;margin-bottom:40px}\n  .leistungen__grid{grid-template-columns:1fr}\n  .ablauf{padding:60px 24px}\n  .ablauf__steps{grid-template-columns:1fr 1fr}\n  .testimonials{padding:60px 24px}\n  .testimonials__grid{grid-template-columns:1fr}\n  .anfrage{padding:60px 24px}\n  .form-grid{grid-template-columns:1fr}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function GeburtstagPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
      <a className='nav-link' href='/live-cooking'>Live Cooking</a>
      <a className='nav-link active' href='/geburtstag'>Geburtstag</a>
      <a className='nav-link' href='/gruppen-events'>Gruppen</a>
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
      <a className='active' href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="hero">
      <div className="hero__bg" data-cms-bg="geburtstag.hero_image"></div>
      <div className="hero__content">
      <p className="hero__eyebrow" data-cms="geburtstag.hero_eyebrow">Geburtstage &amp; besondere Anlässe</p>
      <h1 className="hero__headline" data-cms="geburtstag.hero_headline">Feiern,<br/>die man<br/>nicht vergisst.</h1>
      <p className="hero__sub" data-cms="geburtstag.hero_sub">Am Tag Ihres Geburtstages essen und trinken Sie bei uns gratis — gültig am Geburtstag selbst, Reservierung unbedingt erforderlich.</p>
      <a className="hero__cta" href="#anfrage">Anfrage senden</a>
      </div>
      </section>
      <section className="promise">
      <div className="promise__inner">
      <h2 className="promise__headline" data-cms="geburtstag.promise_headline">Geburtstagskind isst<br/><em>und trinkt gratis.</em></h2>
      <div className="promise__grid">
      <div className="promise-item">
      <div className="promise-item__icon">🎂</div>
      <h3 className="promise-item__title">Geburtstagskind gratis</h3>
      <p className="promise-item__desc">Essen und Trinken für das Geburtstagskind kostenlos — Bedingung: mindestens eine erwachsene Begleitperson zahlt den normalen Vollpreis.</p>
      </div>
      <div className="promise-item">
      <div className="promise-item__icon">📅</div>
      <h3 className="promise-item__title">Nur am Geburtstag</h3>
      <p className="promise-item__desc">Die Aktion gilt ausschließlich am Tag des Geburtstages. Fällt der Geburtstag auf einen Dienstag, ist auch der nächste oder übernächste Tag (Mittwoch oder Donnerstag) möglich.</p>
      </div>
      <div className="promise-item">
      <div className="promise-item__icon">📞</div>
      <h3 className="promise-item__title">Reservierung erforderlich</h3>
      <p className="promise-item__desc">Reservierung ist unbedingt notwendig. Bitte kontaktieren Sie uns unter +43 1 767 14 97 oder über unser Kontaktformular.</p>
      </div>
      </div>
      </div>
      </section>
      <div className="photo-moment">
      <img alt="Geburtstagsfeier" loading="lazy" src="/images/686273227_18332842036220022_8080592644259100875_n.jpg"/>
      <div className="photo-moment__overlay"></div>
      <div className="photo-moment__text">
      <p className="photo-moment__quote">„Mehr von allem — für jeden, der Ihnen wichtig ist."</p>
      </div>
      </div>
      <section className="leistungen">
      <div className="leistungen__inner">
      <div className="leistungen__header">
      <h2 className="leistungen__headline" data-cms="geburtstag.detail_headline">Die Geburtstagsaktion im Detail.</h2>
      <p className="leistungen__sub" data-cms="geburtstag.detail_sub">Alle Konditionen auf einen Blick — einfach, fair, ohne versteckte Bedingungen.</p>
      </div>
      <div className="leistungen__grid">
      <div className="leistung">
      <h3 className="leistung__title">Geburtstagskind konsumiert gratis</h3>
      <p className="leistung__desc">Essen und Trinken für das Geburtstagskind sind kostenlos — unbegrenzt aus dem gesamten Angebot.</p>
      </div>
      <div className="leistung">
      <h3 className="leistung__title">Mindestens eine Begleitperson</h3>
      <p className="leistung__desc">Voraussetzung: mindestens eine erwachsene Begleitperson zahlt den normalen Vollpreis. Die Aktion gilt nicht für allein speisende Geburtstagskinder.</p>
      </div>
      <div className="leistung">
      <h3 className="leistung__title">Nur am Geburtstag gültig</h3>
      <p className="leistung__desc">Die Aktion gilt ausschließlich am tatsächlichen Geburtstag. Ein anderer Tag ist nur dann möglich, wenn der Geburtstag auf einen Dienstag fällt.</p>
      </div>
      <div className="leistung">
      <h3 className="leistung__title">Dienstag-Ausnahme</h3>
      <p className="leistung__desc">Fällt Ihr Geburtstag auf einen Dienstag, können Sie die Aktion auch am darauffolgenden Mittwoch oder Donnerstag in Anspruch nehmen.</p>
      </div>
      <div className="leistung">
      <h3 className="leistung__title">Reservierung unbedingt erforderlich</h3>
      <p className="leistung__desc">Ohne vorherige Reservierung kann die Geburtstagsaktion leider nicht gewährt werden. Bitte rechtzeitig anfragen.</p>
      </div>
      <div className="leistung">
      <h3 className="leistung__title">Gültig bis auf Widerruf</h3>
      <p className="leistung__desc">Die Aktion gilt bis auf Widerruf. Reservierungen und Informationen: +43 1 767 14 97 oder über das Kontaktformular auf watertuin.at/kontakt.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="ablauf">
      <div className="ablauf__inner">
      <h2 className="ablauf__headline">So läuft Ihre Anfrage ab.</h2>
      <div className="ablauf__steps">
      <div className="ablauf-step">
      <p className="ablauf-step__num">01</p>
      <h3 className="ablauf-step__title">Formular ausfüllen</h3>
      <p className="ablauf-step__desc">Datum, Uhrzeit, Personenanzahl und Ihre Wünsche — alles in einem Formular.</p>
      </div>
      <div className="ablauf-step">
      <p className="ablauf-step__num">02</p>
      <h3 className="ablauf-step__title">Wir melden uns</h3>
      <p className="ablauf-step__desc">Innerhalb von 24 Stunden bestätigen wir Ihre Anfrage und klären Details.</p>
      </div>
      <div className="ablauf-step">
      <p className="ablauf-step__num">03</p>
      <h3 className="ablauf-step__title">Vorbereitung</h3>
      <p className="ablauf-step__desc">Wir dekorieren, bereiten alles vor — Sie kommen einfach und feiern.</p>
      </div>
      <div className="ablauf-step">
      <p className="ablauf-step__num">04</p>
      <h3 className="ablauf-step__title">Unvergesslicher Abend</h3>
      <p className="ablauf-step__desc">Ankommen, genießen, feiern. Wir kümmern uns um alles andere.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="testimonials">
      <div className="testimonials__inner">
      <h2 className="testimonials__headline">Was Geburtstagsgäste sagen.</h2>
      <div className="testimonials__grid">
      <div className="testimonial">
      <div className="testimonial__stars">★★★★★</div>
      <p className="testimonial__quote" data-cms="geburtstag.testimonial1_quote">„Der schönste Geburtstag seit Jahren. Der Tisch war perfekt dekoriert, der Prosecco kam sofort, und das Essen war einfach unglaublich."</p>
      <p className="testimonial__author" data-cms="geburtstag.testimonial1_author">Julia S. · Geburtstag für 12 Personen</p>
      </div>
      <div className="testimonial">
      <div className="testimonial__stars">★★★★★</div>
      <p className="testimonial__quote" data-cms="geburtstag.testimonial2_quote">„Haben für meinen Mann zum 40er überrascht. Das Team hat alles perfekt vorbereitet — die Torte, die Deko, das Licht. Ein Abend wie aus dem Film."</p>
      <p className="testimonial__author" data-cms="geburtstag.testimonial2_author">Maria K. · Überraschungsparty für 20 Personen</p>
      </div>
      </div>
      </div>
      </section>
      <section className="anfrage" id="anfrage">
      <div className="anfrage__inner">
      <h2 className="anfrage__headline" data-cms="geburtstag.cta_headline">Jetzt anfragen.</h2>
      <p className="anfrage__sub" data-cms="geburtstag.cta_sub">Wir melden uns innerhalb von 24 Stunden.</p>
      <form>
      <div className="form-grid">
      <div className="form-group">
      <label className="form-label">Ihr Name</label>
      <input className="form-input" placeholder="Maria Mustermann" type="text"/>
      </div>
      <div className="form-group">
      <label className="form-label">Telefon oder E-Mail</label>
      <input className="form-input" placeholder="01234 567890" type="text"/>
      </div>
      <div className="form-group">
      <label className="form-label">Datum</label>
      <input className="form-input" type="date"/>
      </div>
      <div className="form-group">
      <label className="form-label">Uhrzeit</label>
      <select className="form-select">
      <option>12:00</option><option>13:00</option><option>18:00</option>
      <option>19:00</option><option>20:00</option>
      </select>
      </div>
      <div className="form-group">
      <label className="form-label">Anzahl Personen</label>
      <input className="form-input" min="2" placeholder="z.B. 10" type="number"/>
      </div>
      <div className="form-group">
      <label className="form-label">Anlass</label>
      <select className="form-select">
      <option>Geburtstag</option>
      <option>Jubiläum</option>
      <option>Abschied / Willkommen</option>
      <option>Sonstiges</option>
      </select>
      </div>
      <div className="form-group form-full">
      <label className="form-label">Ihre Wünsche &amp; Anmerkungen</label>
      <textarea className="form-textarea" placeholder="Torte, Deko, besondere Wünsche …"></textarea>
      </div>
      </div>
      <button className="form-submit" type="submit">Anfrage senden</button>
      <p className="form-note">Reservierung direkt auch telefonisch: +43 1 767 14 97. Wir bestätigen per Telefon oder E-Mail.</p>
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
