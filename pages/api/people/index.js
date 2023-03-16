import prisma from '../../../lib/prisma';

export default async function handler(
  _req,
  res
) {
  // confirm
  return res.status(200).json(await prisma.person.findMany())
}