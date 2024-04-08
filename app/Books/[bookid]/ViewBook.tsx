"use client";
import Link from "next/link";
import { book } from "../../../Interfaces/Book";
import startNavigationRequest from "./PostStartNavigation";
import { useRouter } from "next/navigation";

type Props = {
  params: { clickedBook: book; bookid: string };
};

export default function ViewBook({ params }: Props) {
  const router = useRouter();
  const { clickedBook, bookid } = params;

  return (
    <main className="m-20">
      {/* display data of clicked book */}
      <p>{clickedBook.decoded_string}</p>
      <p>{clickedBook.name}</p>
      <p>{clickedBook.auther}</p>

      {/* button to start searching */}
      <div className="flex items-end ">
        <a
          onClick={() =>
            startNavigationRequest(bookid).then(() =>
              router.push("../NavigationPage")
            )
          }
          className="mt-12 p-3 border border-gray-300"
        >
          Search
        </a>
      </div>
    </main>
  );
}
