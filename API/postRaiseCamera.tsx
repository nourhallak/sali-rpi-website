import { URL } from "@/utils/url";

export default async function movecamera() {
  const res = await fetch(`${URL}/screen/movecamera`, {
    method: "POST",
    body: "",
  });
  return;
}
