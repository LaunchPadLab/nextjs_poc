import prisma from '../../../lib/prisma';

export default async function personHandler(
  req,
  res
) {
  const { query } = req
  const { id } = query
  // const person = people.find((p) => p.id === id)
  const person = await prisma.person.findUnique({
    where: {
      id: String(id),
    },
  })

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}