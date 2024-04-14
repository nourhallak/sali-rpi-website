"use client";

import Link from "next/link";
import getbattery from "./main";
import { useEffect, useState } from "react";

export default function Home() {
  const [battery, setBattery] = useState<number | undefined>(undefined);

  useEffect(() => {
    let fetcher = () =>
      getbattery().then((b) => {
        setBattery(b);
      });

    let interval = setInterval(() => {
      fetcher();
    }, 10000);

    fetcher();

    return () => clearTimeout(interval);
  }, []);

  return (
    <main className="h-[368px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center mt-14">
        <h1 className="mb-8 w-fit text-3xl">
          <span className="font-bold">Welcome! </span> How can I help you?
        </h1>
        <div className="flex flex-row justify-evenly text-2xl text-center size-4/5 ">
          <Link href="/Search">
            <div className="rounded shadow-xl">
              <div className="bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-t"></div>
              <div className="h-36 w-48 p-8">Find A Book</div>
            </div>
          </Link>
          <Link href="/ScanningPage">
            <div className="rounded shadow-xl">
              <div className="bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-t"></div>
              <div className="h-36 w-48 p-8">Return Books</div>
            </div>
          </Link>
        </div>
      </div>
      <div>{battery?.toFixed(2) || "Loading..."}</div>
      <div className="flex justify-evenly w-full mt-12">
        <p className="">Khaled Al Sweid</p>
        <p>-</p>
        <p className="">Mohammad El Kurjieh</p>
        <p>-</p>
        <p className="">Noor Hallak</p>
        <p>-</p>
        <p className="">Maya Hashash</p>
      </div>
    </main>
  );
}
