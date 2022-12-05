// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const connectionString = `${process.env.monggodb_username}`;

type Data = {
  name: string
  connectionString : string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' ,connectionString : connectionString })
}
