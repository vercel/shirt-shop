import { reportValue } from "@vercel/flags";

export async function GET() {
  reportValue("summer-sale-false", false);
  reportValue("summer-sale-true", true);
  reportValue("summer-sale-json", {
    text: "hello world",
    nested: { works: true },
  });
  reportValue("summer-sale-numeric", 5);
  reportValue("summer-sale-null", null);
  reportValue("summer-sale-undefined", undefined);
  reportValue("summer-sale-long", "a".repeat(512));
  return Response.json({ text: "hello" });
}
