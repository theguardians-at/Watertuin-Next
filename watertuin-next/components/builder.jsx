'use client'
import { Content, isPreviewing } from '@builder.io/sdk-react'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

export function RenderBuilderContent({ content, model }) {
  if (!content && !isPreviewing()) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '60vh', flexDirection: 'column', gap: 16, color: '#4D3F37',
      }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'Satoshi, sans-serif' }}>404</h1>
        <p>Diese Seite wurde nicht gefunden.</p>
        <a href="/" style={{ color: '#2D6A4F', textDecoration: 'underline', fontWeight: 600 }}>
          Zurück zur Startseite
        </a>
      </div>
    )
  }

  return (
    <Content
      content={content}
      model={model}
      apiKey={API_KEY}
    />
  )
}
