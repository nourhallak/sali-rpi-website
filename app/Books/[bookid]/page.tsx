import { book } from "../../../Interfaces/Book";
import ViewBook from "./ViewBook";

// Fetching book info from database
export const getBookInfo = async (bookid: string) => {
  const res = await fetch(`http://localhost:5001/screen/search/${bookid}`);
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
