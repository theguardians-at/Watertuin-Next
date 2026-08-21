import HomeHero from './sections/HomeHero'
import HomeStatement from './sections/HomeStatement'
import HomePhotoTiles from './sections/HomePhotoTiles'
import HomeOfferStatement from './sections/HomeOfferStatement'
import HomeLiveSection from './sections/HomeLiveSection'
import HomeNumbers from './sections/HomeNumbers'
import HomeDrinksSection from './sections/HomeDrinksSection'
import HomeExperienceTiles from './sections/HomeExperienceTiles'
import HomeProcess from './sections/HomeProcess'
import HomeTestimonials from './sections/HomeTestimonials'
import HomeOccasions from './sections/HomeOccasions'
import HomeFaqSection from './sections/HomeFaqSection'
import HomeFinalCta from './sections/HomeFinalCta'
import HomeFloatCtaDot from './sections/HomeFloatCtaDot'

// Diese Bausteine erscheinen im Builder-Editor.
export const customComponents = [
  {
    component: HomeHero,
    name: "Hero (Startseite)",
    inputs: [
          {
                "name": "heroImage",
                "type": "file",
                "friendlyName": "Hero image",
                "allowedFileTypes": [
                      "jpeg",
                      "jpg",
                      "png",
                      "webp",
                      "avif"
                ]
          },
          {
                "name": "heroEyebrow",
                "type": "html",
                "friendlyName": "Hero eyebrow",
                "defaultValue": "All You Can Eat &amp; Drink · Wien"
          },
          {
                "name": "heroBadgeInfo",
                "type": "html",
                "friendlyName": "Hero badge info",
                "defaultValue": "Mo/Mi–Fr ab 17:30 · Sa/So ab 11:30"
          }
    ],
  },
  {
    component: HomeStatement,
    name: "Konzept-Statement (Startseite)",
    inputs: [
          {
                "name": "conceptTag",
                "type": "html",
                "friendlyName": "Concept tag",
                "defaultValue": "Das Konzept"
          },
          {
                "name": "conceptHeadline",
                "type": "html",
                "friendlyName": "Concept headline",
                "defaultValue": "World Kitchen.<br/>\n      Alles inklusive.<br/>\n<em>Jeden Abend neu.</em>"
          },
          {
                "name": "conceptBody",
                "type": "html",
                "friendlyName": "Concept body",
                "defaultValue": "Watertuin vereint österreichische und asiatische Küche in Wien — Sushi, Wok, Grill, Pasta und mehr,\n      täglich frisch. Kein Limit, keine versteckten Kosten, kein Kompromiss."
          }
    ],
  },
  {
    component: HomePhotoTiles,
    name: "Foto-Kacheln (Startseite)",
    inputs: [],
  },
  {
    component: HomeOfferStatement,
    name: "Angebot (Startseite)",
    inputs: [
          {
                "name": "offerHeadline",
                "type": "html",
                "friendlyName": "Offer headline",
                "defaultValue": "<em>Unbegrenzt</em><br/>\n        genießen.<br/>\n        Einmal zahlen."
          }
    ],
  },
  {
    component: HomeLiveSection,
    name: "Live Cooking (Startseite)",
    inputs: [
          {
                "name": "liveEyebrow",
                "type": "html",
                "friendlyName": "Live eyebrow",
                "defaultValue": "Live Cooking"
          },
          {
                "name": "liveHeadline",
                "type": "html",
                "friendlyName": "Live headline",
                "defaultValue": "Kochen, das man<br/>sehen muss."
          },
          {
                "name": "liveBody",
                "type": "html",
                "friendlyName": "Live body",
                "defaultValue": "Unsere Live-Cooking-Stationen machen das Zubereiten zum Erlebnis.\n      Grill und Pasta — alles live, alles frisch, direkt vor Ihren Augen."
          }
    ],
  },
  {
    component: HomeNumbers,
    name: "Kennzahlen (Startseite)",
    inputs: [
          {
                "name": "stat1Label",
                "type": "html",
                "friendlyName": "Stat1 label",
                "defaultValue": "pro Person — All You Can Eat &amp; Drink (Weekday Dinner)"
          },
          {
                "name": "stat2Label",
                "type": "html",
                "friendlyName": "Stat2 label",
                "defaultValue": "Sitzplätze — einer der größten AYCE-Restaurants Wiens"
          },
          {
                "name": "stat3Label",
                "type": "html",
                "friendlyName": "Stat3 label",
                "defaultValue": "Separees für bis zu je 30 Personen — ideal für Gruppen &amp; Events"
          },
          {
                "name": "stat4Label",
                "type": "html",
                "friendlyName": "Stat4 label",
                "defaultValue": "Bezahlen — danach unbegrenzt essen &amp; trinken"
          }
    ],
  },
  {
    component: HomeDrinksSection,
    name: "Getränke (Startseite)",
    inputs: [
          {
                "name": "drinksEyebrow",
                "type": "html",
                "friendlyName": "Drinks eyebrow",
                "defaultValue": "All You Can Drink"
          },
          {
                "name": "drinksHeadline",
                "type": "html",
                "friendlyName": "Drinks headline",
                "defaultValue": "Stilvolle Getränke.<br/>\n        Alles inklusive."
          },
          {
                "name": "drinksBody",
                "type": "html",
                "friendlyName": "Drinks body",
                "defaultValue": "Bier, Wein, Softdrinks, Slush-Eis, Tee und Kaffee —\n        Ihre Getränke sind im Preis enthalten. Jeder Schluck, ohne Limit."
          }
    ],
  },
  {
    component: HomeExperienceTiles,
    name: "Erlebnis-Kacheln (Startseite)",
    inputs: [],
  },
  {
    component: HomeProcess,
    name: "Ablauf (Startseite)",
    inputs: [
          {
                "name": "processHeadline",
                "type": "html",
                "friendlyName": "Process headline",
                "defaultValue": "So einfach<br/>\n        geht Genuss."
          }
    ],
  },
  {
    component: HomeTestimonials,
    name: "Gästestimmen (Startseite)",
    inputs: [],
  },
  {
    component: HomeOccasions,
    name: "Anlässe (Startseite)",
    inputs: [],
  },
  {
    component: HomeFaqSection,
    name: "FAQ (Startseite)",
    inputs: [],
  },
  {
    component: HomeFinalCta,
    name: "Abschluss-CTA (Startseite)",
    inputs: [
          {
                "name": "ctaHeadline",
                "type": "html",
                "friendlyName": "Cta headline",
                "defaultValue": "Ihr Tisch wartet.<br/>\n<em>Heute Abend.</em>"
          }
    ],
  },
  {
    component: HomeFloatCtaDot,
    name: "Schwebender CTA (Startseite)",
    inputs: [],
  },
]
