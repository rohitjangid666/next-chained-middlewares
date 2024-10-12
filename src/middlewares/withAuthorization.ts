import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from 'next/server';

import { MiddlewareFactory } from './types';

export const withAuthorization: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (['/admin', '/profile']?.some(path => pathname.startsWith(path))) {
      const token = await (() => null)();

      if (!token) {
        const url = new URL(`/api/auth/sign-in`, request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        return NextResponse.redirect(url);
      }
      // role based
      // if (token.role !== 'admin') {
      //   const url = new URL(`/403`, request.url);
      //   return NextResponse.rewrite(url);
      // }
    }
    return next(request, _next);
  };
};
