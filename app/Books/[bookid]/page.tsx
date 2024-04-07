import { book } from "../../../Interfaces/Book";

// Fetching book info from database
export const getBookInfo = async (bookid: string) => {
  const res = await fetch(`http://localhost:5001/screen/search/${bookid}`);
  return (await res.json()) as book;
};

type Props = {
  params: { bookid: string };
};

export default async function Page({ params }: Props) {
  const { bookid } = params;
  const clickedBook = getBookInfo(bookid);
  return (
    <main className="h-[480px]">
      <p>{(await clickedBook).decoded_string}</p>
      <p>{(await clickedBook).name}</p>
      <p>{(await clickedBook).auther}</p>
    </main>
  );
}
