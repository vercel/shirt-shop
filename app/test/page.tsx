import { reportValue } from "@vercel/flags";
import { ClientComponent } from "./client-component";

export default function Test() {
  reportValue("summer-sale", false);
  return (
    <div>
      <p>test</p>
      <ClientComponent />
    </div>
  );
}
