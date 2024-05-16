"use client";
import { FlagValues } from "@vercel/flags/react";
import { track } from "@vercel/analytics";

export function ClientComponent() {
  return (
    <>
      <FlagValues values={{ "summer-sale": true }} />
      <button
        type="button"
        onClick={() => {
          track("My button clicked", {}, { flagKeys: ["summer-sale"] });
        }}
      >
        click me
      </button>
    </>
  );
}
