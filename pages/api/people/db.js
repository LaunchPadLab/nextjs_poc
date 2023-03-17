export default async function handler(
  _req,
  res
) {
    const dbURL = process.env.DATABASE_URL
  return res.status(200).json({ dbURL })
}