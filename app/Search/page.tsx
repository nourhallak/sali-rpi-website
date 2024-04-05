import Link from "next/link";
import Header from "../Header/page";

interface book {
  name: string;
  auther: string;
  decoded_string: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  orientation: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
}

export const getBooks = async () => {
  const res = await fetch("http://localhost:5001/screen/search/books/allbooks");
  return (await res.json()) as book[];
};

export default async function Search() {
  const books = await getBooks();

  return (
    <main className="h-[480px]">
      <Header />
      <div>
        {books.map((book) => (
          <p>{book.name}</p>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <h1 className="mt-10 mr-10 mb-10 w-fit text-xl">
          Type the name of the book:
        </h1>
        <input type="text" className="border border-black h-6 w-80" />
      </div>
      <div className="flex items-end h-[260px]">
        <Link href="../" className="m-12 p-3 border border-gray-300">
          {" "}
          Back to home{" "}
        </Link>
      </div>
    </main>
  );
}
