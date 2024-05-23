"use client";

import { Analytics } from "@vercel/analytics/next";
import { FlagsReporter } from "@vercel/flags/react";

export function VercelAnalytics() {
  return (
    <>
      <Analytics />
      <FlagsReporter
        keys={["summer-sale", "free-delivery", "product-detail-reviews"]}
      />
    </>
  );
}
