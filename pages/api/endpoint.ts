import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return res.status(200).json(req.body);
  }
  return res.status(405).json({ error: "Method Not Allowed" });
}
