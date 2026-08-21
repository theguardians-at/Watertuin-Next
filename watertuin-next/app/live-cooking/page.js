import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Live Cooking \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}img{display:block;width:100%;height:100%;object-fit:cover}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px;transition:background .2s,transform .2s}\n.btn-reserve:hover{background:#f5b030;transform:translateY(-1px)}\n\n/* HERO */\n.hero{position:relative;height:100vh;min-height:600px;overflow:hidden}\n.hero__bg{position:absolute;inset:0;background:url('683837578_18333546976220022_6734153120687868386_n.jpg') center/cover no-repeat}\n.hero__bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,20,15,.75) 0%,rgba(10,20,15,.1) 70%,transparent 100%)}\n.hero__content{position:absolute;bottom:72px;left:60px;right:60px;z-index:2}\n.hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--ca);margin-bottom:16px}\n.hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(52px,8vw,108px);font-weight:700;color:#fff;line-height:.97;letter-spacing:-1px;max-width:800px;margin-bottom:28px}\n.hero__sub{font-size:18px;color:rgba(255,255,255,.7);max-width:480px;line-height:1.6}\n\n/* INTRO */\n.intro{padding:100px 60px;background:var(--cs)}\n.intro__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}\n.intro__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,4.5vw,64px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05;margin-bottom:32px}\n.intro__body{font-size:18px;color:var(--cb);line-height:1.65;margin-bottom:32px}\n.intro__facts{display:flex;flex-direction:column;gap:20px}\n.intro-fact{display:flex;align-items:flex-start;gap:16px}\n.intro-fact__num{font-family:var(--fa);font-style:italic;font-size:32px;font-weight:700;color:var(--cp);line-height:1;flex-shrink:0;min-width:48px}\n.intro-fact__text{font-size:15px;color:var(--cb);line-height:1.5;padding-top:6px}\n\n/* STATIONS */\n.station{display:grid;grid-template-columns:1fr 1fr;min-height:580px}\n.station:nth-child(even){background:var(--cbg)}\n.station.reverse .station__photo{order:2}\n.station.reverse .station__content{order:1}\n.station__photo{position:relative;overflow:hidden}\n.station__photo img{height:100%}\n.station__photo-badge{position:absolute;top:28px;left:28px;background:rgba(27,58,45,.9);color:#fff;padding:10px 18px;border-radius:100px;font-size:12px;font-weight:600;letter-spacing:.5px}\n.station__content{background:var(--cs);padding:80px 72px;display:flex;flex-direction:column;justify-content:center}\n.station:nth-child(even) .station__content{background:var(--cbg)}\n.station__num{font-family:var(--fa);font-style:italic;font-size:80px;font-weight:700;color:var(--cpxl);line-height:1;margin-bottom:-12px}\n.station__eyebrow{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--cp);margin-bottom:16px}\n.station__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,3.5vw,48px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.1;margin-bottom:20px}\n.station__body{font-size:16px;color:var(--cb);line-height:1.65;margin-bottom:32px}\n.station__dishes{list-style:none;display:flex;flex-direction:column;gap:10px}\n.station__dish{font-size:14px;color:var(--cb);display:flex;align-items:center;gap:10px}\n.station__dish::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--cpl);flex-shrink:0}\n\n/* QUOTE */\n.chef-quote{background:var(--cpd);padding:100px 60px;text-align:center}\n.chef-quote__inner{max-width:800px;margin:0 auto}\n.chef-quote__mark{font-family:var(--fa);font-size:80px;color:rgba(255,255,255,.15);line-height:.8;margin-bottom:24px}\n.chef-quote__text{font-family:var(--fa);font-style:italic;font-size:clamp(24px,3vw,36px);font-weight:400;color:#fff;line-height:1.45;margin-bottom:32px}\n.chef-quote__author{font-size:13px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.4)}\n\n/* VISUAL FLOW */\n.visual-strip{display:grid;grid-template-columns:1fr 1fr 1fr;height:400px}\n.visual-strip__item{position:relative;overflow:hidden}\n.visual-strip__item img{height:100%;transition:transform 6s ease}\n.visual-strip__item:hover img{transform:scale(1.05)}\n.visual-strip__label{position:absolute;bottom:24px;left:24px;font-family:var(--fa);font-style:italic;font-size:18px;font-weight:600;color:#fff}\n\n/* CTA */\n.cta-strip{background:var(--cp);padding:80px 60px;text-align:center}\n.cta-strip__headline{font-family:var(--fa);font-style:italic;font-size:clamp(28px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:32px}\n.cta-strip__btn{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;transition:background .2s,transform .2s}\n.cta-strip__btn:hover{background:#f5b030;transform:translateY(-2px)}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .intro{padding:60px 24px}\n  .intro__inner{grid-template-columns:1fr;gap:40px}\n  .station{grid-template-columns:1fr;min-height:auto}\n  .station.reverse .station__photo,.station.reverse .station__content{order:unset}\n  .station__photo{height:260px}\n  .station__content{padding:40px 24px}\n  .chef-quote{padding:60px 24px}\n  .visual-strip{grid-template-columns:1fr;height:auto}\n  .visual-strip__item{height:220px}\n  .cta-strip{padding:60px 24px}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function LiveCookingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
      <a className='nav-link active' href='/live-cooking'>Live Cooking</a>
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
      <a href='/preise'>Preise</a>
      <a className='active' href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="hero">
      <div className="hero__bg" data-cms-bg="live_cooking.hero_image"></div>
      <div className="hero__content">
      <p className="hero__eyebrow" data-cms="live_cooking.hero_eyebrow">Live Cooking</p>
      <h1 className="hero__headline" data-cms="live_cooking.hero_headline">Kochen,<br/>das man<br/>sehen muss.</h1>
      <p className="hero__sub" data-cms="live_cooking.hero_sub">Grill und Pasta — frische Zutaten, direkt zubereitet, sichtbar für jeden Gast. Das ist der Unterschied.</p>
      </div>
      </section>
      <section className="intro">
      <div className="intro__inner">
      <div>
      <h2 className="intro__headline" data-cms="live_cooking.intro_headline">Frische, die man sieht.</h2>
      <p className="intro__body" data-cms="live_cooking.intro_body">Bei Watertuin passiert Live Cooking vor Ihren Augen — Grill und Pasta, jede Bestellung frisch zubereitet. Dazu österreichisches und asiatisches SB-Buffet sowie Sushi &amp; Maki und Wok-Gerichte.</p>
      </div>
      <div className="intro__facts">
      <div className="intro-fact">
      <span className="intro-fact__num">2</span>
      <p className="intro-fact__text">Live-Stationen: Grill und Pasta — frisch zubereitet, direkt vor Ihren Augen.</p>
      </div>
      <div className="intro-fact">
      <span className="intro-fact__num">1</span>
      <p className="intro-fact__text">Preis für alles — Essen und Trinken so viel man möchte, inklusive Live Cooking.</p>
      </div>
      <div className="intro-fact">
      <span className="intro-fact__num">∞</span>
      <p className="intro-fact__text">Bestellrunden — so oft Sie möchten, immer frisch zubereitet.</p>
      </div>
      </div>
      </div>
      </section>

      <section className="station" id="grill">
      <div className="station__photo">
      <img alt="Grill Station" data-cms-src="/images/live_cooking.station1_image" loading="lazy" src="/images/683837578_18333546976220022_6734153120687868386_n.jpg"/>
      <span className="station__photo-badge">Live Cooking – Grill</span>
      </div>
      <div className="station__content">
      <p className="station__num">01</p>
      <p className="station__eyebrow">Station 01</p>
      <h2 className="station__headline" data-cms="live_cooking.station1_headline">Grill</h2>
      <p className="station__body" data-cms="live_cooking.station1_body">Unser Grillmeister steht für Sie bereit. Steak, Burger mit Toppings nach Wahl, Meeresfrüchte — alles live, alles frisch, direkt vor Ihren Augen.</p>
      <ul className="station__dishes">
      <li className="station__dish">Steak</li>
      <li className="station__dish">Burger mit Toppings nach Wahl</li>
      <li className="station__dish">Meeresfrüchte</li>
      </ul>
      </div>
      </section>

      <section className="station reverse" id="pasta">
      <div className="station__photo">
      <img alt="Pasta Station" data-cms-src="/images/live_cooking.station2_image" loading="lazy" src="/images/683741830_18332473039220022_4009548103927082310_n.jpg"/>
      <span className="station__photo-badge">Live Cooking – Pasta</span>
      </div>
      <div className="station__content">
      <p className="station__num">02</p>
      <p className="station__eyebrow">Station 02</p>
      <h2 className="station__headline" data-cms="live_cooking.station2_headline">Pasta</h2>
      <p className="station__body" data-cms="live_cooking.station2_body">Pasta frisch für dich zubereitet — direkt an der Live-Station, nach Bestellung. Jede Portion frisch, direkt auf den Teller.</p>
      <ul className="station__dishes">
      <li className="station__dish">Pasta — frisch für dich zubereitet</li>
      </ul>
      </div>
      </section>
      <div className="chef-quote">
      <div className="chef-quote__inner">
      <p className="chef-quote__mark">"</p>
      <p className="chef-quote__text" data-cms="live_cooking.quote_text">Essen, das man kochen sieht, schmeckt anders. Man versteht, was drin ist. Man vertraut der Küche. Das ist kein Trend — das ist ehrliche Gastfreundschaft.</p>
      <p className="chef-quote__author">Watertuin Vienna · 1110 Wien</p>
      </div>
      </div>
      <div className="visual-strip">
      <div className="visual-strip__item">
      <img alt="Küche" loading="lazy" src="/images/710516927_18336549628220022_4223579827530741416_n.jpg"/>
      <span className="visual-strip__label">Offene Küche</span>
      </div>
      <div className="visual-strip__item">
      <img alt="Frische Zutaten" loading="lazy" src="/images/686273227_18332842036220022_8080592644259100875_n.jpg"/>
      <span className="visual-strip__label">Frische Zutaten</span>
      </div>
      <div className="visual-strip__item">
      <img alt="Serviert am Tisch" loading="lazy" src="/images/671832748_18331298641220022_4408029947088282596_n.jpg"/>
      <span className="visual-strip__label">Direkt zum Tisch</span>
      </div>
      </div>
      <section className="cta-strip">
      <h2 className="cta-strip__headline" data-cms="live_cooking.cta_headline">Live erleben. Heute Abend.</h2>
      <a className="cta-strip__btn" href="#reservieren">Tisch reservieren</a>
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
