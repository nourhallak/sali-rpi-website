import { URL } from "@/utils/url";

export default async function PostScan() {
  const res = await fetch(`${URL}/screen/return/scan`, {
    method: "POST",
    body: "Scan book",
  });
  return;
}
