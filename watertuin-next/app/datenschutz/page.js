import DesignInteractions from '../../components/DesignInteractions'

export const metadata = {
  title: "Datenschutz \u2014 Watertuin Vienna",
}

const css = "\n:root{--cp:#2D6A4F;--cpd:#1B3A2D;--cpl:#52B788;--cpxl:#D8F3DC;--cd:#1A1A1A;--cb:#4D3F37;--cm:#8A7468;--ca:#E8A020;--cbg:#F7F3EE;--cs:#FDFAF7;--cbr:#E2D9CF;--ff:'Satoshi',sans-serif;--fa:'Avenir Next','Avenir','Nunito Sans',sans-serif}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--ff);background:var(--cbg);color:var(--cb);overflow-x:hidden}a{text-decoration:none;color:inherit}\n\n.site-header{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#1B3A2D;box-shadow:0 1px 0 rgba(255,255,255,.07)}\n.logo{display:flex;align-items:center}\n.nav{display:flex;align-items:center;gap:28px}\n.nav a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .2s}\n.nav a:hover{color:#fff}\n.btn-reserve{background:var(--ca);color:var(--cd)!important;padding:9px 20px;border-radius:100px;font-weight:700;font-size:13px}\n\n.page-hero{background:var(--cpd);padding:140px 60px 80px}\n.page-hero__eyebrow{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--ca);margin-bottom:16px}\n.page-hero__headline{font-family:var(--fa);font-style:italic;font-size:clamp(40px,6vw,80px);font-weight:700;color:#fff;letter-spacing:-0.5px;line-height:1}\n\n.content{max-width:760px;margin:0 auto;padding:80px 60px 100px}\n.content h2{font-family:var(--fa);font-style:italic;font-size:28px;font-weight:700;color:var(--cd);letter-spacing:-0.5px;margin:48px 0 16px}\n.content h2:first-child{margin-top:0}\n.content p{font-size:16px;color:var(--cb);line-height:1.75;margin-bottom:14px}\n.content a{color:var(--cp);text-decoration:underline;word-break:break-all}\n.content ul{margin:12px 0 14px 24px}\n.content ul li{font-size:16px;color:var(--cb);line-height:1.75;margin-bottom:8px}\n.content ul li strong{color:var(--cd)}\n.divider{border:none;border-top:1px solid var(--cbr);margin:40px 0}\n\n/* FOOTER */\nfooter{background:var(--cd);padding:80px 60px 40px}\n.footer__grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}\n.footer__tagline{font-family:var(--fa);font-style:italic;font-size:22px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:-.5px;line-height:1.2;margin-bottom:24px}\n.footer__social{display:flex;gap:8px;margin-bottom:0}\n.social-icon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:13px;font-weight:600;transition:background .2s;text-decoration:none}\n.social-icon:hover{background:var(--cp);color:#fff}\n.footer__col-title{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}\n.footer__links{list-style:none;display:flex;flex-direction:column;gap:11px}\n.footer__links a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}\n.footer__links a:hover{color:#fff}\n.footer__address{font-size:14px;line-height:1.7;color:rgba(255,255,255,.55)}\n.footer__address strong{color:rgba(255,255,255,.8);font-weight:500}\n.footer__bottom{max-width:1100px;margin:24px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08)}\n.footer__legal a{color:rgba(255,255,255,.4);margin-left:20px;transition:color .2s}\n.footer__legal a:hover{color:rgba(255,255,255,.7)}\n\n.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n.hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s;border-radius:2px}\n.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n.mobile-menu.open{display:flex}\n.mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n.mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n.mobile-menu a:last-of-type{border-bottom:none}\n.mobile-menu a:hover{color:#fff}\n.mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n@media(max-width:900px){\n  .site-header{padding:14px 20px}\n  .nav{display:none}.btn-reserve{display:none!important}.hamburger{display:flex!important}\n  .page-hero{padding:120px 24px 60px}\n  .content{padding:40px 24px 60px}\n  footer{padding:60px 24px 32px}\n  .footer__grid{grid-template-columns:1fr 1fr;gap:40px}\n}\n"

