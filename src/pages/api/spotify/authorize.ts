import type { NextApiRequest, NextApiResponse } from 'next';
import { secrets_spotify } from '../../../../secrets';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('/api/spotify/authorize PASSED');

  const state = 'generateRandomString(16)';
  const scope = 'user-read-private user-read-email';

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: secrets_spotify.client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );

  res.status(200).json({ name: name });
}
