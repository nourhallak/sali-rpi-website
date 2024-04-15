"use client";
import Image from "next/image";
import logo from "@/public/Logo_2.png";
import rhu_logo from "@/public/rhu_logo_1.png";
import { useState, useEffect } from "react";
import getbattery from "./getBattery";
import batteryimage from "../public/battery-mid.png";

export default function Header() {
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
    <header className="w-full flex flex-col items-center">
      <div className="w-full h-28 flex">
        <Image src={rhu_logo} alt="" className="m-2 h-4/5 w-1/6  " />
        <Image src={logo} alt="" className="ml-36 pt-8 w-52 " />
        <div className="ml-40  flex items-center">
          <Image alt="" src={batteryimage} className="w-8 h-8 mr-2" />
          {battery?.toFixed(2) || "Loading..."} %
        </div>
      </div>
    </header>
  );
}
