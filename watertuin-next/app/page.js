import { fetchOneEntry } from '@builder.io/sdk-react'
import { RenderBuilderContent } from '../components/builder'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

export default async function HomePage() {
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: API_KEY,
    userAttributes: { urlPath: '/' },
  })

  return <RenderBuilderContent content={content} model="page" />
}
