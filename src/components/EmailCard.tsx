import logo from '../assets/google.png'

function EmailCard() {
  return (
    <div className="py-6 px-10 rounded-lg border border-gray-300 bg-white">
      <div className="flex flex-col items-center mb-10">
        <img src={logo} className="w-[4.5rem]" />
        <h3 className="text-black text-2xl font-normal leading-none mb-4">
          Sign in
        </h3>
        <h5 className="text-black text-lg font-normal leading-none">
          Use your Google Account
        </h5>
      </div>
      <div className="">
        <div className="relative w-full h-fit mb-10">
          <input
            type="email"
            className="text-base font-normal p-4 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out"
          />
          <p className="absolute z-10 transition-all duration-200 ease-in-out top-4 peer-focus:-top-2 ml-4 text-base peer-focus:text-xs text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2">
            Email or phone
          </p>
          <a href="#" className="text-base font-medium text-blue-700">
            Forgot email?
          </a>
        </div>
        <div className="text-base text-gray-700">
          Not your computer? Use Guest mode to sign in privately.
        </div>
        <a href="#" className="text-base font-medium text-blue-700">
          Learn more
        </a>
        <div className="flex justify-between items-center gap-5 mt-10 mb-6">
          <a href="#" className="text-base font-medium text-blue-700">
            Create account
          </a>
          <button className="rounded-md bg-blue-700 text-white text-base font-medium leading-[0] py-5 px-6">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailCard