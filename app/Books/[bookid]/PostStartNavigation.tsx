import { URL } from "@/utils/url";

// Posting start navigation to book request
export default async function startNavigationRequest(bookid: string) {
  const res = await fetch(`${URL}/screen/moveToBook`, {
    method: "POST",
    body: bookid,
  });
  console.log("start navigation request is posted");

  if (!res.ok) throw new Error("Unable to fetch");

  return res;
}
