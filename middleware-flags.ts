import { unstable_declareMiddlewareFlag } from '@vercel/flags/next/middleware';

export const showSummerBannerFlag = unstable_declareMiddlewareFlag<boolean>({
  key: 'summer-sale',
  async decide() {
    return false;
  },
  origin:
    'https://app.launchdarkly.com/toggle-runner-demo/production/features/summer-sale/targeting',
  description: 'Show Summer Holiday Sale Banner, 20% off',
  defaultValue: false,
  options: [
    { value: false, label: 'Hide' },
    { value: true, label: 'Show' },
  ],
});

export const showFreeDeliveryBannerFlag =
  unstable_declareMiddlewareFlag<boolean>({
    key: 'free-delivery',
    async decide() {
      return true;
    },
    origin:
      'https://app.launchdarkly.com/toggle-runner-demo/production/features/free-delivery/targeting',
    description: 'Show free delivery banner',
    defaultValue: true,
    options: [
      { value: false, label: 'Hide' },
      { value: true, label: 'Show' },
    ],
  });
