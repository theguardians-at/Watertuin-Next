'use client'
import { Content } from '@builder.io/sdk-react'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

export function RenderBuilderContent({ content, model }) {
  return <Content content={content} model={model} apiKey={API_KEY} />
}
