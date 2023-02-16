import { withRevalidate } from 'dato-nextjs-utils/hoc'

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey, _payload } = record.model;
  const { slug } = record
  const paths = []

  console.log(_payload)

  switch (apiKey) {
    case 'about':
      paths.push(`/om/${slug}`)
      break;
    case 'project':
      paths.push(`/projekt/${slug}`)
      break;
    case 'news':
      paths.push(`/nyheter/${slug}`)
      break;
    default:
      break;
  }

  revalidate(paths)
})