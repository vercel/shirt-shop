import { type ApiData, verifyAccess } from '@vercel/flags';
// import { unstable_getServerFlagsProviderData } from '@vercel/flags/next/server';
import { unstable_getMiddlewareFlagsProviderData } from '@vercel/flags/next/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import * as middlewareDefinitions from '../../../../middleware-flags';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });

  const middlewareFlags = unstable_getMiddlewareFlagsProviderData(
    middlewareDefinitions,
  );
  // const serverFlags = unstable_getServerFlagsProviderData(serverDefinitions);

  return NextResponse.json<ApiData>({
    definitions: {
      ...middlewareFlags.definitions,
      // ...serverFlags.definitions,
    },
    // hints: [...middlewareFlags.hints, ...serverFlags.hints],
  });
}
