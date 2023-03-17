import useSWR from 'swr'
import PersonComponent from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  console.log(process.env.DATABASE_URL)

  return (
    <ul>
      {data.map((p) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
  )
}