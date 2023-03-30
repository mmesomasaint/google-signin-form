import logo from './assets/google.png';

function App() {
  return (
    <div className="pt-20">
      <div className="px-12 py-10 w-[90%] mx-auto rounded-xl border border-gray-300 bg-white">
        <div className="flex flex-col items-center mb-14">
          <img src={logo} className="w-20" />
          <h3 className="text-black text-3xl font-normal leading-none mb-4">
            Sign in
          </h3>
          <h5 className="text-black text-2xl font-normal leading-none">
            Use your Google Account
          </h5>
        </div>
        <div className="">
          <div className="relative w-full h-fit">
            <input
              type="email"
              className="text-lg font-normal p-5 border border-gray-400 w-full rounded-md mb-1 peer focus:outline-blue-700 transition duration-500"
            />
            <p className="block absolute z-10 top-5 transition duration-500 peer-focus:-top-2 ml-4 text-xl peer-focus:text-sm text-gray-500 pointer-events-none bg-white px-2">
              Email or phone
            </p>
            <a href="#" className="text-lg font-medium text-blue-700">
              Forgot email?
            </a>
          </div>
          <div className="mt-6 text-lg text-gray-700">
            Not your computer? Use Guest mode to sign in privately.
          </div>
          <a href="#" className="text-lg font-medium text-blue-700">
            Learn more
          </a>
          <div className="flex justify-between items-center gap-5 my-10">
            <a href="#" className="text-lg font-medium text-blue-700">
              Create account
            </a>
            <button className="rounded-md bg-blue-700 text-white text-lg font-medium leading-[0] py-5 px-6">
              Next
            </button>
          </div>
        </div>
      </div>
      <footer className="w-[90%] mx-auto my-5 px-2 flex justify-between items-center gap-5">
        <div>English(United Kingdom)</div>
        <div className="flex justify-start gap-3 items-center">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
