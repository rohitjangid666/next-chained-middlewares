import { NextResponse, type NextRequest } from 'next/server';

function middleware1(request: NextRequest) {
  const url = request.url;
  console.log('middleware 1 => ', url);

  return NextResponse.next();
}

function middleware2(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('middleware 2 => ', { pathname });

  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  await middleware1(request);
  await middleware2(request);

  return NextResponse.next();
}

export const config = {
  matches: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
