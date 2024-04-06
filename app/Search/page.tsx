import { book } from "../../Interfaces/Book";
import { SearchPage } from "./searchPage";

// Fetching data from database
export const getBooks = async () => {
  const res = await fetch("http://localhost:5001/screen/search/books/allbooks");
  return (await res.json()) as book[];
};

export default async function Search() {
  const books = await getBooks();

  return <SearchPage allBooks={books} />;
}
