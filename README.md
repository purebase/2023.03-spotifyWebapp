# 2023.03-spotifyWebapp

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nextjs-mlnw1s)

## Wie arbeiten?

- Spotify login im stackblitz mit temp. secrets
    - ODER https://stackblitz.com/edit/env-variables-demo?file=.stackblitzrc

- Weitere Arbeiten mit einem stündlichen AccessToken (über spotify-seite)

## Wo erscheinen api logs?

- im terminal von stackblitz

## Wie in nextjs api arbeiten?
https://nextjs.org/docs/api-routes/response-helpers
https://blog.logrocket.com/redirects-next-js/

# ES GEHT LOS

## Zusaetzliche Libs in api?

https://www.npmjs.com/package/query-string
https://www.npmjs.com/package/nanoid

## Welcher Spotify Flow?

https://developer.spotify.com/documentation/general/guides/authorization/code-flow/

## Was muss bei spotify getan werden?

In https://developer.spotify.com/dashboard/applications eine Applikation registriert sein.
Für WebApps muss der Parameter 'callback'

---

## Gibt es alternativen zum manuellen Workflow?

- NextAuth verwenden 
  - 2023-03-17 https://github.com/ankitk26/Next-spotify
