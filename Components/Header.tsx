import Image from "next/image";
import logo from "@/public/Logo_2.png";
import rhu_logo from "@/public/rhu_logo_1.png";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="w-full h-28 flex">
        <Image src={rhu_logo} alt="" className="m-2 h-4/5 w-1/6  " />
        <Image src={logo} alt="" className="ml-36 pt-8 w-52 " />
      </div>
    </header>
  );
}
