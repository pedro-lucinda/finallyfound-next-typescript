import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.query.id);
  const user = [
    { id: 1, name: "pedro" },
    { id: 1, name: "pedro" },
    { id: 1, name: "pedro" },
  ];

  return res.json(user);
}
