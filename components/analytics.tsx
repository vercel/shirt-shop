"use client";

import { Analytics } from "@vercel/analytics/next";

export function VercelAnalytics() {
  return (
    <>
      <Analytics />
      {/* <script defer src="http://localhost:8081/v1/script.js"></script> */}
    </>
  );
}
