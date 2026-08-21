import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Sortiment \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}\nimg{display:block;width:100%;height:100%;object-fit:cover}\na{text-decoration:none;color:inherit}\n\n/* \u2500\u2500 HEADER \u2500\u2500 */\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.logo img{height:32px;width:auto;display:block;border-radius:4px}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover,.nav a.active{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px;transition:background .2s}\n.btn-reserve:hover{background:#f5b030}\n\n/* \u2500\u2500 HERO \u2500\u2500 */\n.page-hero{position:relative;height:52vh;min-height:340px;overflow:hidden;margin-top:62px}\n.page-hero__bg{position:absolute;inset:0;background:url('sb-buffet.jpg') center/cover no-repeat}\n.page-hero__bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,20,15,.78) 0%,rgba(10,20,15,.2) 100%)}\n.page-hero__content{position:absolute;bottom:48px;left:60px;right:60px;z-index:2}\n.page-hero__eyebrow{font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--ca);margin-bottom:12px}\n.page-hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(40px,6vw,84px);font-weight:700;color:#fff;line-height:.98;letter-spacing:-0.5px;margin-bottom:12px}\n.page-hero__sub{font-size:15px;color:rgba(255,255,255,.65);max-width:520px;line-height:1.5}\n\n/* \u2500\u2500 MAIN TABS \u2500\u2500 */\n.main-tabs{background:var(--cpd);padding:0 60px;display:flex;gap:0}\n.main-tab{padding:20px 36px;font-size:15px;font-weight:700;color:rgba(255,255,255,.45);cursor:pointer;border:none;border-bottom:3px solid transparent;background:none;transition:color .2s,border-color .2s;white-space:nowrap;letter-spacing:-.2px}\n.main-tab:hover{color:rgba(255,255,255,.8)}\n.main-tab.active{color:#fff;border-bottom-color:var(--ca)}\n\n/* \u2500\u2500 PANELS \u2500\u2500 */\n.panel{display:none;background:var(--cbg);padding:60px}\n.panel.active{display:block}\n\n/* Panel header */\n.panel-header{margin-bottom:48px}\n.panel-header__eyebrow{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:var(--cm);margin-bottom:10px}\n.panel-header__title{font-family:var(--fa);font-style:italic;font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--cd);letter-spacing:-0.5px;line-height:1;margin-bottom:12px}\n.panel-header__desc{font-size:16px;color:var(--cb);line-height:1.6;max-width:640px}\n\n/* \u2500\u2500 CARD GRID \u2500\u2500 */\n.card-grid{display:grid;gap:20px}\n.card-grid.cols-2{grid-template-columns:repeat(2,1fr)}\n.card-grid.cols-3{grid-template-columns:repeat(3,1fr)}\n.card-grid.cols-4{grid-template-columns:repeat(4,1fr)}\n\n.card{border-radius:6px;overflow:hidden;background:var(--cs);box-shadow:0 1px 0 var(--cbr);transition:transform .25s,box-shadow .25s}\n.card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.1)}\n.card__photo{position:relative;height:220px;overflow:hidden}\n.card__photo img{transition:transform 6s ease}\n.card:hover .card__photo img{transform:scale(1.04)}\n.card__badge{position:absolute;top:12px;left:12px;background:rgba(27,58,45,.88);color:#fff;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:600;letter-spacing:.4px}\n.card__body{padding:20px 22px 24px}\n.card__title{font-family:var(--fa);font-style:italic;font-size:20px;font-weight:700;color:var(--cd);letter-spacing:-.5px;margin-bottom:6px}\n.card__desc{font-size:13px;color:var(--cm);line-height:1.55}\n\n/* Featured card (spans 2 cols) */\n.card.featured .card__photo{height:340px}\n\n/* \u2500\u2500 DRINKS GRID \u2500\u2500 */\n.drink-section{margin-bottom:48px}\n.drink-section:last-child{margin-bottom:0}\n.drink-section__title{font-family:var(--fa);font-style:italic;font-size:24px;font-weight:700;color:var(--cd);letter-spacing:-.5px;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid var(--cbr)}\n.drink-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}\n.drink-card{border-radius:6px;overflow:hidden;background:var(--cs)}\n.drink-card__photo{height:180px;overflow:hidden}\n.drink-card__photo img{transition:transform 5s ease}\n.drink-card:hover .drink-card__photo img{transform:scale(1.04)}\n.drink-card__body{padding:16px 18px 18px}\n.drink-card__name{font-weight:700;font-size:15px;color:var(--cd);margin-bottom:4px}\n.drink-card__note{font-size:12px;color:var(--cm)}\n.drink-note{background:var(--cpxl);color:var(--cp);padding:20px 28px;border-radius:6px;font-size:14px;font-weight:600;line-height:1.5;margin-top:32px}\n\n/* \u2500\u2500 ALLERGEN + CTA + FOOTER \u2500\u2500 */\n.allergen-note{background:var(--cbr);padding:24px 60px;text-align:center;font-size:13px;color:var(--cm);line-height:1.6}\n.allergen-note a{color:var(--cp);text-decoration:underline}\n.cta-strip{background:var(--cp);padding:68px 60px;text-align:center}\n.cta-strip__headline{font-family:var(--fa);font-style:italic;font-size:clamp(26px,4vw,48px);font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:28px}\n.cta-strip__btn{display:inline-block;background:var(--ca);color:var(--cd);padding:14px 36px;border-radius:100px;font-weight:700;font-size:15px;transition:background .2s,transform .2s}\n.cta-strip__btn:hover{background:#f5b030;transform:translateY(-2px)}\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n.footer__legal{max-width:1100px;margin:16px auto 0;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:flex-end;gap:20px}\n.footer__legal a{color:rgba(255,255,255,.35);font-size:12px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n/* \u2500\u2500 HAMBURGER + MOBILE MENU \u2500\u2500 */\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu__close:hover{color:#fff}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n/* \u2500\u2500 RESPONSIVE \u2500\u2500 */\n@media(max-width:1100px){\n  .card-grid.cols-4{grid-template-columns:repeat(2,1fr)}\n  .card-grid.cols-3{grid-template-columns:repeat(2,1fr)}\n}\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .main-tabs{padding:0 20px;overflow-x:auto;scrollbar-width:none}\n  .main-tabs::-webkit-scrollbar{display:none}\n  .main-tab{padding:16px 20px;font-size:14px}\n  .panel{padding:36px 20px}\n  .card-grid.cols-2,.card-grid.cols-3,.card-grid.cols-4{grid-template-columns:1fr 1fr}\n  .drink-cards{grid-template-columns:1fr 1fr}\n  .card__photo{height:160px}\n  .card.featured .card__photo{height:200px}\n  .allergen-note,.cta-strip{padding:40px 24px}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n@media(max-width:560px){\n  .card-grid.cols-2,.card-grid.cols-3,.card-grid.cols-4{grid-template-columns:1fr}\n  .drink-cards{grid-template-columns:1fr}\n}\n"

export default function SortimentPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
      <a className='logo' href='/'><img alt="Watertuin" src="/images/logo.png"/></a>
      <nav className="nav">
      <a className='nav-link active' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
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
      <a className='active' href='/sortiment'>Sortiment</a>
      <a href='/preise'>Preise</a>
      <a href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>

      <section className="page-hero">
      <div className="page-hero__bg"></div>
      <div className="page-hero__content">
      <p className="page-hero__eyebrow" data-cms="sortiment.hero_eyebrow">All You Can Eat &amp; Drink</p>
      <h1 className="page-hero__headline" data-cms="sortiment.hero_headline">Das komplette<br/>Sortiment.</h1>
      <p className="page-hero__sub" data-cms="sortiment.hero_sub">Live Cooking, World Kitchen am Buffet und All You Can Drink — alles inklusive, zu einem Preis.</p>
      </div>
      </section>

      <div className="main-tabs" id="mainTabs" role="tablist">
      <button className="main-tab active" data-panel="live-cooking" role="tab">Live Cooking</button>
      <button className="main-tab" data-panel="sb-buffet" role="tab">SB-Buffet</button>
      <button className="main-tab" data-panel="getraenke" role="tab">Getränke</button>
      </div>

      <div className="panel active" id="panel-live-cooking" role="tabpanel">
      <div className="panel-header">
      <p className="panel-header__eyebrow" data-cms="sortiment.live_cooking_eyebrow">Live Cooking</p>
      <h2 className="panel-header__title" data-cms="sortiment.live_cooking_title">Frisch zubereitet<br/>direkt vor Ihnen.</h2>
      <p className="panel-header__desc" data-cms="sortiment.live_cooking_desc">An unseren Live-Stationen bereiten unsere Köche alles frisch und auf Bestellung zu — Grill, Pasta, Pizza und Asia/Wok.</p>
      </div>
      <div className="card-grid cols-2">

      <div className="card featured">
      <div className="card__photo">
      <img alt="Grill — Steak, Burger, Meeresfrüchte" data-cms-src="/images/sortiment.lc_grill_image" loading="lazy" src="/images/live-cooking-grill-steak-burger-meeresfruechte.jpg"/>
      <span className="card__badge">Live-Station</span>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.lc_grill_title">Grill</p>
      <p className="card__desc" data-cms="sortiment.lc_grill_desc">Steak, Burger mit Toppings nach Wahl und Meeresfrüchte — frisch vom Grill, direkt auf Ihren Teller.</p>
      </div>
      </div>

      <div className="card featured">
      <div className="card__photo">
      <img alt="Live Cooking Pasta" data-cms-src="/images/sortiment.lc_pasta_image" loading="lazy" src="/images/live-cooking-grill-pasta.jpg"/>
      <span className="card__badge">Live-Station</span>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.lc_pasta_title">Pasta</p>
      <p className="card__desc" data-cms="sortiment.lc_pasta_desc">Pasta frisch für Sie zubereitet — direkt an der Live-Station, nach Bestellung.</p>
      </div>
      </div>

      <div className="card featured">
      <div className="card__photo">
      <img alt="Live Cooking Pizza" data-cms-src="/images/sortiment.lc_pizza_image" loading="lazy" src="/images/live-cooking-grill-pizza.jpg"/>
      <span className="card__badge">Live-Station</span>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.lc_pizza_title">Pizza</p>
      <p className="card__desc" data-cms="sortiment.lc_pizza_desc">Frisch aus dem Ofen — Pizza nach Wahl, direkt an der Live-Station zubereitet.</p>
      </div>
      </div>

      <div className="card featured">
      <div className="card__photo">
      <img alt="Live Cooking Asia/Wok" data-cms-src="/images/sortiment.lc_asia_wok_image" loading="lazy" src="/images/live-cooking-grill-asia-wok.jpg"/>
      <span className="card__badge">Live-Station</span>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.lc_asia_wok_title">Asia / Wok</p>
      <p className="card__desc" data-cms="sortiment.lc_asia_wok_desc">Heiß aus dem Wok — asiatische Gerichte, frisch und nach Bestellung zubereitet.</p>
      </div>
      </div>
      </div>
      </div>

      <div className="panel" id="panel-sb-buffet" role="tabpanel">
      <div className="panel-header">
      <p className="panel-header__eyebrow" data-cms="sortiment.buffet_eyebrow">Selbstbedienung</p>
      <h2 className="panel-header__title" data-cms="sortiment.buffet_title">Das Buffet.</h2>
      <p className="panel-header__desc" data-cms="sortiment.buffet_desc">Österreichisch, Chinesisch, Vegetarisch, Sushi &amp; Maki, Kalte Vorspeisen, Käse und Desserts — täglich frisch, unbegrenzt und inklusive.</p>
      </div>
      <div className="card-grid cols-3">
      <div className="card">
      <div className="card__photo">
      <img alt="Österreichisches Buffet" data-cms-src="/images/sortiment.buf_oesterreichisch_image" loading="lazy" src="/images/sb-buffet-oesterreichisch.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_oesterreichisch_title">Österreichisch</p>
      <p className="card__desc" data-cms="sortiment.buf_oesterreichisch_desc">Klassische österreichische Küche, täglich wechselnd.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Chinesisches Buffet" data-cms-src="/images/sortiment.buf_chinesisch_image" loading="lazy" src="/images/sb-buffet-chinesisch.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_chinesisch_title">Chinesisch / Asiatisch</p>
      <p className="card__desc" data-cms="sortiment.buf_chinesisch_desc">Chinesische und asiatische Gerichte, täglich frisch.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Vegetarisches Buffet" data-cms-src="/images/sortiment.buf_vegetarisch_image" loading="lazy" src="/images/sb-buffet-vegetarisch.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_vegetarisch_title">Vegetarisch</p>
      <p className="card__desc" data-cms="sortiment.buf_vegetarisch_desc">Vielfältige vegetarische Auswahl am Buffet.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Sushi &amp; Maki" data-cms-src="/images/sortiment.buf_sushi_image" loading="lazy" src="/images/sb-buffet-sushi-und-maki-variationen.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_sushi_title">Sushi &amp; Maki</p>
      <p className="card__desc" data-cms="sortiment.buf_sushi_desc">Ausgefallene Variationen, täglich frisch zubereitet.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Kalte Vorspeisen" data-cms-src="/images/sortiment.buf_kalte_vorspeisen_image" loading="lazy" src="/images/sb-buffet-kalte-vorspeisen.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_kalte_vorspeisen_title">Kalte Vorspeisen</p>
      <p className="card__desc" data-cms="sortiment.buf_kalte_vorspeisen_desc">Frische kalte Vorspeisen zur Einstimmung.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Käsevariationen" data-cms-src="/images/sortiment.buf_kaese_image" loading="lazy" src="/images/sb-buffet-kaesevariationen.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_kaese_title">Käsevariationen</p>
      <p className="card__desc" data-cms="sortiment.buf_kaese_desc">Auswahl an verschiedenen Käsesorten.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Nachspeisen" data-cms-src="/images/sortiment.buf_nachspeisen_image" loading="lazy" src="/images/sb-buffet-nachspeisen.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_nachspeisen_title">Nachspeisen</p>
      <p className="card__desc" data-cms="sortiment.buf_nachspeisen_desc">Süße Desserts und Mehlspeisen am Buffet.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Eis" data-cms-src="/images/sortiment.buf_eis_image" loading="lazy" src="/images/sb-buffet-eis.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_eis_title">Eis</p>
      <p className="card__desc" data-cms="sortiment.buf_eis_desc">Verschiedene Eissorten — inklusive.</p>
      </div>
      </div>
      <div className="card">
      <div className="card__photo">
      <img alt="Frisches Obst" data-cms-src="/images/sortiment.buf_obst_image" loading="lazy" src="/images/sb-buffet-frisches-obst.jpg"/>
      </div>
      <div className="card__body">
      <p className="card__title" data-cms="sortiment.buf_obst_title">Frisches Obst</p>
      <p className="card__desc" data-cms="sortiment.buf_obst_desc">Frisch aufgeschnittenes Obst, täglich bereit.</p>
      </div>
      </div>
      </div>
      <p style={{marginTop: "32px", fontSize: "13px", color: "var(--cm)"}}>SB-Buffet-Zeiten: 11:30–15:30 Uhr &amp; 17:30–21:30 Uhr · Täglich wechselndes Angebot</p>
      </div>

      <div className="panel" id="panel-getraenke" role="tabpanel">
      <div className="panel-header">
      <p className="panel-header__eyebrow" data-cms="sortiment.getraenke_eyebrow">All You Can Drink</p>
      <h2 className="panel-header__title" data-cms="sortiment.getraenke_title">Alles zu trinken.<br/>Alles inklusive.</h2>
      <p className="panel-header__desc" data-cms="sortiment.getraenke_desc">Alle Getränke sind im Eintrittspreis enthalten — alkoholfrei und alkoholisch, so viel man möchte.</p>
      </div>
      <div className="drink-section">
      <h3 className="drink-section__title">Alkoholfrei</h3>
      <div className="drink-cards">
      <div className="drink-card">
      <div className="drink-card__photo">
      <img alt="Softdrinks" loading="lazy" src="/images/getraenke-softdrinks.jpg"/>
      </div>
      <div className="drink-card__body">
      <p className="drink-card__name">Softdrinks</p>
      <p className="drink-card__note">Verschiedene Sorten · inklusive</p>
      </div>
      </div>
      <div className="drink-card">
      <div className="drink-card__photo">
      <img alt="Slush-Eis" loading="lazy" src="/images/getraenke-slush-eis.jpg"/>
      </div>
      <div className="drink-card__body">
      <p className="drink-card__name">Slush-Eis</p>
      <p className="drink-card__note">Erfrischend · inklusive</p>
      </div>
      </div>
      <div className="drink-card" style={{background: "var(--cpxl)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "28px"}}>
      <p style={{fontFamily: "var(--fa)", fontStyle: "italic", fontSize: "18px", fontWeight: "700", color: "var(--cp)", marginBottom: "8px"}}>Tee &amp; Kaffee</p>
      <p style={{fontSize: "13px", color: "var(--cp)"}}>Heißgetränke · inklusive</p>
      </div>
      </div>
      </div>
      <div className="drink-section">
      <h3 className="drink-section__title">Alkoholisch</h3>
      <div className="drink-cards">
      <div className="drink-card">
      <div className="drink-card__photo">
      <img alt="Alkoholische Getränke" loading="lazy" src="/images/getraenke-alkoholische-getraenke.jpg"/>
      </div>
      <div className="drink-card__body">
      <p className="drink-card__name">Bier &amp; Wein</p>
      <p className="drink-card__note">Inklusive im Eintrittspreis</p>
      </div>
      </div>
      <div className="drink-card" style={{background: "var(--cpd)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "28px"}}>
      <p style={{fontFamily: "var(--fa)", fontStyle: "italic", fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "8px"}}>All You Can Drink</p>
      <p style={{fontSize: "13px", color: "rgba(255,255,255,.55)", lineHeight: "1.5"}}>Alle Getränke im Preis enthalten · unbegrenzt · so viel man möchte</p>
      </div>
      </div>
      </div>
      <div className="drink-note">
          🍺 Alle Getränke — alkoholfrei und alkoholisch — sind im Eintrittspreis inklusive. Kein Aufpreis.
        </div>
      </div>

      <div className="allergen-note">
        Alle Gerichte können Spuren von Gluten, Nüssen, Milch, Ei, Soja und Meeresfrüchten enthalten.
        Allergene auf Anfrage — unser Team hilft gerne. <a href='/kontakt'>Kontakt</a>
      </div>
      <section className="cta-strip">
      <h2 className="cta-strip__headline">Bereit, alles zu probieren?</h2>
      <a className='cta-strip__btn' href='/kontakt#form'>Tisch reservieren</a>
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
