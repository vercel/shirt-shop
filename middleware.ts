import { type NextRequest, NextResponse } from "next/server";
import { precompute } from "flags/next";
import { precomputeFlags } from "@/flags";

export const config = { matcher: ["/"] };

export async function middleware(request: NextRequest) {
  const code = await precompute(precomputeFlags);

  // rewrites the request to the variant for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url
  );

  return NextResponse.rewrite(nextUrl, { request });
}
