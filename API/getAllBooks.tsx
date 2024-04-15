import { book } from "../Interfaces/Book";
import { URL } from "@/utils/url";

// Fetching book info from database
export const getAllBooks = async () => {
  const res = await fetch(`${URL}/screen/search/books/allbooks`);
  return (await res.json()) as book[];
};
