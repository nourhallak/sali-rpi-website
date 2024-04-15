import { URL } from "@/utils/url";

export default async function PostRack(distance: number) {
  const res = await fetch(`${URL}/screen/movecamera:${distance}`, {
    method: "POST",
    body: "camera distance",
  });
  return;
}
