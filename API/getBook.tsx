import { book } from "../Interfaces/Book";
import { URL } from "@/utils/url";

// Fetching book info from database
export const getBookInfo = async (bookid: string) => {
  const res = await fetch(`${URL}/screen/search/${bookid}`);
  return (await res.json()) as book;
};
