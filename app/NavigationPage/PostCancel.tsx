import { URL } from "@/utils/url";

export default async function PostCancel() {
  const res = await fetch(`${URL}/screen/cancel`, {
    method: "POST",
    body: "Cancel Operation",
  });
  console.log("Cancel Operation");
  return;
}
