import Image from 'next/image';
import logo from '../public/Logo_2.png';
import rhu_logo from '../public/rhu_logo_1.png'

export default function Home() {
  return (
    <main className='h-[480px] flex flex-col items-center'>
      <div className='w-full h-28 flex'>
        <Image src={rhu_logo} alt="" className="m-2 h-4/5 w-1/6  "/>
        <Image src={logo} alt="" className="ml-36 pt-8 w-52 "/>
      </div>
     
      <div className="w-full flex flex-col items-center mt-14">
          <h1 className="mb-8 w-fit text-3xl"><span className='font-bold'>Welcome! </span> How can I help you?</h1>
          <div className="flex flex-row justify-evenly text-2xl text-center size-4/5 ">
                
                <div className="rounded shadow-xl">
                  <div className='bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Find A Book
                  </div>
                </div>
                <div className="rounded shadow-xl">
                  <div className='bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Return Books                  
                  </div>
                </div>
          </div>
      </div>
    </main>
  );
}
