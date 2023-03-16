export default async function personHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "only POST requests allowed" });
  }
  const { person_name, height, mass, hair_color, skin_color, eye_color, gender } =
    req.body;

    console.log(req.body)

  try {
    const result = await makeRequest(
    person_name,
      height, 
      mass, 
      hair_color, 
      skin_color, 
      eye_color, 
      gender
    );
    if ("error" in result) {
      res.status(500).send(result);
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "failed to fetch data" });
  }
}

async function makeRequest(
    person_name,
    height, 
    mass, 
    hair_color, 
    skin_color, 
    eye_color, 
    gender
) {
  const data = {
    person_name,
      height, 
      mass, 
      hair_color, 
      skin_color, 
      eye_color, 
      gender
  };

//   If we wanted to make a request to an external API, we could do it like this:

//   const JSONdata = JSON.stringify(data);
//   const endpoint = `${process.env.API_URL}/api/v1/people`;

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     //   Authorization: `Bearer ${process.env.API_KEY}`,
//     },
//     body: JSONdata,
//   };

//   const response = await fetch(endpoint, options);
  const response = data

  const result = await response
  return result;
}