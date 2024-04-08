"use client";
import PostScan from "./PostScanRequest";
import CancelScan from "./CancelScanRquest";

export default async function () {
  //   Post scan request
  const Scan = () => {
    PostScan();
  };

  //   Post cancel scan request
  const cancelScan = () => {
    CancelScan();
  };

  return (
    <main>
      <a onClick={Scan} className="m-12 p-3 border border-gray-300">
        Scan
      </a>
      <a onClick={cancelScan} className="m-12 p-3 border border-gray-300">
        Cancel Scan
      </a>
      <a
        onClick={cancelScan}
        href="../NavigationPage"
        className="m-12 p-3 border border-gray-300"
      >
        Start Returning
      </a>
    </main>
  );
}
