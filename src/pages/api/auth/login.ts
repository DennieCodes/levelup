import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // const userEmail = req.body.email;
    // console.log('Req.body', req.body);
    res.status(201).json({ message: "Logged In" });
  }
};

export default handler;
