import { getToken } from 'next-auth/jwt';

import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from 'next/server';

import { MiddlewareFactory } from './types';

export const withAuthorization: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (['/profile']?.some(path => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXT_AUTH_SECRET,
      });
      if (!token) {
        // const url = new URL(`/api/auth/sign-in`, request.url);
        const url = new URL(`/auth/sign-in`, request.url);
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
