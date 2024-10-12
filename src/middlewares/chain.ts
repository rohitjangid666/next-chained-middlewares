import { type NextMiddleware, NextResponse } from 'next/server';
import type { MiddlewareFactory } from './types';

export function chain(
  higherOrderFunctions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = higherOrderFunctions[index];

  if (current) {
    const next = chain(higherOrderFunctions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}
