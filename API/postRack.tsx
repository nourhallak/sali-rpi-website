import { URL } from "@/utils/url";
import { json } from "stream/consumers";

export default async function PostRack(distance: number) {
  const res = await fetch(`${URL}/screen/movecamera`, {
    method: "POST",
    body: JSON.stringify({ data: distance }),
  });
  return;
}
