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
    <main className="m-20 flex flex-col items-center">
      <p className="text-black">{statusTextControl()}</p>
      <div className="flex justify-between m-8 ">
        {/* Buuton to pause */}
        <a onClick={Pause} className="m-12 p-4 border border-gray-300">
          Pause
        </a>
        {/* Button to cancel operation */}
        <a
          onClick={Cancel}
          href="../"
          className="m-12 p-4 border border-gray-300"
        >
          Cancel
        </a>
      </div>
    </main>
  );
}
