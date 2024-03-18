import logo from './Untitled-1.jpg';


export default function Home() {
  return (
    <main className="bg-color-red">
      <img src={logo} alt="" className="scale-10" />
      <h1 className="m-16 text-2xl ">Welcome, How can I help you?</h1>
      <div className="flex flex-row justify-evenly">

        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-pink-400">

          Mode 1
        </div>
        <div className="rounded shadow-lg size-48 p-8 border-t-8 border-t-purple-400 ">
          Mode 2
        </div>
        <div className="rounded shadow-lg size-48 p-8  border-t-8 border-t-blue-400">
          Mode 3
        </div>

      </div>
    </main>
  );
}
