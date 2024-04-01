import Link from 'next/link';
import Header from '../Header/page';

export default function Search() {
  return (
    <main className='h-[480px]'>
      <Header />   
      <div className='flex items-center'>
        <h1 className="m-10 w-fit text-xl">Type the name of the book:</h1>
        <input type="text" className='border border-black h-6 w-64' />
      </div>
      <div className='flex items-end h-[260px]'>
        <Link href="../" className='m-12 p-3 border border-gray-300'>  Back to home </Link>
      </div>
    </main>
  );
}
