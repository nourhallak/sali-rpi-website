import { book } from "../../../Interfaces/Book";
import ViewBook from "./ViewBook";
import { URL } from "@/utils/url";

// Fetching book info from database
export const getBookInfo = async (bookid: string) => {
  const res = await fetch(`${URL}/screen/search/${bookid}`);
  return (await res.json()) as book;
};

type Props = {
  params: { bookid: string };
};
export default async function BookInfo({ params }: Props) {
  const { bookid } = params;
  const book = await getBookInfo(bookid);

  return <ViewBook params={{ clickedBook: book, bookid: bookid }} />;
}
