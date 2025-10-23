/\*

[ LINE App / SDK ]
↓ (user signs in)
[Frontend: authClient.signIn.social()]
↓
get LINE id_token / access_token
↓
send to your NestJS backend (e.g. /auth/line)
↓
[NestJS verifies LINE token]
↓
creates local user (if new)
↓
issues app's JWT (access + refresh token)

\*/
