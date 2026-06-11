type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params

  return (
    <div style={{ padding: 40 }}>
      <h1>Service: {slug}</h1>
      <p>{locale}</p>
    </div>
  )
}
