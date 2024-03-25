import Image from 'next/image';
import logo from '../public/Logo_2.png';

export default function Home() {
  return (
    <main>
      <div className='w-full h-28'>
        <Image src={logo} alt="" className="w-32 m-6 float-right" />
      </div>
      <div className="">

      <h1 className="ml-12 mb-8 w-fit text-2xl">Welcome! How can I help you?</h1>
      <div className="flex flex-row justify-evenly text-2xl text-center">
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-pink-600">
          Find A Book
        </div>
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-purple-600">
          Return Books
        </div>
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-blue-600">
          Inspection
        </div>
      </div>
      </div>
    </main>
  );
}
