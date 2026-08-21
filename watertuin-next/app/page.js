import DesignInteractions from '../components/DesignInteractions'

export const metadata = {
  title: "Watertuin Vienna \u2014 All You Can Eat & Drink",
}

const css = "\n  /* \u2500\u2500\u2500 TOKENS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  :root {\n    --cp:   #2D6A4F;\n    --cpd:  #1B3A2D;\n    --cpl:  #52B788;\n    --cpxl: #D8F3DC;\n    --cd:   #1A1A1A;\n    --cb:   #4D3F37;\n    --cm:   #8A7468;\n    --ca:   #E8A020;\n    --cbg:  #F7F3EE;\n    --cs:   #FDFAF7;\n    --cbr:  #E2D9CF;\n\n    --ff: 'Satoshi', sans-serif;\n    --fa: 'Avenir Next', 'Avenir', 'Nunito Sans', sans-serif;\n  }\n\n  /* \u2500\u2500\u2500 RESET \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n  html { scroll-behavior: smooth; }\n  body {\n    font-family: var(--ff);\n    background: var(--cbg);\n    color: var(--cb);\n    overflow-x: hidden;\n  }\n  img { display: block; width: 100%; height: 100%; object-fit: cover; }\n  a { text-decoration: none; color: inherit; }\n\n  /* \u2500\u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .site-header {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    z-index: 100;\n    padding: 14px 48px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #1B3A2D;\n    box-shadow: 0 1px 0 rgba(255,255,255,.07);\n  }\n  .logo {\n    display: flex;\n    align-items: center;\n  }\n  .logo img {\n    height: 32px;\n    width: auto;\n    display: block;\n    ;border-radius:4px}\n\n  .nav {\n    display: flex;\n    align-items: center;\n    gap: 32px;\n  }\n  .nav a {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.65);\n    transition: color 0.3s;\n  }\n  .nav a:hover, .nav a.active { color: #fff; }\n\n  .btn-reserve {\n    background: var(--ca);\n    color: var(--cd) !important;\n    padding: 9px 20px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 13px;\n    white-space: nowrap;\n    transition: background 0.2s;\n  }\n  .btn-reserve:hover { background: #f5b030; }\n\n  /* \u2500\u2500\u2500 HERO (Full Viewport) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .hero {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    min-height: 600px;\n    overflow: hidden;\n  }\n  .hero__bg {\n    position: absolute;\n    inset: 0;\n    background: url('hero-food-table.jpg') center/cover no-repeat;\n  }\n  .hero__bg::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      to top,\n      rgba(10,20,15,0.72) 0%,\n      rgba(10,20,15,0.15) 55%,\n      transparent 100%\n    );\n  }\n  .hero__content {\n    position: absolute;\n    bottom: 72px;\n    left: 60px;\n    right: 60px;\n    z-index: 2;\n  }\n  .hero__eyebrow {\n    font-family: var(--ff);\n    font-size: 13px;\n    font-weight: 500;\n    letter-spacing: 2.5px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 16px;\n  }\n  .hero__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(52px, 7vw, 100px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.02;\n    letter-spacing: -0.5px;\n    max-width: 780px;\n    margin-bottom: 32px;\n  }\n  .hero__actions {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n  }\n  .hero__cta-primary {\n    background: var(--ca);\n    color: var(--cd);\n    padding: 16px 36px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 16px;\n    letter-spacing: 0.2px;\n    transition: background 0.2s, transform 0.2s;\n  }\n  .hero__cta-primary:hover {\n    background: #f5b030;\n    transform: translateY(-2px);\n  }\n  .hero__cta-secondary {\n    color: rgba(255,255,255,0.85);\n    font-size: 15px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    border-bottom: 1px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: color 0.2s;\n  }\n  .hero__cta-secondary:hover { color: #fff; }\n\n  .hero__badge {\n    position: absolute;\n    bottom: 72px;\n    right: 60px;\n    z-index: 2;\n    text-align: right;\n  }\n  .hero__badge-text {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 15px;\n    color: rgba(255,255,255,0.7);\n    margin-bottom: 4px;\n  }\n  .hero__badge-info {\n    font-size: 13px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.5);\n    letter-spacing: 1px;\n  }\n\n  /* \u2500\u2500\u2500 SCROLL INDICATOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .scroll-indicator {\n    position: absolute;\n    bottom: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n  .scroll-indicator span {\n    display: block;\n    width: 1px;\n    height: 48px;\n    background: rgba(255,255,255,0.3);\n    animation: scrollLine 2s ease-in-out infinite;\n  }\n  @keyframes scrollLine {\n    0%, 100% { opacity: 0.2; transform: scaleY(0.5); transform-origin: top; }\n    50% { opacity: 1; transform: scaleY(1); }\n  }\n\n  /* \u2500\u2500\u2500 STATEMENT (huge type on cream) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .statement {\n    background: var(--cs);\n    padding: 120px 60px 100px;\n  }\n  .statement__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n  .statement__tag {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 32px;\n  }\n  .statement__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(40px, 5.5vw, 80px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.05;\n    letter-spacing: -0.5px;\n    max-width: 900px;\n    margin-bottom: 48px;\n  }\n  .statement__headline em {\n    color: var(--cp);\n    font-style: italic;\n  }\n  .statement__body {\n    font-size: 19px;\n    line-height: 1.65;\n    color: var(--cb);\n    max-width: 580px;\n    margin-bottom: 40px;\n  }\n  .statement__link {\n    display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--cp);\n    border-bottom: 1.5px solid var(--cpl);\n    padding-bottom: 2px;\n    transition: color 0.2s;\n  }\n  .statement__link:hover { color: var(--cpd); }\n\n  /* \u2500\u2500\u2500 PHOTO TILES (two-up, edge-to-edge) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .photo-tiles {\n    display: grid;\n    grid-template-columns: 55% 45%;\n    height: 680px;\n  }\n  .photo-tile {\n    position: relative;\n    overflow: hidden;\n  }\n  .photo-tile img {\n    transition: transform 8s ease;\n  }\n  .photo-tile:hover img { transform: scale(1.04); }\n  .photo-tile__caption {\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    padding: 40px 44px;\n    background: linear-gradient(to top, rgba(10,20,15,0.65), transparent);\n  }\n  .photo-tile__label {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 28px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 1.2;\n  }\n\n  /* \u2500\u2500\u2500 ALL YOU CAN EAT \u2014 LARGE STATEMENT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .offer-statement {\n    background: var(--cpd);\n    padding: 120px 60px;\n    position: relative;\n    overflow: hidden;\n  }\n  .offer-statement::before {\n    content: '';\n    position: absolute;\n    top: -200px; right: -200px;\n    width: 600px; height: 600px;\n    border-radius: 50%;\n    background: rgba(82, 183, 136, 0.08);\n  }\n  .offer-statement__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 80px;\n    align-items: center;\n  }\n  .offer-statement__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(44px, 5vw, 72px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.05;\n    letter-spacing: -0.5px;\n  }\n  .offer-statement__headline em {\n    color: var(--ca);\n  }\n  .offer-statement__right {}\n  .offer-statement__lead {\n    font-size: 19px;\n    color: rgba(255,255,255,0.75);\n    line-height: 1.6;\n    margin-bottom: 40px;\n  }\n  .offer-statement__pills {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-bottom: 44px;\n  }\n  .pill {\n    padding: 8px 18px;\n    border: 1px solid rgba(255,255,255,0.2);\n    border-radius: 100px;\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.8);\n    letter-spacing: 0.3px;\n  }\n  .pill.highlight {\n    border-color: var(--ca);\n    color: var(--ca);\n  }\n  .offer-statement__cta {\n    display: inline-block;\n    background: var(--ca);\n    color: var(--cd);\n    padding: 15px 34px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 15px;\n    transition: background 0.2s, transform 0.2s;\n  }\n  .offer-statement__cta:hover {\n    background: #f5b030;\n    transform: translateY(-2px);\n  }\n\n  /* \u2500\u2500\u2500 LIVE COOKING (photo + text, no box) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .live-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 620px;\n  }\n  .live-section__photo {\n    position: relative;\n    overflow: hidden;\n    background: var(--cpxl);\n  }\n  .live-section__photo img { height: 100%; }\n  .live-section__content {\n    background: var(--cbg);\n    padding: 80px 72px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .live-section__eyebrow {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cp);\n    margin-bottom: 24px;\n  }\n  .live-section__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(34px, 3.5vw, 52px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.1;\n    letter-spacing: -1.5px;\n    margin-bottom: 24px;\n  }\n  .live-section__body {\n    font-size: 17px;\n    line-height: 1.65;\n    color: var(--cb);\n    margin-bottom: 40px;\n  }\n  .live-section__details {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n    margin-bottom: 44px;\n  }\n  .live-detail {\n    display: flex;\n    align-items: flex-start;\n    gap: 14px;\n    font-size: 15px;\n    color: var(--cb);\n    line-height: 1.5;\n  }\n  .live-detail__icon {\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n    margin-top: 2px;\n    color: var(--cp);\n  }\n  .live-section__link {\n    display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--cp);\n    border-bottom: 1.5px solid var(--cpl);\n    padding-bottom: 2px;\n    width: fit-content;\n    transition: color 0.2s;\n  }\n  .live-section__link:hover { color: var(--cpd); }\n\n  /* \u2500\u2500\u2500 NUMBERS (organic, no boxes) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .numbers {\n    background: var(--cs);\n    padding: 120px 60px;\n  }\n  .numbers__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n  .numbers__label {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 72px;\n    text-align: center;\n  }\n  .numbers__grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 0;\n    border-top: 1px solid var(--cbr);\n  }\n  .number-item {\n    padding: 56px 40px 56px 0;\n    border-right: 1px solid var(--cbr);\n  }\n  .number-item:last-child { border-right: none; padding-right: 0; padding-left: 40px; }\n  .number-item:first-child { padding-left: 0; }\n  .number-item:nth-child(2), .number-item:nth-child(3) { padding-left: 40px; }\n  .number-item__value {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 72px;\n    font-weight: 700;\n    color: var(--cp);\n    line-height: 1;\n    letter-spacing: -1px;\n    margin-bottom: 12px;\n  }\n  .number-item__unit {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 36px;\n    color: var(--ca);\n  }\n  .number-item__label {\n    font-size: 14px;\n    font-weight: 500;\n    color: var(--cm);\n    letter-spacing: 0.5px;\n    line-height: 1.5;\n  }\n\n  /* \u2500\u2500\u2500 DRINKS \u2014 full bleed photo with overlay text \u2500\u2500\u2500\u2500\u2500\u2500 */\n  .drinks-section {\n    position: relative;\n    height: 600px;\n    overflow: hidden;\n  }\n  .drinks-section__bg {\n    position: absolute;\n    inset: 0;\n    background: repeating-linear-gradient(45deg,#f0e8d8 0,#f0e8d8 12px,#e5d9c8 12px,#e5d9c8 24px); /* \ud83d\udcf7 PLATZHALTER \u2014 Foto fehlt noch */;\n  }\n  .drinks-section__bg::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: rgba(10, 20, 15, 0.55);\n  }\n  .drinks-section__content {\n    position: absolute;\n    inset: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    padding: 0 60px;\n  }\n  .drinks-section__inner {\n    max-width: 640px;\n  }\n  .drinks-section__eyebrow {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 24px;\n  }\n  .drinks-section__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(38px, 4.5vw, 64px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.05;\n    letter-spacing: -0.5px;\n    margin-bottom: 24px;\n  }\n  .drinks-section__body {\n    font-size: 18px;\n    color: rgba(255,255,255,0.75);\n    line-height: 1.6;\n    margin-bottom: 36px;\n  }\n  .drinks-section__link {\n    display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #fff;\n    border-bottom: 1.5px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: border-color 0.2s;\n  }\n  .drinks-section__link:hover { border-color: #fff; }\n\n  /* \u2500\u2500\u2500 EXPERIENCE TILES (3 tiles, full-bleed photos) \u2500\u2500\u2500\u2500 */\n  .experience-tiles {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    height: 520px;\n  }\n  .exp-tile {\n    position: relative;\n    overflow: hidden;\n  }\n  .exp-tile:hover img { transform: scale(1.05); }\n  .exp-tile img {\n    height: 100%;\n    transition: transform 6s ease;\n  }\n  .exp-tile__overlay {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(10,20,15,0.7) 0%, transparent 60%);\n  }\n  .exp-tile__content {\n    position: absolute;\n    bottom: 36px;\n    left: 32px;\n    right: 32px;\n    z-index: 2;\n  }\n  .exp-tile__title {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 26px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 1.2;\n    margin-bottom: 8px;\n  }\n  .exp-tile__sub {\n    font-size: 13px;\n    color: rgba(255,255,255,0.65);\n    font-weight: 500;\n    letter-spacing: 0.5px;\n  }\n  .exp-tile__arrow {\n    position: absolute;\n    top: 28px;\n    right: 28px;\n    z-index: 2;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.15);\n    backdrop-filter: blur(4px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  .exp-tile:hover .exp-tile__arrow { opacity: 1; }\n\n  /* \u2500\u2500\u2500 PROCESS (airy, no boxes) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .process {\n    background: var(--cbg);\n    padding: 120px 60px;\n  }\n  .process__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n  .process__header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 60px;\n    align-items: end;\n    margin-bottom: 80px;\n  }\n  .process__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(36px, 4vw, 56px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.08;\n    letter-spacing: -1.5px;\n  }\n  .process__intro {\n    font-size: 17px;\n    color: var(--cb);\n    line-height: 1.65;\n  }\n  .process__steps {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    border-top: 1px solid var(--cbr);\n  }\n  .process-step {\n    padding: 48px 32px 48px 0;\n    border-right: 1px solid var(--cbr);\n  }\n  .process-step:last-child { border-right: none; }\n  .process-step:not(:first-child) { padding-left: 32px; }\n  .process-step__num {\n    font-family: var(--fa);\n    font-size: 13px;\n    font-style: italic;\n    color: var(--cm);\n    margin-bottom: 20px;\n  }\n  .process-step__title {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 22px;\n    font-weight: 600;\n    color: var(--cd);\n    line-height: 1.2;\n    margin-bottom: 12px;\n  }\n  .process-step__desc {\n    font-size: 14px;\n    color: var(--cm);\n    line-height: 1.6;\n  }\n\n  /* \u2500\u2500\u2500 TESTIMONIALS (airy, no card borders) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .testimonials {\n    background: var(--cpd);\n    padding: 120px 60px;\n  }\n  .testimonials__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n  .testimonials__header {\n    margin-bottom: 72px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    gap: 40px;\n  }\n  .testimonials__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(36px, 4vw, 56px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.08;\n    letter-spacing: -1.5px;\n    max-width: 560px;\n  }\n  .testimonials__meta {\n    text-align: right;\n  }\n  .testimonials__rating {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 52px;\n    font-weight: 700;\n    color: var(--ca);\n    letter-spacing: -0.5px;\n    line-height: 1;\n    margin-bottom: 6px;\n  }\n  .testimonials__platform {\n    font-size: 13px;\n    color: rgba(255,255,255,0.5);\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  .testimonials__grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 1px;\n    background: rgba(255,255,255,0.08);\n  }\n  .testimonial-item {\n    background: var(--cpd);\n    padding: 40px;\n  }\n  .testimonial-item__stars {\n    color: var(--ca);\n    font-size: 16px;\n    letter-spacing: 2px;\n    margin-bottom: 20px;\n  }\n  .testimonial-item__quote {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.9);\n    line-height: 1.45;\n    margin-bottom: 28px;\n  }\n  .testimonial-item__author {\n    font-size: 13px;\n    font-weight: 500;\n    color: rgba(255,255,255,0.45);\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n  /* \u2500\u2500\u2500 OCCASIONS \u2014 Birthday + Gruppen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .occasions {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    min-height: 560px;\n  }\n  .occasion-tile {\n    position: relative;\n    overflow: hidden;\n  }\n  .occasion-tile img {\n    height: 100%;\n    transition: transform 6s ease;\n  }\n  .occasion-tile:hover img { transform: scale(1.04); }\n  .occasion-tile__overlay {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(10,20,15,0.72) 0%, rgba(10,20,15,0.1) 60%);\n  }\n  .occasion-tile__content {\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    padding: 48px;\n    z-index: 2;\n  }\n  .occasion-tile__eyebrow {\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--ca);\n    margin-bottom: 12px;\n  }\n  .occasion-tile__title {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 36px;\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.1;\n    letter-spacing: -1px;\n    margin-bottom: 14px;\n  }\n  .occasion-tile__desc {\n    font-size: 15px;\n    color: rgba(255,255,255,0.7);\n    line-height: 1.55;\n    margin-bottom: 28px;\n    max-width: 380px;\n  }\n  .occasion-tile__link {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 14px;\n    font-weight: 600;\n    color: #fff;\n    border-bottom: 1px solid rgba(255,255,255,0.4);\n    padding-bottom: 2px;\n    transition: border-color 0.2s;\n  }\n  .occasion-tile__link:hover { border-color: #fff; }\n\n  /* \u2500\u2500\u2500 FAQ \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .faq-section {\n    background: var(--cs);\n    padding: 120px 60px;\n  }\n  .faq-section__inner {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 360px 1fr;\n    gap: 80px;\n    align-items: start;\n  }\n  .faq-section__left {\n    position: sticky;\n    top: 100px;\n  }\n  .faq-section__eyebrow {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--cm);\n    margin-bottom: 24px;\n  }\n  .faq-section__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(34px, 3.5vw, 52px);\n    font-weight: 700;\n    color: var(--cd);\n    line-height: 1.1;\n    letter-spacing: -1.5px;\n    margin-bottom: 24px;\n  }\n  .faq-section__sub {\n    font-size: 15px;\n    color: var(--cm);\n    line-height: 1.6;\n  }\n  .faq-list {\n    list-style: none;\n    border-top: 1px solid var(--cbr);\n  }\n  .faq-item {\n    border-bottom: 1px solid var(--cbr);\n  }\n  .faq-question {\n    width: 100%;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 28px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 24px;\n    text-align: left;\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 600;\n    color: var(--cd);\n    line-height: 1.3;\n    transition: color 0.2s;\n  }\n  .faq-question:hover { color: var(--cp); }\n  .faq-question.open { color: var(--cp); }\n  .faq-icon {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: var(--cbr);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.3s;\n  }\n  .faq-question.open .faq-icon {\n    background: var(--cp);\n    transform: rotate(45deg);\n  }\n  .faq-icon svg { stroke: var(--cd); width: 12px; height: 12px; }\n  .faq-question.open .faq-icon svg { stroke: #fff; }\n  .faq-answer {\n    display: none;\n    padding: 0 0 28px;\n    font-size: 16px;\n    color: var(--cb);\n    line-height: 1.65;\n  }\n  .faq-answer.open { display: block; }\n\n  /* \u2500\u2500\u2500 FINAL CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .final-cta {\n    position: relative;\n    overflow: hidden;\n    background: var(--cp);\n    padding: 140px 60px;\n    text-align: center;\n  }\n  .final-cta::before {\n    content: '';\n    position: absolute;\n    top: -150px; left: 50%;\n    transform: translateX(-50%);\n    width: 700px; height: 700px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.06);\n  }\n  .final-cta__eyebrow {\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.6);\n    margin-bottom: 28px;\n  }\n  .final-cta__headline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: clamp(44px, 6vw, 88px);\n    font-weight: 700;\n    color: #fff;\n    line-height: 1.02;\n    letter-spacing: -0.5px;\n    max-width: 800px;\n    margin: 0 auto 48px;\n  }\n  .final-cta__headline em { color: var(--ca); }\n  .final-cta__actions {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    flex-wrap: wrap;\n  }\n  .final-cta__btn-primary {\n    background: var(--ca);\n    color: var(--cd);\n    padding: 18px 44px;\n    border-radius: 100px;\n    font-weight: 700;\n    font-size: 17px;\n    transition: background 0.2s, transform 0.2s;\n  }\n  .final-cta__btn-primary:hover {\n    background: #f5b030;\n    transform: translateY(-2px);\n  }\n  .final-cta__btn-secondary {\n    background: rgba(255,255,255,0.15);\n    color: #fff;\n    padding: 18px 36px;\n    border-radius: 100px;\n    font-weight: 600;\n    font-size: 17px;\n    transition: background 0.2s;\n  }\n  .final-cta__btn-secondary:hover { background: rgba(255,255,255,0.25); }\n  .final-cta__info {\n    margin-top: 32px;\n    font-size: 14px;\n    color: rgba(255,255,255,0.5);\n  }\n\n  /* \u2500\u2500\u2500 FOOTER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  footer {\n    background: var(--cd);\n    padding: 80px 60px 40px;\n    color: rgba(255,255,255,0.6);\n  }\n  .footer__grid {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1.5fr 1fr 1fr 1fr;\n    gap: 60px;\n    padding-bottom: 60px;\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n    margin-bottom: 36px;\n  }\n  .footer__brand .logo { color: #fff; font-size: 22px; margin-bottom: 16px; display: block; }\n  .footer__tagline {\n    font-family: var(--fa);\n    font-style: italic;\n    font-size: 17px;\n    color: rgba(255,255,255,0.45);\n    line-height: 1.5;\n    margin-bottom: 28px;\n    max-width: 220px;\n  }\n  .footer__social {\n    display: flex;\n    gap: 12px;\n  }\n  .social-icon {\n    width: 36px; height: 36px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.08);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgba(255,255,255,0.6);\n    font-size: 13px;\n    font-weight: 600;\n    transition: background 0.2s;\n    text-decoration: none;\n  }\n  .social-icon:hover { background: var(--cp); color: #fff; }\n  .footer__col-title {\n    font-size: 11px;\n    font-weight: 600;\n    letter-spacing: 2.5px;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.3);\n    margin-bottom: 20px;\n  }\n  .footer__links {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 11px;\n  }\n  .footer__links a {\n    font-size: 14px;\n    color: rgba(255,255,255,0.55);\n    transition: color 0.2s;\n  }\n  .footer__links a:hover { color: #fff; }\n  .footer__address {\n    font-size: 14px;\n    line-height: 1.7;\n    color: rgba(255,255,255,0.55);\n  }\n  .footer__address strong {\n    color: rgba(255,255,255,0.8);\n    font-weight: 500;\n  }\n  .footer__bottom {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 12px;\n    font-size: 13px;\n  }\n  .footer__legal a { color: rgba(255,255,255,0.4); margin-left: 20px; transition: color 0.2s; }\n  .footer__legal a:hover { color: rgba(255,255,255,0.7); }\n\n  /* \u2500\u2500\u2500 FLOATING CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .float-cta {\n    position: fixed;\n    bottom: 28px;\n    right: 28px;\n    z-index: 200;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background: var(--cpd);\n    color: #fff;\n    padding: 14px 24px;\n    border-radius: 100px;\n    font-weight: 600;\n    font-size: 14px;\n    box-shadow: 0 8px 32px rgba(0,0,0,0.3);\n    transform: translateY(80px);\n    opacity: 0;\n    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s;\n  }\n  .float-cta.visible { transform: translateY(0); opacity: 1; }\n  .float-cta:hover { background: var(--cp); }\n  .float-cta__dot {\n    width: 8px; height: 8px;\n    border-radius: 50%;\n    background: var(--ca);\n    animation: pulse 2s infinite;\n  }\n  @keyframes pulse {\n    0%, 100% { opacity: 1; transform: scale(1); }\n    50% { opacity: 0.5; transform: scale(0.7); }\n  }\n\n  /* \u2500\u2500\u2500 MOBILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* HAMBURGER */\n  .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}\n  .hamburger span{display:block;width:22px;height:2px;background:#fff;transition:transform .3s,opacity .3s;border-radius:2px}\n  .mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:var(--cpd);flex-direction:column;padding:80px 40px 40px;gap:4px;overflow-y:auto}\n  .mobile-menu.open{display:flex}\n  .mobile-menu__close{position:absolute;top:22px;right:24px;background:none;border:none;cursor:pointer;font-size:28px;color:rgba(255,255,255,.5);line-height:1}\n  .mobile-menu__close:hover{color:#fff}\n  .mobile-menu a{font-family:var(--fa);font-style:italic;font-size:30px;font-weight:700;color:rgba(255,255,255,.65);letter-spacing:-1px;line-height:1.2;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .2s}\n  .mobile-menu a:last-of-type{border-bottom:none}\n  .mobile-menu a:hover,.mobile-menu a.active{color:#fff}\n  .mobile-menu__cta{display:inline-block!important;background:var(--ca)!important;color:var(--cd)!important;padding:14px 32px!important;border-radius:100px!important;font-family:var(--ff)!important;font-style:normal!important;font-size:15px!important;font-weight:700;margin-top:16px;border-bottom:none!important;width:fit-content}\n\n  @media (max-width: 900px) {\n    .site-header { padding: 14px 20px; }\n    .nav { display: none; }\n    .btn-reserve { display: none !important; }\n    .hamburger { display: flex !important; }\n\n    .hero__content { bottom: 48px; left: 24px; right: 24px; }\n    .hero__badge { display: none; }\n\n    .statement { padding: 80px 24px; }\n\n    .photo-tiles { grid-template-columns: 1fr; height: auto; }\n    .photo-tile { height: 320px; }\n\n    .offer-statement__inner { grid-template-columns: 1fr; gap: 40px; }\n    .offer-statement { padding: 80px 24px; }\n\n    .live-section { grid-template-columns: 1fr; }\n    .live-section__photo { height: 380px; }\n    .live-section__content { padding: 60px 24px; }\n\n    .numbers { padding: 80px 24px; }\n    .numbers__grid { grid-template-columns: 1fr 1fr; }\n    .number-item { border-right: none; padding: 32px 0; border-bottom: 1px solid var(--cbr); }\n    .number-item:last-child { padding-left: 0; }\n    .number-item:nth-child(2), .number-item:nth-child(3) { padding-left: 0; }\n    .number-item__value { font-size: 44px; letter-spacing: -0.5px; }\n    .number-item__unit { font-size: 24px; }\n\n    .experience-tiles { grid-template-columns: 1fr; height: auto; }\n    .exp-tile { height: 260px; }\n\n    .process { padding: 80px 24px; }\n    .process__header { grid-template-columns: 1fr; }\n    .process__steps { grid-template-columns: 1fr 1fr; }\n    .process-step { border-right: none; padding: 32px 0; border-bottom: 1px solid var(--cbr); }\n    .process-step:last-child { border-bottom: none; }\n\n    .testimonials { padding: 80px 24px; }\n    .testimonials__header { flex-direction: column; align-items: flex-start; }\n    .testimonials__meta { text-align: left; }\n    .testimonials__grid { grid-template-columns: 1fr; }\n\n    .occasions { grid-template-columns: 1fr; }\n    .occasion-tile { height: 400px; }\n\n    .faq-section { padding: 80px 24px; }\n    .faq-section__inner { grid-template-columns: 1fr; }\n    .faq-section__left { position: static; }\n\n    .final-cta { padding: 100px 24px; }\n\n    footer { padding: 60px 24px 32px; }\n    .footer__grid { grid-template-columns: 1fr 1fr; gap: 40px; }\n  }\n"

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="site-header" id="header">
      <a className="logo" href="/"><img alt="Watertuin" src="/images/logo.png"/></a>
      <nav className="nav">
      <a className='nav-link' href='/sortiment'>Sortiment</a>
      <a className='nav-link' href='/preise'>Preise</a>
      <a className='nav-link' href='/live-cooking'>Live Cooking</a>
      <a className='nav-link' href='/geburtstag'>Events</a>
      <a className='nav-link' href='/ueber-uns'>Über uns</a>
      <a className='nav-link' href='/kontakt'>Kontakt</a>
      <a className='btn-reserve' href='/kontakt#form'>Tisch reservieren</a>
      </nav>
      <button aria-label="Menü" className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
      </header>
      <div className="mobile-menu" id="mobileMenu">
      <button className="mobile-menu__close" id="menuClose">✕</button>
      <a className='active' href='/'>Home</a>
      <a href='/sortiment'>Sortiment</a>
      <a href='/preise'>Preise</a>
      <a href='/live-cooking'>Live Cooking</a>
      <a href='/geburtstag'>Geburtstag</a>
      <a href='/gruppen-events'>Gruppen &amp; Events</a>
      <a href='/ueber-uns'>Über uns</a>
      <a href='/kontakt'>Kontakt</a>
      <a className='mobile-menu__cta' href='/kontakt#form'>Tisch reservieren</a>
      </div>

      <section className="hero">
      <div className="hero__bg" data-cms-bg="homepage.hero_image"></div>
      <div className="hero__content">
      <p className="hero__eyebrow" data-cms="homepage.hero_eyebrow">All You Can Eat &amp; Drink · Wien</p>
      <h1 className="hero__headline">Mehr von allem.<br/>Für jeden.</h1>
      <div className="hero__actions">
      <a className='hero__cta-primary' href='/kontakt#form'>Jetzt Tisch reservieren</a>
      <a className='hero__cta-secondary' href='/sortiment'>
              Sortiment entdecken
              <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      <div className="hero__badge">
      <p className="hero__badge-text">Täglich frisch zubereitet</p>
      <p className="hero__badge-info" data-cms="homepage.hero_badge_info">Mo/Mi–Fr ab 17:30 · Sa/So ab 11:30</p>
      </div>
      <div className="scroll-indicator">
      <span></span>
      </div>
      </section>

      <section className="statement">
      <div className="statement__inner">
      <p className="statement__tag" data-cms="homepage.concept_tag">Das Konzept</p>
      <h2 className="statement__headline" data-cms="homepage.concept_headline">
            World Kitchen.<br/>
            Alles inklusive.<br/>
      <em>Jeden Abend neu.</em>
      </h2>
      <p className="statement__body" data-cms="homepage.concept_body">
            Watertuin vereint österreichische und asiatische Küche in Wien — Sushi, Wok, Grill, Pasta und mehr,
            täglich frisch. Kein Limit, keine versteckten Kosten, kein Kompromiss.
          </p>
      <a className='statement__link' href='/sortiment'>
            Alle Gerichte entdecken
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </section>

      <div className="photo-tiles">
      <div className="photo-tile">
      <img alt="Asiatische Spezialitäten" loading="lazy" src="/images/697084703_18334830958220022_594618541243141696_n.jpg"/>
      <div className="photo-tile__caption">
      <p className="photo-tile__label">World Kitchen.<br/>Jeden Abend.</p>
      </div>
      </div>
      <div className="photo-tile">
      <img alt="Frische Zutaten" loading="lazy" src="/images/719939721_18337807327220022_5964613539873214482_n.jpg"/>
      <div className="photo-tile__caption">
      <p className="photo-tile__label">Frisch zubereitet.<br/>Täglich.</p>
      </div>
      </div>
      </div>

      <section className="offer-statement">
      <div className="offer-statement__inner">
      <div className="offer-statement__left">
      <h2 className="offer-statement__headline" data-cms="homepage.offer_headline">
      <em>Unbegrenzt</em><br/>
              genießen.<br/>
              Einmal zahlen.
            </h2>
      </div>
      <div className="offer-statement__right">
      <p className="offer-statement__lead">
              Ein Preis für alles — Essen, Trinken, so viel man möchte.
              Kein Zählen, kein Abrechnen, kein Limit. Einfach sitzen, bestellen, genießen.
            </p>
      <div className="offer-statement__pills">
      <span className="pill highlight">All You Can Eat</span>
      <span className="pill highlight">All You Can Drink</span>
      <span className="pill">Sushi &amp; Maki</span>
      <span className="pill">Live Cooking Grill</span>
      <span className="pill">Live Cooking Pasta</span>
      <span className="pill">Wok-Gerichte</span>
      <span className="pill">Österreichisch</span>
      <span className="pill">Chinesisch/Asiatisch</span>
      </div>
      <a className='offer-statement__cta' href='/preise'>Preise ansehen</a>
      </div>
      </div>
      </section>

      <section className="live-section">
      <div className="live-section__photo">
      <img alt="Live Cooking Station" loading="lazy" src="/images/683837578_18333546976220022_6734153120687868386_n.jpg"/>
      </div>
      <div className="live-section__content">
      <p className="live-section__eyebrow" data-cms="homepage.live_eyebrow">Live Cooking</p>
      <h2 className="live-section__headline" data-cms="homepage.live_headline">
            Kochen, das man<br/>sehen muss.
          </h2>
      <p className="live-section__body" data-cms="homepage.live_body">
            Unsere Live-Cooking-Stationen machen das Zubereiten zum Erlebnis.
            Grill und Pasta — alles live, alles frisch, direkt vor Ihren Augen.
          </p>
      <div className="live-section__details">
      <div className="live-detail">
      <svg className="live-detail__icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Grill — Steak, Burger mit Toppings nach Wahl, Meeresfrüchte</span>
      </div>
      <div className="live-detail">
      <svg className="live-detail__icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Pasta — frisch für dich zubereitet</span>
      </div>
      </div>
      <a className='live-section__link' href='/live-cooking'>
            Mehr erfahren
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </section>

      <section className="numbers">
      <div className="numbers__inner">
      <p className="numbers__label">Watertuin in Zahlen</p>
      <div className="numbers__grid">
      <div className="number-item">
      <div className="number-item__value">ab 30,50<span className="number-item__unit">€</span></div>
      <p className="number-item__label" data-cms="homepage.stat1_label">pro Person — All You Can Eat &amp; Drink (Weekday Dinner)</p>
      </div>
      <div className="number-item">
      <div className="number-item__value">500<span className="number-item__unit">+</span></div>
      <p className="number-item__label" data-cms="homepage.stat2_label">Sitzplätze — einer der größten AYCE-Restaurants Wiens</p>
      </div>
      <div className="number-item">
      <div className="number-item__value">6<span className="number-item__unit"></span></div>
      <p className="number-item__label" data-cms="homepage.stat3_label">Separees für bis zu je 30 Personen — ideal für Gruppen &amp; Events</p>
      </div>
      <div className="number-item">
      <div className="number-item__value">1<span className="number-item__unit">×</span></div>
      <p className="number-item__label" data-cms="homepage.stat4_label">Bezahlen — danach unbegrenzt essen &amp; trinken</p>
      </div>
      </div>
      </div>
      </section>

      <section className="drinks-section">
      <div className="drinks-section__bg"></div>
      <div className="drinks-section__content">
      <div className="drinks-section__inner">
      <p className="drinks-section__eyebrow" data-cms="homepage.drinks_eyebrow">All You Can Drink</p>
      <h2 className="drinks-section__headline" data-cms="homepage.drinks_headline">
              Stilvolle Getränke.<br/>
              Alles inklusive.
            </h2>
      <p className="drinks-section__body" data-cms="homepage.drinks_body">
              Bier, Wein, Softdrinks, Slush-Eis, Tee und Kaffee —
              Ihre Getränke sind im Preis enthalten. Jeder Schluck, ohne Limit.
            </p>
      <a className='drinks-section__link' href='/sortiment#getraenke'>
              Getränkekarte entdecken
              <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      </section>

      <div className="experience-tiles">
      <div className="exp-tile">
      <img alt="Sushi" loading="lazy" src="/images/713004012_18337062823220022_4374156640151234116_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Sushi &amp;<br/>Maki</h3>
      <p className="exp-tile__sub">Ausgefallene Variationen · inklusive</p>
      </div>
      <a className='exp-tile__arrow' href='/sortiment'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      <div className="exp-tile">
      <img alt="Live Cooking Grill" loading="lazy" src="/images/683837578_18333546976220022_6734153120687868386_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Live Cooking<br/>Grill</h3>
      <p className="exp-tile__sub">Steak, Burger, Meeresfrüchte · frisch gegrillt</p>
      </div>
      <a className='exp-tile__arrow' href='/live-cooking'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      <div className="exp-tile">
      <img alt="Wok Gerichte" loading="lazy" src="/images/671679572_18331732927220022_1737032185927338218_n.jpg"/>
      <div className="exp-tile__overlay"></div>
      <div className="exp-tile__content">
      <h3 className="exp-tile__title">Wok-<br/>Gerichte</h3>
      <p className="exp-tile__sub">Asiatisch · Chinesisch · täglich frisch</p>
      </div>
      <a className='exp-tile__arrow' href='/sortiment'>
      <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>

      <section className="process">
      <div className="process__inner">
      <div className="process__header">
      <h2 className="process__headline" data-cms="homepage.process_headline">
              So einfach<br/>
              geht Genuss.
            </h2>
      <p className="process__intro">
              SB-Buffet, Live Cooking und Tischservice — so oft Sie möchten,
              alles inklusive, direkt zu Ihnen oder am Buffet geholt.
            </p>
      </div>
      <div className="process__steps">
      <div className="process-step">
      <p className="process-step__num">01.</p>
      <h3 className="process-step__title">Tisch reservieren</h3>
      <p className="process-step__desc">Online in 60 Sekunden. Oder rufen Sie uns an — wir freuen uns auf Sie.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">02.</p>
      <h3 className="process-step__title">Platz nehmen</h3>
      <p className="process-step__desc">Ankommen, wohlfühlen, die Karte in Ruhe studieren.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">03.</p>
      <h3 className="process-step__title">Bestellen</h3>
      <p className="process-step__desc">So viel Sie möchten, so oft Sie möchten. Alles kommt frisch an den Tisch.</p>
      </div>
      <div className="process-step">
      <p className="process-step__num">04.</p>
      <h3 className="process-step__title">Einfach genießen</h3>
      <p className="process-step__desc">Kein Limit, kein Stress, kein Zählen. Einmal zahlen — den Rest erledigen wir.</p>
      </div>
      </div>
      </div>
      </section>

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

      <div className="occasions">
      <div className="occasion-tile">
      <img alt="Geburtstag feiern" loading="lazy" src="/images/686273227_18332842036220022_8080592644259100875_n.jpg"/>
      <div className="occasion-tile__overlay"></div>
      <div className="occasion-tile__content">
      <p className="occasion-tile__eyebrow">Feiern</p>
      <h3 className="occasion-tile__title">Geburtstage,<br/>die man nicht vergisst.</h3>
      <p className="occasion-tile__desc">Reservierter Tisch, persönliche Deko, ein Abend komplett nach Ihren Wünschen.</p>
      <a className='occasion-tile__link' href='/geburtstag'>
              Mehr erfahren
              <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      <div className="occasion-tile">
      <img alt="Gruppenevents" loading="lazy" src="/images/707781232_18336043660220022_6272018094492056676_n.jpg"/>
      <div className="occasion-tile__overlay"></div>
      <div className="occasion-tile__content">
      <p className="occasion-tile__eyebrow">Gruppen &amp; Events</p>
      <h3 className="occasion-tile__title">Großer Hunger,<br/>große Runde.</h3>
      <p className="occasion-tile__desc">Firmenevents, Teamdinners, Familienfeiern — wir kümmern uns um alles.</p>
      <a className='occasion-tile__link' href='/gruppen-events'>
              Anfragen
              <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
      </div>
      </div>
      </div>

      <section className="faq-section">
      <div className="faq-section__inner">
      <div className="faq-section__left">
      <p className="faq-section__eyebrow">FAQ</p>
      <h2 className="faq-section__headline">
              Häufige<br/>Fragen.
            </h2>
      <p className="faq-section__sub">Alles, was Sie wissen müssen — bevor Sie kommen.</p>
      </div>
      <ul className="faq-list">
      <li className="faq-item">
      <button aria-expanded="false" className="faq-question">
                Ist wirklich alles inklusive?
                <span className="faq-icon">
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
      </span>
      </button>
      <div className="faq-answer">
                Ja. Ein Preis — alles drin. Essen und Trinken so viel man möchte: österreichisch, asiatisch, Sushi, Wok, Live Cooking. Getränke inklusive: Bier, Wein, Softdrinks, Slush-Eis, Tee und Kaffee. Keine versteckten Extras, kein Mindestverzehr.
              </div>
      </li>
      <li className="faq-item">
      <button aria-expanded="false" className="faq-question">
                Muss ich reservieren?
                <span className="faq-icon">
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
      </span>
      </button>
      <div className="faq-answer">
                Wir empfehlen eine Reservierung, besonders am Wochenende. Online geht es in unter einer Minute — oder rufen Sie uns an. Walk-ins sind willkommen, solange Plätze frei sind.
              </div>
      </li>
      <li className="faq-item">
      <button aria-expanded="false" className="faq-question">
                Gibt es Optionen für Vegetarier und Veganer?
                <span className="faq-icon">
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
      </span>
      </button>
      <div className="faq-answer">
                Ja, selbstverständlich. Vegetarische Optionen sind in allen Kategorien vorhanden — im Buffet, beim Wok und am Live Cooking. Bitte fragen Sie unser Team vor Ort.
              </div>
      </li>
      <li className="faq-item">
      <button aria-expanded="false" className="faq-question">
                Wie lange darf man sitzen bleiben?
                <span className="faq-icon">
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
      </span>
      </button>
      <div className="faq-answer">
                Für eine entspannte Mahlzeit empfehlen wir ausreichend Zeit einzuplanen. Bei Fragen zur Tischreservierung rufen Sie uns gerne an: +43 1 767 14 97.
              </div>
      </li>
      <li className="faq-item">
      <button aria-expanded="false" className="faq-question">
                Gibt es Kinderpreise?
                <span className="faq-icon">
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
      </span>
      </button>
      <div className="faq-answer">
                Ja. Es gibt eigene Kindergerichte und -getränke. Für Kinder mit Spielgerüst ist für Unterhaltung gesorgt. Genaue Kinderpreise auf Anfrage: +43 1 767 14 97.
              </div>
      </li>
      </ul>
      </div>
      </section>

      <section className="final-cta">
      <p className="final-cta__eyebrow">Bereit für mehr?</p>
      <h2 className="final-cta__headline" data-cms="homepage.cta_headline">
          Ihr Tisch wartet.<br/>
      <em>Heute Abend.</em>
      </h2>
      <div className="final-cta__actions">
      <a className='final-cta__btn-primary' href='/kontakt#form'>Tisch reservieren</a>
      <a className='final-cta__btn-secondary' href='/preise'>Preise ansehen</a>
      </div>
      <p className="final-cta__info">Mo/Mi–Fr 17:30–22:00 · Sa/So/Feiertag 11:30–22:00 · Di geschlossen · Etrichstraße 23, 1110 Wien</p>
      </section>

      <footer>
      <div className="footer__grid">
      <div className="footer__brand">
      <span className="footer__logo"><img alt="Watertuin" src="/images/logo.png" style={{height: "36px", width: "auto", display: "block"}}/></span>
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
      <a href="tel:+431767149" style={{color: "rgba(255,255,255,0.55)"}}>+43 1 767 14 97</a>
      </address>
      </div>
      </div>
      <div className="footer__bottom">
      <span>© 2025 Watertuin Vienna</span>
      <div className="footer__legal">
      <a href='/impressum'>Impressum</a>
      <a href='/datenschutz'>Datenschutz</a>
      <a href="#">AGB</a>
      </div>
      </div>
      </footer>

      <a className='float-cta' href='/kontakt#form' id='floatCta'>
      <span className="float-cta__dot"></span>
        Tisch reservieren
      </a>
      <DesignInteractions />
    </>
  )
}
