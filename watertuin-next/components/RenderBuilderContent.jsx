'use client'
import { Content } from '@builder.io/sdk-react'
import { customComponents } from './builder-registry'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

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
