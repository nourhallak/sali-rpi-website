"use client";

import dynamic from "next/dynamic";

const RMQR = dynamic(() => import("../../Components/rmqr/rmqr"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Page = () => {
  const fn = (res: string[]) => {
    console.log(res);
  };
  return (
    <div>
      <RMQR disabled={false} onSuccess={fn} />
    </div>
  );
};

export default Page;
