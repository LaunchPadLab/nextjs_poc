import PersonComponent from '../components/Person';
import prisma from '../lib/prisma';

export function Index({people}) {
  return (
    <ul>
      {people.map((p) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../people')
  // const posts = await res.json()

  // By returning { props: { people } }, the Blog component
  // will receive `people` as a prop at build time
  try {
    const people = await prisma.person.findMany();
    return {
      props: { people },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error)
  }
 
};

export default Index;