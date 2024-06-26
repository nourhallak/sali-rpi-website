"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { book } from "../../Interfaces/Book";
import Keyboard from "@/Components/Keyboard";
import React from "react";
import { getAllBooks } from "@/API/getAllBooks";
import getbattery from "@/Components/getBattery";

export default function SearchPage() {
  const [bookName, setBookName] = useState("");
  const arr: book[] = [];
  const [Books, setBooks] = useState(arr);
  const [keyboardShown, setKeyboardShown] = useState(true);

  useEffect(() => {
    getAllBooks().then((b) => {
      setBooks(b);
    });
  }, []);

  const books = Books.filter(
    ({ name }) =>
      bookName.trim().length > 0 &&
      name.toLowerCase().includes(bookName.toLowerCase().trim())
  );

  // On change function for the text input
  const onChange = (event: any) => {
    setBookName(event.target.value ?? "");
  };

  // show keyboard function
  const showKeyboard = () => {
    setKeyboardShown(true);
  };

  return (
    <main className="h-[368px] relative">
      <div className="flex items-center justify-center">
        <h1 className="mt-4 mr-10 w-fit text-xl">Type the name of the book:</h1>
        <input
          type="text"
          className="mt-4 border border-black h-6 w-80"
          value={bookName}
          onChange={onChange}
          onClick={showKeyboard}
        />
      </div>
      <div className="ml-[395px]">
        {books.map((book) => (
          <a
            className="block w-80 hover:bg-gray-100 border-b border-gray-200"
            key={book.decoded_string}
            href={`/Books/${book.decoded_string}`}
          >
            {book.name}
          </a>
        ))}
      </div>
      <Link
        href="../"
        className="absolute bottom-8 left-8 p-3 border border-gray-600 font-bold"
      >
        Back to home
      </Link>
      {keyboardShown && (
        <Keyboard
          value={bookName}
          setValue={setBookName}
          setIsShown={setKeyboardShown}
        />
      )}
    </main>
  );
}
