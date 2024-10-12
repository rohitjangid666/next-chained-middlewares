import { NextResponse, type NextMiddleware } from 'next/server';

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export function chain(
  higherOrderFunctions: MiddlewareFactory[],
  index = 0
): NextMiddleware {
  const current = higherOrderFunctions[index];

  if (current) {
    const next = chain(higherOrderFunctions, index + 1);

    return current(next);
  }

  return () => NextResponse.next();
}
