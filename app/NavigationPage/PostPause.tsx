import { URL } from "@/utils/url";

export default async function PostPause() {
  const res = await fetch(`${URL}/screen/pause`, {
    method: "POST",
    body: "Pause",
  });
  return;
}
