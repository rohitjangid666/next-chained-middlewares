import { chain } from './middlewares/chain';
import { withMiddleware1 } from './middlewares/middleware1';
import { withMiddleware2 } from './middlewares/middleware2';

const middlewares = [withMiddleware1, withMiddleware2];

export default chain(middlewares);

export const config = {
  matches: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
