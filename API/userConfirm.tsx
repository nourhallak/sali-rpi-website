import { URL } from "@/utils/url";

export default async function userConfirm() {
  const res = await fetch(`${URL}/screen/userconfirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  return res;
}
