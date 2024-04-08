"use client";
import PostScan from "./PostScanRequest";
import CancelScan from "./CancelScanRquest";
import Link from "next/link";

export default function page() {
  //   Post scan request
  const Scan = () => {
    PostScan();
  };

  //   Post cancel scan request
  const cancelScan = () => {
    CancelScan();
  };

  return (
    <main className="flex flex-col mt-20 items-center ">
      <p className="text-2xl">Name of book</p>
      <div className="">
        <a
          onClick={Scan}
          className="absolute bottom-40 left-60 w-36 text-center p-3 border border-gray-600 font-bold"
        >
          Scan
        </a>
        <a
          onClick={cancelScan}
          className="absolute bottom-40 right-60 w-36 text-center  p-3 border border-gray-600 font-bold"
        >
          Cancel Scan
        </a>
      </div>
      <a
        href="../NavigationPage"
        className="absolute bottom-24 left-[240px] w-80 text-center p-3 bg-green-500 text-white font-bold text-xl"
      >
        Start Returning
      </a>
      <Link
        href="../"
        className="absolute bottom-8 left-8 p-3 border border-gray-600 font-bold"
      >
        Back to home
      </Link>
    </main>
  );
}
