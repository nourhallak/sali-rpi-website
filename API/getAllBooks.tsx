import { book } from "../Interfaces/Book";
import { URL } from "@/utils/url";

// Fetching book info from database
export async function getAllBooks() {
  const res = await fetch(`${URL}/screen/search/books/allbooks`);
  return (await res.json()) as book[];
}
