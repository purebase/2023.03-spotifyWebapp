import type { NextApiRequest, NextApiResponse } from 'next';
import querystring from "query-string";
import {localEnv} from "../../../../.localEnv";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('/api/spotify/callback PASSED');
    console.dir(req.query);

    // https://my-domain.com/callback?code=NApCCg..BkWtQ&state=34fFs29kd09
    // https://my-domain.com/callback?error=access_denied&state=34fFs29kd09

    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state === null) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: localEnv.host,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (
                    new Buffer(localEnv.secrets_spotify.client_id + ':' + localEnv.secrets_spotify.secret_id)
                        .toString('base64'))
            },
            json: true
        };
         // TODO How to send this to the spotify server? redirect?
    }


    // res.status(200).json({ name: 'Max Mustermann' });
}
