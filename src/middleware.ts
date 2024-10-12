import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

function withMiddleware1(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const url = request.url;
    console.log('middleware 1 => ', url);

    return middleware(request, event);
  };
}

function middlewareExtra(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('middleware extra => ', { pathname });

  return NextResponse.next();
}

function withMiddleware2(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    console.log('middleware 2 => ', { pathname });

    return middleware(request, event);
  };
}

export default withMiddleware1(withMiddleware2(middlewareExtra));

export const config = {
  matches: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
