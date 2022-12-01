import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // const userEmail = req.body.email;
    // console.log(req.body);
    res.status(201).json({ message: "Registered" });
  }
};

export default handler;
