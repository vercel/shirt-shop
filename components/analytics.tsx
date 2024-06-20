"use client";

import { Analytics } from "@vercel/analytics/next";

export function VercelAnalytics() {
  return (
    <>
      <Analytics scriptSrc="https://analytics-script-git-dferber-fla-1138-get-rid-of-flagsre-f27b49.vercel.sh/v1/script.js" />
    </>
  );
}
