function EmailBody() {
  return (
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
  )
}

export default EmailBody