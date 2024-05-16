import { track } from "@vercel/analytics/server";
import { reportValue } from "@vercel/flags";
export const dynamic = "force-dynamic";

export async function GET() {
  reportValue("summer-sale-false", false);
  track("My Event", {}, { flagKeys: ["summer-sale"] });
  return Response.json({ ok: true });
}
