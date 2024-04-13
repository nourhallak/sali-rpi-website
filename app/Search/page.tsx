import { book } from "../../Interfaces/Book";
import { SearchPage } from "./searchPage";
import { URL } from "@/utils/url";

// Fetching data from database
export const getBooks = async () => {
  const res = await fetch(`${URL}/screen/search/books/allbooks`);
  return (await res.json()) as book[];
};

export default async function Search() {
  const books = await getBooks();

  return <SearchPage params={{ allBooks: books }} />;
}
