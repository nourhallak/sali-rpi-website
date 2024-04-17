import { URL } from "@/utils/url";

export default async function navigateToBooks(books: string[]) {
  const res = await fetch(`${URL}/screen/navigatetobooks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ books: books }),
  });
  return res;
}
