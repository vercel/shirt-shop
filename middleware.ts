import { type NextRequest, NextResponse } from "next/server";
import {
  unstable_precompute as precompute,
  unstable_serialize as serialize,
} from "@vercel/flags/next";
import { precomputeFlags } from "@/flags";

export const config = { matcher: ["/"] };

export async function middleware(request: NextRequest) {
  const context = {
    /* pass a LaunchDarkly client or whatever your flag will need */
  };

  const values = await precompute(precomputeFlags, context);
  const code = await serialize(precomputeFlags, values);

  // rewrites the request to the variant for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url
  );

  return NextResponse.rewrite(nextUrl, { request });
}
