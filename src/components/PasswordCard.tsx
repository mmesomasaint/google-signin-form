import logo from '../assets/google.png'
import {BsPersonCircle} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'

function EmailCard() {
  return (
    <div className="px-10 py-10 rounded-xl border border-gray-300 bg-white">
      <div className="flex flex-col items-center mb-14">
        <img src={logo} className="w-20" />
        <h3 className="text-black text-3xl font-normal leading-none mb-4">
          Welcome
        </h3>
        <div className='flex justify-between items-center gap-2 rounded-full border p-2'>
          <BsPersonCircle className='text-gray-700 text-2xl' />
          <h5 className="text-black text-lg font-medium leading-none">
            kleinjones@gmail.com
          </h5>
          <MdKeyboardArrowDown className='text-gray-900 text-2xl' />
        </div>
      </div>
      <div className="">
        <div className="relative w-full h-fit mb-12">
          <input
            type="password"
            className="text-lg font-normal p-5 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out"
          />
          <p className="absolute z-10 transition-all duration-200 ease-in-out top-5 peer-focus:-top-3 ml-4 text-xl peer-focus:text-base text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2">
            Enter your password
          </p>
          <label className='flex justify-start items-center'>
            <input type='checkbox' className='w-5 h-5' />
            <span className="text-xl font-normal text-gray-700 ml-5">Show password</span>
          </label>
        </div>
        <div className="flex justify-between items-center gap-5 my-12">
          <a href="#" className="text-lg font-medium text-blue-700">
            Forgot password?
          </a>
          <button className="rounded-md bg-blue-700 text-white text-lg font-medium leading-[0] py-5 px-6">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailCard