import Image from 'next/image';
import logo from '../public/Logo_2.png';
import rhu_logo from '../public/rhu_logo.png'

export default function Home() {
  return (
    <main className='h-[480px] flex flex-col justify-between items-center'>
      <div className='w-full h-24 pt-8 flex justify-center'>
        <Image src={logo} alt="" className="w-44"/>
      </div>
     
      <div className="w-full flex flex-col items-center">
          <h1 className="mb-8 w-fit text-3xl"><span className='font-bold'>Welcome! </span> How can I help you?</h1>
          <div className="flex flex-row justify-evenly text-2xl text-center size-4/5">
                
                <div className="bg-white rounded shadow-2xl">
                  <div className='bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Find A Book
                  </div>
                </div>
                <div className="bg-white rounded shadow-2xl">
                  <div className='bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-t'></div>
                  <div className='h-36 w-48 p-8'>
                    Return Books                  
                  </div>
                </div>
          </div>
      </div>
        <Image src={rhu_logo} alt="" className="w-6/7 mb-2"/>
    </main>
  );
}
