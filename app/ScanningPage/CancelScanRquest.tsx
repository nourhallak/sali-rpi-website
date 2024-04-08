import { URL } from "@/utils/url";

export default async function CancelScan() {
  const res = await fetch(`${URL}/screen/return/cancelscan`, {
    method: "POST",
    body: "Cancel scan",
  });
  return;
}
