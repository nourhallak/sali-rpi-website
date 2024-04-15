"use client";
import Link from "next/link";
import Image from "next/image";
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
    <main className="">
      <div className="absolute left-40 top-44 ">
        {/* display data of clicked book */}
        <p className="relative ">
          <span className="font-bold">ID: </span>
          {clickedBook.decoded_string}
        </p>
        <p className="relative top-6">
          <span className="font-bold">Name: </span>
          {clickedBook.name}
        </p>
        <p className="relative top-12">
          <span className="font-bold">Auther: </span>
          {clickedBook.auther}
        </p>
      </div>
      <div className="absolute right-40 top-40">
        <Image width={145} height={200} alt="image" src="/image.jpg" />
      </div>
      <div className="flex items-end ">
        {/* button to start searching */}
        <div
          onClick={() =>
            startNavigationRequest(bookid).then(() =>
              router.push("../NavigationPage")
            )
          }
          className="absolute bottom-24 w-80 left-40 text-center mt-12 p-3  bg-green-500 text-white font-bold text-xl"
        >
          Search
        </div>
      </div>
      <Link
        href="../Search"
        className="absolute bottom-8 left-8 p-3 border border-gray-600 font-bold"
      >
        Back
      </Link>
    </main>
  );
}
