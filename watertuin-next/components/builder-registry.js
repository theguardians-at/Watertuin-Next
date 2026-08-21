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
import HomeFloatCta from './sections/HomeFloatCta'

// Diese Bausteine erscheinen im Builder-Editor.
// Listen-Felder lassen den Kunden Eintraege hinzufuegen und loeschen.
export const customComponents = [
  {
    component: HomeHero,
    name: "Hero (Startseite)",
    inputs: [
          {
                "name": "ctaSecondary",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Sortiment entdecken"
          },
          {
                "name": "eyebrow",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "All You Can Eat &amp; Drink · Wien"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Mehr von allem.<br/>Für jeden."
          },
          {
                "name": "ctaPrimary",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Jetzt Tisch reservieren"
          },
          {
                "name": "badgeText",
                "type": "html",
                "friendlyName": "Text",
                "defaultValue": "Täglich frisch zubereitet"
          },
          {
                "name": "badgeInfo",
                "type": "html",
                "friendlyName": "Zusatzinfo",
                "defaultValue": "Mo/Mi–Fr ab 17:30 · Sa/So ab 11:30"
          }
    ],
  },
  {
    component: HomeStatement,
    name: "Konzept-Statement (Startseite)",
    inputs: [
          {
                "name": "link",
                "type": "html",
                "friendlyName": "Link-Text",
                "defaultValue": "Alle Gerichte entdecken"
          },
          {
                "name": "tag",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "Das Konzept"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "World Kitchen.<br/>\n      Alles inklusive.<br/>\n<em>Jeden Abend neu.</em>"
          },
          {
                "name": "body",
                "type": "html",
                "friendlyName": "Text",
                "defaultValue": "Watertuin vereint österreichische und asiatische Küche in Wien — Sushi, Wok, Grill, Pasta und mehr,\n      täglich frisch. Kein Limit, keine versteckten Kosten, kein Kompromiss."
          }
    ],
  },
  {
    component: HomePhotoTiles,
    name: "Foto-Kacheln (Startseite)",
    inputs: [
          {
                "name": "photoItems",
                "type": "list",
                "friendlyName": "Fotos",
                "subFields": [
                      {
                            "name": "img",
                            "type": "file",
                            "friendlyName": "Bild",
                            "allowedFileTypes": [
                                  "jpeg",
                                  "jpg",
                                  "png",
                                  "webp",
                                  "avif"
                            ]
                      },
                      {
                            "name": "label",
                            "type": "html",
                            "friendlyName": "Beschriftung"
                      }
                ],
                "defaultValue": [
                      {
                            "img": "/images/697084703_18334830958220022_594618541243141696_n.jpg",
                            "label": "World Kitchen.<br/>Jeden Abend."
                      },
                      {
                            "img": "/images/719939721_18337807327220022_5964613539873214482_n.jpg",
                            "label": "Frisch zubereitet.<br/>Täglich."
                      }
                ]
          }
    ],
  },
  {
    component: HomeOfferStatement,
    name: "Angebot (Startseite)",
    inputs: [
          {
                "name": "pillItems",
                "type": "list",
                "friendlyName": "Schlagworte",
                "subFields": [
                      {
                            "name": "pill",
                            "type": "html",
                            "friendlyName": "Pill"
                      }
                ],
                "defaultValue": [
                      {
                            "pill": "All You Can Eat"
                      },
                      {
                            "pill": "All You Can Drink"
                      },
                      {
                            "pill": "Sushi &amp; Maki"
                      },
                      {
                            "pill": "Live Cooking Grill"
                      },
                      {
                            "pill": "Live Cooking Pasta"
                      },
                      {
                            "pill": "Wok-Gerichte"
                      },
                      {
                            "pill": "Österreichisch"
                      },
                      {
                            "pill": "Chinesisch/Asiatisch"
                      }
                ]
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "<em>Unbegrenzt</em><br/>\n        genießen.<br/>\n        Einmal zahlen."
          },
          {
                "name": "lead",
                "type": "html",
                "friendlyName": "Lead",
                "defaultValue": "Ein Preis für alles — Essen, Trinken, so viel man möchte.\n        Kein Zählen, kein Abrechnen, kein Limit. Einfach sitzen, bestellen, genießen."
          },
          {
                "name": "cta",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Preise ansehen"
          }
    ],
  },
  {
    component: HomeLiveSection,
    name: "Live Cooking (Startseite)",
    inputs: [
          {
                "name": "link",
                "type": "html",
                "friendlyName": "Link-Text",
                "defaultValue": "Mehr erfahren"
          },
          {
                "name": "img",
                "type": "file",
                "friendlyName": "Bild",
                "allowedFileTypes": [
                      "jpeg",
                      "jpg",
                      "png",
                      "webp",
                      "avif"
                ]
          },
          {
                "name": "eyebrow",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "Live Cooking"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Kochen, das man<br/>sehen muss."
          },
          {
                "name": "body",
                "type": "html",
                "friendlyName": "Text",
                "defaultValue": "Unsere Live-Cooking-Stationen machen das Zubereiten zum Erlebnis.\n      Grill und Pasta — alles live, alles frisch, direkt vor Ihren Augen."
          }
    ],
  },
  {
    component: HomeNumbers,
    name: "Kennzahlen (Startseite)",
    inputs: [
          {
                "name": "numberItems",
                "type": "list",
                "friendlyName": "Kennzahlen",
                "subFields": [
                      {
                            "name": "value",
                            "type": "html",
                            "friendlyName": "Wert"
                      },
                      {
                            "name": "unit",
                            "type": "html",
                            "friendlyName": "Einheit"
                      },
                      {
                            "name": "label",
                            "type": "html",
                            "friendlyName": "Beschriftung"
                      }
                ],
                "defaultValue": [
                      {
                            "value": "ab 30,50",
                            "unit": "€",
                            "label": "pro Person — All You Can Eat &amp; Drink (Weekday Dinner)"
                      },
                      {
                            "value": "500",
                            "unit": "+",
                            "label": "Sitzplätze — einer der größten AYCE-Restaurants Wiens"
                      },
                      {
                            "value": "6",
                            "label": "Separees für bis zu je 30 Personen — ideal für Gruppen &amp; Events"
                      },
                      {
                            "value": "1",
                            "unit": "×",
                            "label": "Bezahlen — danach unbegrenzt essen &amp; trinken"
                      }
                ]
          },
          {
                "name": "label",
                "type": "html",
                "friendlyName": "Beschriftung",
                "defaultValue": "Watertuin in Zahlen"
          }
    ],
  },
  {
    component: HomeDrinksSection,
    name: "Getränke (Startseite)",
    inputs: [
          {
                "name": "link",
                "type": "html",
                "friendlyName": "Link-Text",
                "defaultValue": "Getränkekarte entdecken"
          },
          {
                "name": "eyebrow",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "All You Can Drink"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Stilvolle Getränke.<br/>\n        Alles inklusive."
          },
          {
                "name": "body",
                "type": "html",
                "friendlyName": "Text",
                "defaultValue": "Bier, Wein, Softdrinks, Slush-Eis, Tee und Kaffee —\n        Ihre Getränke sind im Preis enthalten. Jeder Schluck, ohne Limit."
          }
    ],
  },
  {
    component: HomeExperienceTiles,
    name: "Erlebnis-Kacheln (Startseite)",
    inputs: [
          {
                "name": "expItems",
                "type": "list",
                "friendlyName": "Erlebnis-Kacheln",
                "subFields": [
                      {
                            "name": "img",
                            "type": "file",
                            "friendlyName": "Bild",
                            "allowedFileTypes": [
                                  "jpeg",
                                  "jpg",
                                  "png",
                                  "webp",
                                  "avif"
                            ]
                      },
                      {
                            "name": "title",
                            "type": "html",
                            "friendlyName": "Titel"
                      },
                      {
                            "name": "sub",
                            "type": "html",
                            "friendlyName": "Unterzeile"
                      }
                ],
                "defaultValue": [
                      {
                            "img": "/images/713004012_18337062823220022_4374156640151234116_n.jpg",
                            "title": "Sushi &amp;<br/>Maki",
                            "sub": "Ausgefallene Variationen · inklusive"
                      },
                      {
                            "img": "/images/683837578_18333546976220022_6734153120687868386_n.jpg",
                            "title": "Live Cooking<br/>Grill",
                            "sub": "Steak, Burger, Meeresfrüchte · frisch gegrillt"
                      },
                      {
                            "img": "/images/671679572_18331732927220022_1737032185927338218_n.jpg",
                            "title": "Wok-<br/>Gerichte",
                            "sub": "Asiatisch · Chinesisch · täglich frisch"
                      }
                ]
          }
    ],
  },
  {
    component: HomeProcess,
    name: "Ablauf (Startseite)",
    inputs: [
          {
                "name": "processStepItems",
                "type": "list",
                "friendlyName": "Ablauf-Schritte",
                "subFields": [
                      {
                            "name": "num",
                            "type": "html",
                            "friendlyName": "Nummer"
                      },
                      {
                            "name": "title",
                            "type": "html",
                            "friendlyName": "Titel"
                      },
                      {
                            "name": "desc",
                            "type": "html",
                            "friendlyName": "Text"
                      }
                ],
                "defaultValue": [
                      {
                            "num": "01.",
                            "title": "Tisch reservieren",
                            "desc": "Online in 60 Sekunden. Oder rufen Sie uns an — wir freuen uns auf Sie."
                      },
                      {
                            "num": "02.",
                            "title": "Platz nehmen",
                            "desc": "Ankommen, wohlfühlen, die Karte in Ruhe studieren."
                      },
                      {
                            "num": "03.",
                            "title": "Bestellen",
                            "desc": "So viel Sie möchten, so oft Sie möchten. Alles kommt frisch an den Tisch."
                      },
                      {
                            "num": "04.",
                            "title": "Einfach genießen",
                            "desc": "Kein Limit, kein Stress, kein Zählen. Einmal zahlen — den Rest erledigen wir."
                      }
                ]
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "So einfach<br/>\n        geht Genuss."
          },
          {
                "name": "intro",
                "type": "html",
                "friendlyName": "Intro",
                "defaultValue": "SB-Buffet, Live Cooking und Tischservice — so oft Sie möchten,\n        alles inklusive, direkt zu Ihnen oder am Buffet geholt."
          }
    ],
  },
  {
    component: HomeTestimonials,
    name: "Gästestimmen (Startseite)",
    inputs: [
          {
                "name": "testimonialItems",
                "type": "list",
                "friendlyName": "Gästestimmen",
                "subFields": [
                      {
                            "name": "stars",
                            "type": "html",
                            "friendlyName": "Stars"
                      },
                      {
                            "name": "quote",
                            "type": "html",
                            "friendlyName": "Zitat"
                      },
                      {
                            "name": "author",
                            "type": "html",
                            "friendlyName": "Autor"
                      }
                ],
                "defaultValue": [
                      {
                            "stars": "★★★★★",
                            "quote": "Kundenbewertung folgt.",
                            "author": "Platzhalter"
                      },
                      {
                            "stars": "★★★★★",
                            "quote": "Kundenbewertung folgt.",
                            "author": "Platzhalter"
                      },
                      {
                            "stars": "★★★★★",
                            "quote": "Kundenbewertung folgt.",
                            "author": "Platzhalter"
                      }
                ]
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Was unsere<br/>\n        Gäste sagen."
          },
          {
                "name": "rating",
                "type": "html",
                "friendlyName": "Rating",
                "defaultValue": "—"
          },
          {
                "name": "platform",
                "type": "html",
                "friendlyName": "Platform",
                "defaultValue": "Kundenbewertungen folgen"
          }
    ],
  },
  {
    component: HomeOccasions,
    name: "Anlässe (Startseite)",
    inputs: [
          {
                "name": "occasionItems",
                "type": "list",
                "friendlyName": "Anlässe",
                "subFields": [
                      {
                            "name": "link",
                            "type": "html",
                            "friendlyName": "Link-Text"
                      },
                      {
                            "name": "img",
                            "type": "file",
                            "friendlyName": "Bild",
                            "allowedFileTypes": [
                                  "jpeg",
                                  "jpg",
                                  "png",
                                  "webp",
                                  "avif"
                            ]
                      },
                      {
                            "name": "eyebrow",
                            "type": "html",
                            "friendlyName": "Kleiner Text darüber"
                      },
                      {
                            "name": "title",
                            "type": "html",
                            "friendlyName": "Titel"
                      },
                      {
                            "name": "desc",
                            "type": "html",
                            "friendlyName": "Text"
                      }
                ],
                "defaultValue": [
                      {
                            "link": "Mehr erfahren",
                            "img": "/images/686273227_18332842036220022_8080592644259100875_n.jpg",
                            "eyebrow": "Feiern",
                            "title": "Geburtstage,<br/>die man nicht vergisst.",
                            "desc": "Reservierter Tisch, persönliche Deko, ein Abend komplett nach Ihren Wünschen."
                      },
                      {
                            "link": "Anfragen",
                            "img": "/images/707781232_18336043660220022_6272018094492056676_n.jpg",
                            "eyebrow": "Gruppen &amp; Events",
                            "title": "Großer Hunger,<br/>große Runde.",
                            "desc": "Firmenevents, Teamdinners, Familienfeiern — wir kümmern uns um alles."
                      }
                ]
          }
    ],
  },
  {
    component: HomeFaqSection,
    name: "FAQ (Startseite)",
    inputs: [
          {
                "name": "faqItems",
                "type": "list",
                "friendlyName": "Fragen & Antworten",
                "subFields": [
                      {
                            "name": "faqQuestion",
                            "type": "html",
                            "friendlyName": "Frage"
                      },
                      {
                            "name": "faqAnswer",
                            "type": "html",
                            "friendlyName": "Antwort"
                      }
                ],
                "defaultValue": [
                      {
                            "faqQuestion": "Ist wirklich alles inklusive?",
                            "faqAnswer": "Ja. Ein Preis — alles drin. Essen und Trinken so viel man möchte: österreichisch, asiatisch, Sushi, Wok, Live Cooking. Getränke inklusive: Bier, Wein, Softdrinks, Slush-Eis, Tee und Kaffee. Keine versteckten Extras, kein Mindestverzehr."
                      },
                      {
                            "faqQuestion": "Muss ich reservieren?",
                            "faqAnswer": "Wir empfehlen eine Reservierung, besonders am Wochenende. Online geht es in unter einer Minute — oder rufen Sie uns an. Walk-ins sind willkommen, solange Plätze frei sind."
                      },
                      {
                            "faqQuestion": "Gibt es Optionen für Vegetarier und Veganer?",
                            "faqAnswer": "Ja, selbstverständlich. Vegetarische Optionen sind in allen Kategorien vorhanden — im Buffet, beim Wok und am Live Cooking. Bitte fragen Sie unser Team vor Ort."
                      },
                      {
                            "faqQuestion": "Wie lange darf man sitzen bleiben?",
                            "faqAnswer": "Für eine entspannte Mahlzeit empfehlen wir ausreichend Zeit einzuplanen. Bei Fragen zur Tischreservierung rufen Sie uns gerne an: +43 1 767 14 97."
                      },
                      {
                            "faqQuestion": "Gibt es Kinderpreise?",
                            "faqAnswer": "Ja. Es gibt eigene Kindergerichte und -getränke. Für Kinder mit Spielgerüst ist für Unterhaltung gesorgt. Genaue Kinderpreise auf Anfrage: +43 1 767 14 97."
                      }
                ]
          },
          {
                "name": "eyebrow",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "FAQ"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Häufige<br/>Fragen."
          },
          {
                "name": "sub",
                "type": "html",
                "friendlyName": "Unterzeile",
                "defaultValue": "Alles, was Sie wissen müssen — bevor Sie kommen."
          }
    ],
  },
  {
    component: HomeFinalCta,
    name: "Abschluss-CTA (Startseite)",
    inputs: [
          {
                "name": "eyebrow",
                "type": "html",
                "friendlyName": "Kleiner Text darüber",
                "defaultValue": "Bereit für mehr?"
          },
          {
                "name": "headline",
                "type": "html",
                "friendlyName": "Überschrift",
                "defaultValue": "Ihr Tisch wartet.<br/>\n<em>Heute Abend.</em>"
          },
          {
                "name": "btnPrimary",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Tisch reservieren"
          },
          {
                "name": "btnSecondary",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Preise ansehen"
          },
          {
                "name": "info",
                "type": "html",
                "friendlyName": "Zusatzinfo",
                "defaultValue": "Mo/Mi–Fr 17:30–22:00 · Sa/So/Feiertag 11:30–22:00 · Di geschlossen · Etrichstraße 23, 1110 Wien"
          }
    ],
  },
  {
    component: HomeFloatCta,
    name: "Float Cta (Startseite)",
    inputs: [
          {
                "name": "floatCta",
                "type": "html",
                "friendlyName": "Button-Text",
                "defaultValue": "Tisch reservieren"
          }
    ],
  },
]
