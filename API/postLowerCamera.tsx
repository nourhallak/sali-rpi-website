import { URL } from "@/utils/url";

export default async function lowercamera() {
  const res = await fetch(`${URL}/screen/lowercamera`, {
    method: "POST",
    body: "",
  });
  return;
}
