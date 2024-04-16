import { URL } from "@/utils/url";

export default async function PostLaser(LaserStatus: boolean) {
  const res = await fetch(`${URL}/screen/laser`, {
    method: "POST",
    body: "",
  });
  return;
}
