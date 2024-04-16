"use client";

import PostScan from "./PostScanRequest";
import CancelScan from "./CancelScanRquest";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";

const RMQR = dynamic(() => import("../../Components/rmqr/rmqr"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Page() {
  const [disabled, setDisabled] = useState(false);
  const bookList = useRef(null);

  const onSuccess = useCallback((res: string[]) => {
    console.log("Success");
    setDisabled(true);
    if (bookList.current) {
      (bookList.current as any).innerHTML =
        (bookList.current as any).innerHTML + "\n" + res[0];
    }
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <div>
        <RMQR onSuccess={onSuccess} disabled={disabled} />
      </div>
      <div ref={bookList}></div>
      {/* <p className="text-2xl">Name of book</p> */}
      <div className="absolute bottom-8 inset-x-0 w-full flex justify-center items-center">
        <a
          href="../NavigationPage"
          className="w-80 text-center p-3 bg-green-500 text-white font-bold text-xl"
        >
          Start Returning
        </a>
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
