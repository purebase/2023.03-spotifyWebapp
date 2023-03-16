// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { secrets_spotify } from '../../../secrets';

type Data = {
  name: string;
};

const name = secrets_spotify.name;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('/api/hello PASSED');

  res.status(200).json({ name: name });
}
