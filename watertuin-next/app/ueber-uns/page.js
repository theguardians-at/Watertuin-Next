import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "\u00dcber uns \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}img{display:block;width:100%;height:100%;object-fit:cover}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px}\n\n/* HERO \u2014 full photo */\n.hero{position:relative;height:90vh;min-height:560px;overflow:hidden}\n.hero__bg{position:absolute;inset:0;background:url('707781232_18336043660220022_6272018094492056676_n.jpg') center/cover no-repeat}\n.hero__bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,20,15,.75) 0%,transparent 70%)}\n.hero__content{position:absolute;bottom:72px;left:60px;right:60px;z-index:2}\n.hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--ca);margin-bottom:16px}\n.hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(52px,8vw,110px);font-weight:700;color:#fff;line-height:.97;letter-spacing:-1px;max-width:800px}\n\n/* STORY */\n.story{padding:100px 60px;background:var(--cs)}\n.story__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}\n.story__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,4.5vw,60px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1.05;margin-bottom:28px}\n.story__body{font-size:18px;color:var(--cb);line-height:1.7;margin-bottom:20px}\n.story__photo{position:relative;overflow:hidden;border-radius:4px}\n.story__photo img{height:480px}\n\n/* WERTE */\n.werte{padding:100px 60px;background:var(--cbg)}\n.werte__inner{max-width:1100px;margin:0 auto}\n.werte__headline{font-family:var(--fa);font-style:italic;font-size:clamp(36px,4.5vw,60px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;margin-bottom:72px}\n.werte__grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--cbr)}\n.wert{padding:52px 40px 52px 0;border-right:1px solid var(--cbr)}\n.wert:last-child{border-right:none}\n.wert:not(:first-child){padding-left:40px}\n.wert__num{font-family:var(--fa);font-style:italic;font-size:14px;color:var(--cm);margin-bottom:20px}\n.wert__title{font-family:var(--fa);font-style:italic;font-size:26px;font-weight:700;color:var(--cd);margin-bottom:14px;letter-spacing:-.5px}\n.wert__desc{font-size:15px;color:var(--cm);line-height:1.65}\n\n/* FULL PHOTO */\n.full-photo{height:520px;position:relative;overflow:hidden}\n.full-photo img{height:100%}\n.full-photo__overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,20,15,.55),transparent 55%)}\n.full-photo__text{position:absolute;bottom:60px;left:60px;z-index:2;max-width:560px}\n.full-photo__quote{font-family:var(--fa);font-style:italic;font-size:clamp(24px,3vw,40px);font-weight:700;color:#fff;letter-spacing:-1px;line-height:1.2}\n\n/* RESTAURANT INFO */\n.info{background:var(--cpd);padding:100px 60px}\n.info__inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:center}\n.info__headline{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;line-height:1.1;margin-bottom:32px}\n.info__body{font-size:17px;color:rgba(255,255,255,.65);line-height:1.65}\n.info__details{display:flex;flex-direction:column;gap:24px}\n.info-detail{}\n.info-detail__label{font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px}\n.info-detail__value{font-size:16px;color:rgba(255,255,255,.8);line-height:1.5}\n\n/* CTA */\n.cta-strip{background:var(--cp);padding:80px 60px;text-align:center}\n.cta-strip__headline{font-family:var(--fa);font-style:italic;font-size:clamp(28px,4vw,52px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:32px}\n.cta-strip__btn{display:inline-block;background:var(--ca);color:var(--cd);padding:16px 40px;border-radius:100px;font-weight:700;font-size:16px;transition:background .2s,transform .2s}\n.cta-strip__btn:hover{background:#f5b030;transform:translateY(-2px)}\n\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .story{padding:60px 24px}\n  .story__inner{grid-template-columns:1fr;gap:40px}\n  .story__visual{height:280px}\n  .werte{padding:60px 24px}\n  .werte__grid{grid-template-columns:1fr}\n  .wert{border-right:none;padding:32px 0;border-bottom:1px solid var(--cbr)}\n  .wert:not(:first-child){padding-left:0}\n  .wert:last-child{border-bottom:none}\n  .info{padding:60px 24px}\n  .info__inner{grid-template-columns:1fr;gap:40px}\n  .cta-strip{padding:60px 24px}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n/* HAMBURGER + MOBILE MENU */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n"

