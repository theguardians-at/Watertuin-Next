import { fetchOneEntry } from '@builder.io/sdk-react'
import { RenderBuilderContent } from '../../components/builder'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

// Builder-Inhalte hoechstens 60s cachen, sonst erscheinen
// im Editor veroeffentlichte Aenderungen nie auf der Live-Site.
export const revalidate = 60

export default async function Page({ params }) {
  const urlPath = '/' + (params?.page?.join('/') ?? '')

  const content = await fetchOneEntry({
    model: 'page',
    apiKey: API_KEY,
    userAttributes: { urlPath },
  })

  return <RenderBuilderContent content={content} model="page" />
}

// Allow all Builder.io pages to be server-rendered on demand
export async function generateStaticParams() {
  return []
}
