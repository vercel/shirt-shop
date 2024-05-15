'use client';

import { Analytics } from '@vercel/analytics/next';
import { unstable_getFlagsProps } from '@vercel/flags/analytics';

export function VercelAnalytics() {
  return (
    <Analytics
      setDefaultProps={() =>
        unstable_getFlagsProps({
          initialKeys: ['summer-sale', 'free-delivery'],
        })
      }
    />
  );
}