export default function DatenschutzPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header">
        <a className='logo' href='/'><img src="/images/logo.png" alt="Watertuin" style={{height: "36px", width: "auto", display: "block"}}/></a>
        <nav className="nav">
          <a className='nav-link' href='/sortiment'>Sortiment</a>
          <a className='nav-link' href='/preise'>Preise</a>
          <a className='nav-link' href='/live-cooking'>Live Cooking</a>
          <a className='nav-link' href='/geburtstag'>Geburtstag</a>
          <a className='nav-link' href='/ueber-uns'>Über uns</a>
          <a className='nav-link' href='/kontakt'>Kontakt</a>
          <a className='btn-reserve' href='/kontakt#form'>Reservieren</a>
        </nav>
        <button className="hamburger" id="hamburger" aria-label="Menü öffnen">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        <button className="mobile-menu__close" id="menuClose">✕</button>
        <a href='/'>Start</a>
        <a href='/sortiment'>Sortiment</a>
        <a href='/preise'>Preise</a>
        <a href='/live-cooking'>Live Cooking</a>
        <a href='/geburtstag'>Geburtstag</a>
        <a href='/gruppen-events'>Gruppen & Events</a>
        <a href='/ueber-uns'>Über uns</a>
        <a href='/kontakt'>Kontakt</a>
        <a className='mobile-menu__cta' href='/kontakt#form'>Jetzt reservieren</a>
      </div>

      <section className="page-hero">
        <p className="page-hero__eyebrow">Rechtliches</p>
        <h1 className="page-hero__headline">Datenschutz</h1>
      </section>

      <div className="content">

        <p>Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der EU-Datenschutz-Grundverordnung (DSGVO) zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p>

        <h2>Speicherung persönlicher Daten</h2>
        <p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln – wie Name, E-Mail-Adresse oder andere persönliche Angaben im Rahmen der Übermittlung eines Formulars – werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p>
        <p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen, und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen (Reservierung, Anfragen). Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter.</p>

        <hr className="divider"/>

        <h2>Ihre Rechte laut DSGVO</h2>
        <p>Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen Datenschutzgesetzes (DSG) grundsätzlich folgende Rechte zu:</p>
        <ul>
          <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
          <li>Recht auf Löschung – „Recht auf Vergessenwerden" (Artikel 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
          <li>Recht auf Benachrichtigung (Artikel 19 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
          <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
          <li>Recht, nicht einer ausschließlich automatisierten Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
        </ul>
        <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen <strong>Datenschutzbehörde</strong> beschweren: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a></p>

        <hr className="divider"/>

        <h2>TLS-Verschlüsselung</h2>
        <p>Wir verwenden HTTPS, um Daten abhörsicher im Internet zu übertragen. Durch den Einsatz von TLS (Transport Layer Security) können wir den Schutz vertraulicher Daten sicherstellen.</p>

        <hr className="divider"/>

        <h2>Google Fonts</h2>
        <p>Wir verwenden Google Fonts der Firma Google Inc. auf unserer Webseite. Die Verwendung erfolgt ohne Authentisierung und es werden keine Cookies an die Google Fonts API gesendet. Mehr Informationen: <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener">developers.google.com/fonts/faq</a></p>

        <hr className="divider"/>

        <h2>Google Maps</h2>
        <p>Wir verwenden Google Maps der Firma Google Inc. auf unserer Webseite. Durch die Nutzung dieser Karte werden Daten an Google übertragen. Informationen zur Datenschutzrichtlinie: <a href="https://www.google.com/intl/de/policies/privacy/" target="_blank" rel="noopener">google.com/intl/de/policies/privacy</a></p>

        <hr className="divider"/>

        <h2>Google Analytics</h2>
        <p>Wir verwenden auf dieser Webseite Google Analytics der Firma Google Inc., um Besucherdaten statistisch auszuwerten. Dabei werden zielorientierte Cookies eingesetzt.</p>
        <ul>
          <li><strong>_ga</strong> — Ablaufzeit: 2 Jahre — Unterscheidung der Webseitenbesucher</li>
          <li><strong>_gid</strong> — Ablaufzeit: 24 Stunden — Unterscheidung der Webseitenbesucher</li>
          <li><strong>_gat</strong> — Ablaufzeit: 1 Minute — Drosselung der Anforderungsrate</li>
        </ul>
        <p>Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Plugin herunterladen: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">tools.google.com/dlpage/gaoptout</a></p>
        <p>Die IP-Adressen-Anonymisierung von Google Analytics ist auf dieser Webseite aktiviert.</p>

        <hr className="divider"/>

        <h2>Facebook</h2>
        <p>Wir verwenden auf dieser Webseite Funktionen von Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland). Durch den Besuch unserer Webseite können Informationen an Facebook übermittelt werden. Datenschutzrichtlinien: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener">facebook.com/policy.php</a></p>

      </div>

      <footer>
        <div className="footer__grid">
          <div>
            <span style={{display: "block", marginBottom: "20px"}}><img src="/images/logo.png" alt="Watertuin" style={{height: "36px", width: "auto", display: "block"}}/></span>
            <p className="footer__tagline">Mehr von allem.<br/>Für jeden.</p>
            <div className="footer__social">
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon" aria-label="TikTok">TT</a>
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
