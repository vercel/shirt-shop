import { type NextRequest, NextResponse } from 'next/server';
import {
  unstable_decide,
  unstable_serialize,
} from '@vercel/flags/next/middleware';
import * as flags from '@/middleware-flags';

export const config = { matcher: ['/'] };

export async function middleware(request: NextRequest) {
  const context = {
    /* pass a LaunchDarkly client or whatever your flag will need */
  };
  // @ts-expect-error Next.js versions are misaligned apparently, so "request" doesn't match
  const flagSet = await unstable_decide(request, flags, context);
  const code = await unstable_serialize(flagSet, flags);

  // rewrites the request to the variant for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  );
  return NextResponse.rewrite(nextUrl, { request });
}
