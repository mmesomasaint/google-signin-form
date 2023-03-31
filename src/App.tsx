import logo from './assets/google.png';

function App() {
  return (
    <div className="pt-20 max-w-lg w-[95%] mx-auto">
      <div className="px-10 py-10 rounded-xl border border-gray-300 bg-white">
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
          <div className="relative w-full h-fit mb-12">
            <input
              type="email"
              className="text-lg font-normal p-5 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out"
            />
            <p className="absolute z-10 transition-all duration-200 ease-in-out top-5 peer-focus:-top-3 ml-4 text-xl peer-focus:text-base text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2">
              Email or phone
            </p>
            <a href="#" className="text-lg font-medium text-blue-700">
              Forgot email?
            </a>
          </div>
          <div className="text-lg text-gray-700">
            Not your computer? Use Guest mode to sign in privately.
          </div>
          <a href="#" className="text-lg font-medium text-blue-700">
            Learn more
          </a>
          <div className="flex justify-between items-center gap-5 my-12">
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
