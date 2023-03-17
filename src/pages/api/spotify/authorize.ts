import type { NextApiRequest, NextApiResponse } from 'next';
import querystring from "query-string";
import {localEnv} from "../../../../.localEnv";
import {nanoid} from "nanoid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('/api/spotify/authorize PASSED');
  console.dir(req.query);

  const state = nanoid(16);
  const scope = 'user-read-private user-read-email';

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: localEnv.secrets_spotify.client_id,
        scope: scope,
        redirect_uri: localEnv.host,
        state: state,
      })
  );
}
