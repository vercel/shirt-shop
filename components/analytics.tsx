"use client";

// import { Analytics } from "@vercel/analytics/next";
import { FlagsReporter } from "flags/react";

export function VercelAnalytics() {
  return (
    <>
      {/* <Analytics /> */}
      <script defer src="http://localhost:8081/v1/script.js"></script>
      <FlagsReporter
        keys={["summer-sale", "free-delivery", "product-detail-reviews"]}
      />
    </>
  );
}
