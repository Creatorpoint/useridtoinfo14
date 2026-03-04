export default async function handler(req, res) {

  const { userid } = req.query;

  if(!userid){
    return res.status(400).json({ error: "UserID required" });
  }

  try{
    const response = await fetch(
      `https://tg-2-num-api-org.vercel.app/api/search?userid=${userid}`
    );

    const data = await response.json();

    return res.status(200).json(data);

  }catch(error){
    return res.status(500).json({ error: "API Failed" });
  }
}
