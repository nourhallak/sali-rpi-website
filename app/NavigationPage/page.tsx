"use client";
import { RobotCurrentStatus } from "@/Interfaces/Status";
import PostCancel from "../../API/postCancel";
import PostPause from "@/API/postPause";
import PostRack from "../../API/postRack";
import Link from "next/link";
import { getCurrentStatus } from "@/API/getCurrentStatus";
import { useEffect, useState } from "react";
import { getBookInfo } from "@/API/getBook";
import { emptybook } from "@/Interfaces/Book";
import PostLaser from "@/API/postLaser";
import { useRouter } from "next/navigation";
import userConfirm from "@/API/userConfirm";

export default function NavigationPage() {
  const defaultState: RobotCurrentStatus = {
    stateText: "Ready",
    navigationState: "READY",
    rackState: "HOME",
    batteryPercentage: 100,
    booksToDeliver: [],
    currentBook: emptybook,
    waitingForUserToConfirm: false,
  };
  const [status, setStatus] = useState(defaultState);
  const router = useRouter();

  useEffect(() => {
    let fetcher = () =>
      getCurrentStatus().then((state) => {
        setStatus(state);
      });
    let interval = setInterval(() => {
      fetcher();
    }, 1000);
    fetcher();

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   getBookInfo("123abc").then((b) => {
  //     setCurrentBook(b);
  //   });
  // }, []);

  const Cancel = () => {
    PostCancel();
  };

  const Pause = () => {
    PostPause();
  };

  // // Controlling text based on status
  // const navigationStatusTextControl = () => {
  //   if (status.navigationState == "READY") {
  //     return "Ready to serve you";
  //   } else if (status.navigationState == "MOVING") {
  //     return "Navigating to book";
  //   } else if (status.navigationState == "SUCCEEDED") {
  //     // call rack to go up to the book
  //     // PostRack(book.position.z);
  //     // PostLaser(true);
  //     return "Destination reached";
  //   } else if (status.navigationState == "ABORTED") {
  //     return "Couldn't reach :(";
  //   }
  // };

  // // Controlling text based of rack status
  // const rackStatusTextControl = () => {
  //   if (status.rackState == "HOME") {
  //     return "";
  //   } else if (status.rackState == "MOVING") {
  //     return "Wait for the rack to find your book shelf";
  //   } else if (status.rackState == "SUCCEEDED") {
  //     return "Book found";
  //   } else if (status.rackState == "HOMING") {
  //     return "Back to home position";
  //   } else if (status.rackState == "ERROR") {
  //     return "Error occured :(";
  //   }
  // };

  // let rackState = rackStatusTextControl();

  return (
    <main className="m-24 flex flex-col items-center">
      <p className="text-black text-2xl">{status.stateText}</p>
      {/* {rackState && <p className="text-black  text-2xl">{rackState}</p>} */}
      {status.currentBook && (
        <p className="text-black  text-2xl">{status.currentBook?.name}</p>
      )}
      <div>
        <div className="flex justify-between m-8 ">
          {/* Button to pause */}
          <div
            onClick={Pause}
            className="absolute bottom-28 left-52 w-[185px] text-center p-3 border border-gray-600 font-bold"
          >
            Pause
          </div>
          {/* Button to cancel operation */}
          <div
            onClick={Cancel}
            className="absolute bottom-28 right-52 w-[185px] text-center p-3 border border-gray-600 font-bold"
          >
            <a href="../"> Cancel</a>
          </div>
        </div>
        <div>
          {status.waitingForUserToConfirm && (
            <p
              onClick={async () => {
                await userConfirm();
                if (status.booksToDeliver.length == 0) {
                  setTimeout(() => {
                    router.push("../");
                  }, 20000);
                }
              }}
              className="absolute bottom-12 left-[208px] w-96 text-center p-3 bg-green-500 text-white font-bold text-xl"
            >
              {status.booksToDeliver.length == 0 ? "Done" : "Next"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
