import Image from 'next/image';
import logo from '../public/Logo_2.png';

export default function Home() {
  return (
    <main>
      <div className='w-full h-40 flex justify-center'>
        <Image src={logo} alt="" className="w-40 m-8 " />
      </div>
      <div className="">
        {/* <input type='text' className='border border-gray-700'></input> */}
      <h1 className=" ml-44 mb-8 w-fit text-3xl"><span className='font-bold '>Welcome! </span> How can I help you?</h1>
      <div className="flex flex-row justify-evenly text-2xl text-center">
        <div className="bg-white rounded shadow-lg h-40 w-48 p-8 border-t-8 border-t-pink-600">
          Find A Book
        </div>
        <div className="bg-white rounded shadow-lg h-40 w-48 p-8 border-t-8 border-t-purple-600">
          Return Books
        </div>
      </div>
      </div>
    </main>
  );
}
