"use client";
import PostCancel from "../NavigationPage/PostCancel";
import PostPause from "../NavigationPage/PostPause";

export default async function NavigationPage() {
  const Cancel = (event: any) => {
    PostCancel();
  };
  const Pause = (event: any) => {
    PostPause();
  };

  return (
    <main className="m-20">
      <div className="flex justify-between m-12 ">
        {/* Buuton to pause */}
        <a onClick={Pause} className="m-12 p-3 border border-gray-300">
          Pause
        </a>
        {/* Button to cancel operation */}
        <q onClick={Cancel} className="m-12 p-3 border border-gray-300">
          Cancel
        </q>
      </div>
    </main>
  );
}
