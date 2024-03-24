import Image from 'next/image';
import logo from '../public/Logo_1.png';

export default function Home() {
  return (
    <main>
      <Image src={logo} alt="" className="size-20 float-right" />
      <h1 className="text-2xl">Welcome. How can I help you?</h1>
      <div className="flex flex-row justify-evenly w-full">
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-pink-400">
          Mode 1
        </div>
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-purple-400">
          Mode 2
        </div>
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-blue-400">
          Mode 3
        </div>
      </div>
    </main>
  );
}
