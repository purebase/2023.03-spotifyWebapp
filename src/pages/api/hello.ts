// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('/api/hello PASSED');
  console.dir(req.query);

  res.status(200).json({ name: 'Max Mustermann' });
}
