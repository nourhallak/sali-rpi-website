import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[480px] flex flex-col items-center">
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
    </main>
  );
}
