"use client";

import Link from "next/link";
import { useState } from "react";
import { book } from "../../Interfaces/Book";

type Props = {
  allBooks: book[];
};

export const SearchPage = ({ allBooks }: Props) => {
  const [bookName, setBookName] = useState("");
  let clickedBook = "";
  const books = allBooks.filter(({ name }) =>
    name.toLowerCase().includes(bookName.toLowerCase().trim())
  );

  // On change function for the text input
  const onChange = (event: any) => {
    setBookName(event.target.value ?? "");
  };

  return (
    <main className="h-[480px]">
      <div className="flex items-center justify-center">
        <h1 className="mt-10 mr-10 mb-10 w-fit text-xl">
          Type the name of the book:
        </h1>
        <input
          type="text"
          className="border border-black h-6 w-80"
          value={bookName}
          onChange={onChange}
        />
      </div>
      <div>
        {books.map((book) => (
          <a
            className="block w-fit hover:bg-gray-100"
            key={book.decoded_string}
            href={`/Books/${book.decoded_string}`}
          >
            {book.name}
          </a>
        ))}
      </div>
      <div className="flex items-end h-[260px]">
        <Link href="../" className="m-12 p-3 border border-gray-300">
          Back to home
        </Link>
      </div>
    </main>
  );
};
