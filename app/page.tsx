import Image from 'next/image';
import logo from '../public/Logo_2.png';

export default function Home() {
  return (
    <main>
      <div className='w-full h-40 flex justify-center'>
        <Image src={logo} alt="" className="w-40 m-8"/>
      </div>
     
      <div className="w-full flex flex-col items-center">
          <h1 className="mb-8 w-fit text-3xl"><span className='font-bold'>Welcome! </span> How can I help you?</h1>
          <div className="flex flex-row justify-evenly text-2xl text-center size-4/5">
                
                <div className="bg-white rounded shadow-2xl">
                  <div className='bg-gradient-to-r from-purple-500 to-blue-400 h-3 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Find A Book
                  </div>
                </div>
                <div className="bg-white rounded shadow-2xl">
                  <div className='bg-gradient-to-r from-purple-500 to-blue-400 h-3 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Return Books                  
                  </div>
                </div>
          </div>
      </div>
    </main>
  );
}
