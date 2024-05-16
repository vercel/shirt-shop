import { reportValue } from "@vercel/flags";

export default function Test() {
  reportValue("summer-sale", false);
  return <p>test</p>;
}
