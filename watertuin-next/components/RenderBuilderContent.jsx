'use client'
import { Content } from '@builder.io/sdk-react'
import { customComponents } from './builder-registry'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

// Die Seiten bestehen aus Builder-eigenen Bloecken, damit im Editor jedes
// Element einzeln anklickbar ist. Das Design haengt an den CSS-Klassen,
// die jeder Block traegt; die Regeln stehen in app/sections.css.
export function RenderBuilderContent({ content }) {
  return (
    <Content
      content={content}
      model="page"
      apiKey={API_KEY}
      customComponents={customComponents}
    />
  )
}
