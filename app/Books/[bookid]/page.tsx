import Link from "next/link";
import { book } from "../../../Interfaces/Book";

// Fetching book info from database
export const getBookInfo = async (bookid: string) => {
  const res = await fetch(`http://localhost:5001/screen/search/${bookid}`);
  return (await res.json()) as book;
};

// Posting start navigation to book request
const startNavigationRequest = async (bookid: string) => {
  const res = fetch(`http://localhost:5001/screen/search/${bookid}`, {
    method: "POST",
    body: "Start navigation to book",
  });
  console.log("start navigation request is posted");
};

type Props = {
  params: { bookid: string };
};

export default async function Page({ params }: Props) {
  const { bookid } = params;
  const clickedBook = getBookInfo(bookid);
  const startNavigation = startNavigationRequest(bookid);
  startNavigation;
  return (
    <main className="m-20">
      {/* display data of clicked book */}
      <p>{(await clickedBook).decoded_string}</p>
      <p>{(await clickedBook).name}</p>
      <p>{(await clickedBook).auther}</p>

      {/* button to start searching */}
      <div className="flex items-end ">
        <Link
          href={"../NavigationPage"}
          className="mt-12 p-3 border border-gray-300"
        >
          Search
        </Link>
      </div>
    </main>
  );
}
