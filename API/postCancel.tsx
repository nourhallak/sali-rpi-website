import { URL } from "@/utils/url";

export default async function PostCancel() {
  const res = await fetch(`${URL}/screen/gohome`, {
    method: "POST",
    body: "Cancel Operation",
  });
  return;
}
