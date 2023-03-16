const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const person1 = await prisma.person.upsert({
    where: { name: 'Luke Skywalker' },
    update: {},
    create: {
        name: 'Luke Skywalker',
        height: '172',
        mass: 77,
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        gender: 'male',
    },
  })

  const person2 = await prisma.person.upsert({
    where: { name: 'Leia Organa' },
    update: {},
    create: {
        name: 'Leia Organa',
        height: '150',
        mass: 49,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        gender: 'female',
    },
  })
  console.log({ person1, person2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })