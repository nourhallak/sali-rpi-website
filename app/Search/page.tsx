import { book } from "../../Interfaces/Book";
import { SearchPage } from "./searchPage";
import { URL } from "@/utils/url";

// Fetching data from database
export const getBooks = async () => {
  const res = await fetch(`${URL}/screen/search/books/allbooks`);
  return (await res.json()) as book[];
};

type props = {
  params: { inputText: string };
};

export default async function Search({ params }: props) {
  const books = await getBooks();

  return (
    <SearchPage params={{ allBooks: books, inputText: params.inputText }} />
  );
}
