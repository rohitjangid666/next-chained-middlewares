import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url;
  console.log('middleware 1 => ', url);

  return NextResponse.next();
}

export const config = {
  matches: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
