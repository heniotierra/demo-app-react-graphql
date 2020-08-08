export const environment = process.env.NODE_ENV;

export const Auth0ClientDomain = process.env.AUTH0_CLIENT_DOMAIN ||
  'dev-idluuddf.auth0.com';

export const Auth0ClientID = process.env.AUTH0_CLIENT_ID ||
  'z5wY5DdQIdgBrR60KR6nJvbbwdmD3J7n';

export const HereJsKey = process.env.HERE_JS_API_KEY ||
  'oIFgxdTYc381Qh-w9H2dVPkdcArxt6d9pmf6gAgAfes';

export const baseApiURL = process.env.BASE_API_URL ||
  'http://localhost:8000/';

export const paginationLimit = 12;