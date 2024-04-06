import { book } from "../../../Interfaces/Book";

// Fetching data from database
export const getBooks = async () => {
  const res = await fetch("http://localhost:5001/screen/search/books/allbooks");
  return (await res.json()) as book[];
};

type Props = {
  params: { bookid: string };
};

export default async function Page({ params }: Props) {
  const { bookid } = params;
  return (
    <main className="h-[480px]">
      <p>{bookid}</p>
    </main>
  );
}