export default function UeberUnsPage() {
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
      <a className='nav-link active' href='/ueber-uns'>Über uns</a>
      <a className='nav-link' href='/kontakt'>Kontakt</a>
      <a className='btn-reserve' href='/kontakt#form'>Tisch reservieren</a></nav>
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
      <a className='active' href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>
      <section className="hero">
      <div className="hero__bg" data-cms-bg="ueber_uns.hero_image"></div>
      <div className="hero__content">
      <p className="hero__eyebrow" data-cms="ueber_uns.hero_eyebrow">Über uns</p>
      <h1 className="hero__headline" data-cms="ueber_uns.hero_headline">Großzügigkeit<br/>ist unsere<br/>Küche.</h1>
      </div>
      </section>
      <section className="story">
      <div className="story__inner">
      <div>
      <h2 className="story__headline" data-cms="ueber_uns.story_headline">Essen &amp; Trinken ohne Limit.</h2>
      <p className="story__body" data-cms="ueber_uns.story_body1">Das Watertuin ist ein „All You Can Eat and Drink"-Restaurant mit World Kitchen in 1110 Wien. Essen und trinken Sie so viel Sie möchten — zu einem Preis.</p>
      <p className="story__body" data-cms="ueber_uns.story_body2">Ob regionale österreichische Küche, ausgefallene Sushi- und Maki-Variationen, leckere Grillereien oder Wok-Gerichte — ob frisch von der Live-Cooking-Station oder vom Selbstbedienungsbuffet: bei uns ist einfach für jeden etwas dabei.</p>
      <p className="story__body" data-cms="ueber_uns.story_body3">Mit über 500 Sitzplätzen, einem Spielgerüst für Kinder und 6 Separees für Feiern bietet das Watertuin die perfekte Location für jeden Anlass.</p>
      </div>
      <div className="story__photo">
      <img alt="Restaurant Watertuin" loading="lazy" src="/images/719032355_18337562068220022_4587586276842441353_n.jpg"/>
      </div>
      </div>
      </section>
      <section className="werte">
      <div className="werte__inner">
      <h2 className="werte__headline">Was uns antreibt.</h2>
      <div className="werte__grid">
      <div className="wert">
      <p className="wert__num">01.</p>
      <h3 className="wert__title" data-cms="ueber_uns.wert1_title">World Kitchen</h3>
      <p className="wert__desc" data-cms="ueber_uns.wert1_desc">Österreichisch, asiatisch, Sushi &amp; Maki, Wok, Grill — bei uns ist für jeden etwas dabei. Vom SB-Buffet bis zur Live-Cooking-Station.</p>
      </div>
      <div className="wert">
      <p className="wert__num">02.</p>
      <h3 className="wert__title" data-cms="ueber_uns.wert2_title">All You Can Eat &amp; Drink</h3>
      <p className="wert__desc" data-cms="ueber_uns.wert2_desc">Ein Preis, keine Limits. Essen und trinken Sie so viel Sie möchten — inklusive alkoholischer Getränke, Softdrinks, Tee und Kaffee.</p>
      </div>
      <div className="wert">
      <p className="wert__num">03.</p>
      <h3 className="wert__title" data-cms="ueber_uns.wert3_title">Für jeden Anlass</h3>
      <p className="wert__desc" data-cms="ueber_uns.wert3_desc">Familien, Firmen, Geburtstage, Weihnachtsfeiern — mit über 500 Sitzplätzen und 6 Separees für bis zu 30 Personen bieten wir die perfekte Location.</p>
      </div>
      </div>
      </div>
      </section>
      <div className="full-photo">
      <img alt="Küche" loading="lazy" src="/images/683837578_18333546976220022_6734153120687868386_n.jpg"/>
      <div className="full-photo__overlay"></div>
      <div className="full-photo__text">
      <p className="full-photo__quote">„Egal ob asiatisch oder europäisch — bei uns ist für jeden etwas dabei."</p>
      </div>
      </div>
      <section className="info">
      <div className="info__inner">
      <div>
      <h2 className="info__headline" data-cms="ueber_uns.info_headline">Watertuin Vienna.<br/>1110 Wien.</h2>
      <p className="info__body" data-cms="ueber_uns.info_body">Das Watertuin befindet sich in der Etrichstraße 23 im 11. Bezirk. Mit über 500 Sitzplätzen, einem Spielgerüst für Kinder und 6 Separees für private Feiern.</p>
      </div>
      <div className="info__details">
      <div className="info-detail">
      <p className="info-detail__label">Adresse</p>
      <p className="info-detail__value">Etrichstraße 23<br/>A-1110 Wien</p>
      </div>
      <div className="info-detail">
      <p className="info-detail__label">Öffnungszeiten</p>
      <p className="info-detail__value">Mo, Mi, Do &amp; Fr: 17:30–22:00<br/>Sa, So &amp; Feiertag: 11:30–16:00 &amp; 17:30–22:00<br/>Dienstag: geschlossen</p>
      </div>
      <div className="info-detail">
      <p className="info-detail__label">Reservierungen</p>
      <p className="info-detail__value">+43 1 767 14 97<br/>oder über das Kontaktformular</p>
      </div>
      <div className="info-detail">
      <p className="info-detail__label">Anreise</p>
      <p className="info-detail__value">U3 Simmering<br/>Straßenbahn 71</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cta-strip">
      <h2 className="cta-strip__headline" data-cms="ueber_uns.cta_headline">Überzeugen Sie sich selbst.</h2>
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
