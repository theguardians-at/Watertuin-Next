import { fetchOneEntry, fetchEntries } from '@builder.io/sdk-react'
import { notFound } from 'next/navigation'
import { RenderBuilderContent } from '../../components/RenderBuilderContent'

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY

// Builder-Inhalte hoechstens 60s cachen, sonst erscheinen im Editor
// veroeffentlichte Aenderungen nie auf der Live-Site.
export const revalidate = 60

export default async function Page({ params }) {
  const { page } = await params
  const urlPath = '/' + (page?.join('/') ?? '')

  const content = await fetchOneEntry({
    model: 'page',
    apiKey: API_KEY,
    userAttributes: { urlPath },
  })

  if (!content) notFound()

  return <RenderBuilderContent content={content} />
}

// Alle in Builder angelegten Seiten zur Build-Zeit vorrendern. Ein leeres
// Array reicht nicht: der Netlify-Runtime kennt dann keinen einzigen Pfad
// und liefert fuer jede Unterseite 404 aus.
export async function generateStaticParams() {
  const entries = await fetchEntries({
    model: 'page',
    apiKey: API_KEY,
    fields: 'data.url',
    options: { noTargeting: true },
    limit: 100,
  })

  return entries
    .map((e) => e?.data?.url)
    .filter((u) => typeof u === 'string' && u.startsWith('/'))
    .map((u) => ({ page: u === '/' ? [] : u.slice(1).split('/') }))
}
