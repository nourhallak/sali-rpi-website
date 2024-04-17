"use client";

import PostScan from "./PostScanRequest";
import CancelScan from "./CancelScanRquest";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import navigateToBooks from "@/API/navigateToBooks";

const RMQR = dynamic(() => import("../../Components/rmqr/rmqr"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Page() {
  const [disabled, setDisabled] = useState(false);
  const [books, setBooks] = useState<string[]>([]);
  const router = useRouter();

  const onSuccess = useCallback((res: string[]) => {
    console.log("Success");
    setDisabled(true);
    setBooks((b) => [...b, res[0]]);
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <div>
        <RMQR onSuccess={onSuccess} disabled={disabled} />
      </div>
      {books.length > 0 && (
        <div className="absolute right-8">
          <p className="font-bold">Books to be returned:</p>
          {books.map((book, i) => (
            <p key={i}>{book}</p>
          ))}
        </div>
      )}
      {/* <p className="text-2xl">Name of book</p> */}
      <div className="absolute bottom-8 inset-x-0 w-full flex justify-center items-center gap-6">
        {disabled && (
          <p
            onClick={() => {
              setDisabled(false);
            }}
            className="w-44 text-center p-3 bg-green-500 text-white font-bold text-xl"
          >
            Add Book
          </p>
        )}
        <p
          onClick={async () => {
            await navigateToBooks(books);
            router.push("../NavigationPage");
          }}
          className="w-44 text-center p-3 bg-blue-500 text-white font-bold text-xl"
        >
          Start Returning
        </p>
      </div>
      {/* <Link
        href="../"
        className="absolute bottom-8 right-8 p-3 border border-gray-600 font-bold"
      >
        Back to Home
      </Link> */}
      <Link
        href="../"
        className="absolute bottom-8 left-8 p-3 border border-gray-600 font-bold"
      >
        Cancel Scan
      </Link>
    </main>
  );
}
