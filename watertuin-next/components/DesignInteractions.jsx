'use client'
import { useEffect } from 'react'

// Uebernimmt das Verhalten der Design-Vorlage: Mobile-Menue, FAQ-Akkordeon,
// Tab-Umschaltung, eingeblendeter CTA und die Zaehler-Animation. Bewusst
// DOM-nah gehalten, damit das Markup 1:1 wie im Entwurf bleibt.
export default function DesignInteractions() {
  useEffect(() => {
    const cleanups = []
    const on = (el, ev, fn) => {
      if (!el) return
      el.addEventListener(ev, fn)
      cleanups.push(() => el.removeEventListener(ev, fn))
    }

    // ── Mobile-Menue ────────────────────────────────────────────
    const ham = document.getElementById('hamburger')
    const mMenu = document.getElementById('mobileMenu')
    const mClose = document.getElementById('menuClose')
    on(ham, 'click', () => mMenu && mMenu.classList.toggle('open'))
    on(mClose, 'click', () => mMenu && mMenu.classList.remove('open'))

    // ── FAQ-Akkordeon ───────────────────────────────────────────
    document.querySelectorAll('.faq-question').forEach((btn) => {
      on(btn, 'click', () => {
        const answer = btn.nextElementSibling
        const isOpen = answer && answer.classList.contains('open')

        document.querySelectorAll('.faq-answer').forEach((a) => a.classList.remove('open'))
        document.querySelectorAll('.faq-question').forEach((b) => {
          b.classList.remove('open')
          b.setAttribute('aria-expanded', 'false')
        })

        if (!isOpen && answer) {
          answer.classList.add('open')
          btn.classList.add('open')
          btn.setAttribute('aria-expanded', 'true')
        }
      })
    })

    // ── Tabs ohne Panel (Preise) ────────────────────────────────
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      on(btn, 'click', () => {
        document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
      })
    })

    // ── Tabs mit Panel (Sortiment) ──────────────────────────────
    document.querySelectorAll('.main-tab').forEach((btn) => {
      on(btn, 'click', () => {
        document.querySelectorAll('.main-tab').forEach((b) => b.classList.remove('active'))
        document.querySelectorAll('.panel').forEach((p) => p.classList.remove('active'))
        btn.classList.add('active')
        const panel = document.getElementById('panel-' + btn.dataset.panel)
        if (panel) panel.classList.add('active')
      })
    })

    // ── Eingeblendeter CTA ──────────────────────────────────────
    const floatCta = document.getElementById('floatCta')
    if (floatCta) {
      const onScroll = () =>
        floatCta.classList.toggle('visible', window.scrollY > window.innerHeight * 0.7)
      window.addEventListener('scroll', onScroll, { passive: true })
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
      onScroll()
    }

    // ── Zaehler-Animation ───────────────────────────────────────
    const timers = []
    const animateCounters = () => {
      document.querySelectorAll('.number-item__value[data-count]').forEach((el) => {
        const target = parseInt(el.dataset.count, 10)
        if (Number.isNaN(target)) return
        const unitEl = el.querySelector('.number-item__unit')
        const unit = unitEl ? unitEl.outerHTML : ''
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current = Math.min(current + increment, target)
          el.innerHTML = Math.round(current) + unit
          if (current >= target) clearInterval(timer)
        }, 30)
        timers.push(timer)
      })
    }

    const numbersSection = document.querySelector('.numbers')
    let obs
    if (numbersSection && typeof IntersectionObserver !== 'undefined') {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCounters()
              obs.disconnect()
            }
          })
        },
        { threshold: 0.3 }
      )
      obs.observe(numbersSection)
    }

    return () => {
      cleanups.forEach((fn) => fn())
      timers.forEach((t) => clearInterval(t))
      if (obs) obs.disconnect()
    }
  }, [])

  return null
}
