import prisma from "../../../lib/prisma";
export default async function personHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "only POST requests allowed" });
  }
  const { name, height, mass, hair_color, skin_color, eye_color, gender } =
    req.body;

  const data = {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  };

  try {
    const person = await prisma.person.create({ data });
    return res.status(200).json(person);
  } catch (e) {
    if (e) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    res.status(500).json(e.message);
  }
}
