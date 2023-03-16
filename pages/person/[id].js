import prisma from "../../lib/prisma";

export function PersonPage({person}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {person && (
            <>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.hair_color}</td>
              <td>{person.skin_color}</td>
              <td>{person.eye_color}</td>
              <td>{person.gender}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  )
  
}

export const getServerSideProps = async ({ params }) => {
  const person = await prisma.person.findUnique({
    where: {
      id: String(params?.id),
    },
  });
  return {
    props: {person},
  };

};

export default PersonPage;