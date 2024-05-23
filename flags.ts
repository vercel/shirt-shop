import { unstable_flag as flag } from "@vercel/flags/next";

export const showSummerBannerFlag = flag<boolean>({
  key: "summer-sale",
  async decide() {
    // You can do async things in here like reading edge config or querying
    // your feature flag provider.
    //
    // You can access data passed in by middleware through unstable_getPrecomputationContext
    // const context = unstable_getPrecomputationContext()
    //
    // This is great for creating a single instance of your flag provider
    // and then passing the client down from middleware
    return false;
  },
  origin:
    "https://app.launchdarkly.com/toggle-runner-demo/production/features/summer-sale/targeting",
  description: "Show Summer Holiday Sale Banner, 20% off",
  defaultValue: false,
  options: [
    { value: false, label: "Hide" },
    { value: true, label: "Show" },
  ],
});

export const showFreeDeliveryBannerFlag = flag<boolean>({
  key: "free-delivery",
  decide() {
    return true;
  },
  origin:
    "https://app.launchdarkly.com/toggle-runner-demo/production/features/free-delivery/targeting",
  description: "Show free delivery banner",
  defaultValue: true,
  options: [
    { value: false, label: "Hide" },
    { value: true, label: "Show" },
  ],
});

export const precomputeFlags = [
  showSummerBannerFlag,
  showFreeDeliveryBannerFlag,
] as const;
