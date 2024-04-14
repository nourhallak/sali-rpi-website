"use client";
import { Status } from "@/Interfaces/Status";
import PostCancel from "../NavigationPage/PostCancel";
import PostPause from "../NavigationPage/PostPause";

type Props = {
  statusParam: { status: Status };
};

export default function NavigationPage({ statusParam }: Props) {
  const { status } = statusParam;

  //   Post cancel request
  const Cancel = () => {
    PostCancel();
  };

  //   Post pause request
  const Pause = () => {
    PostPause();
  };

  // Controlling text based on status
  const statusTextControl = () => {
    if (status.isMoving) {
      return "Navigating to book";
    } else if (status.isRackMoving) {
      return "Rack moving to shelf";
    } else if (status.isCodefound) {
      return "Book location found";
    } else if (status.isCentering) {
      return "Centering laser pointer";
    }
  };

  return (
    <main className="m-24 flex flex-col items-center">
      <p className="text-black  text-2xl">{statusTextControl()}</p>
      <p className="text-black  text-2xl">Name of the book</p>
      <div>
        <div className="flex justify-between m-8 ">
          {/* Buuton to pause */}
          <a
            onClick={Pause}
            className="absolute bottom-28 left-52 w-[185px] text-center p-3 border border-gray-600 font-bold"
          >
            Pause
          </a>
          {/* Button to cancel operation */}
          <a
            onClick={Cancel}
            href="../"
            className="absolute bottom-28 right-52 w-[185px] text-center p-3 border border-gray-600 font-bold"
          >
            Cancel
          </a>
        </div>
        <div>
          <a
            onClick={Cancel}
            href="../"
            className="absolute bottom-12 left-[208px] w-96 text-center p-3 bg-green-500 text-white font-bold text-xl"
          >
            Done
          </a>
        </div>
      </div>
    </main>
  );
}
