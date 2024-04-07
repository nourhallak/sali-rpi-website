import Link from "next/link";

// // Fetching book info from database
// export const getBookInfo = async (bookid: string) => {
//   const res = await fetch(`http://localhost:5001/screen/search/${bookid}`);
//   return (await res.json()) as book;
// };

export default async function Page() {
  return (
    <main className="m-20">
      {/* buutons to start searching */}
      <div className="flex justify-between ">
        <Link href="#">Cancel</Link>
        <Link href="#">Pause</Link>
      </div>
    </main>
  );
}
