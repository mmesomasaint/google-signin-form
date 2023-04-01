import EmailCard from './components/EmailCard'
import PasswordCard from './components/PasswordCard'
import {IoMdArrowDropdown} from 'react-icons/io'

function App() {
  return (
    <div className="pt-14 max-w-lg sm:max-w-[29.5rem] w-[95%] mx-auto">
      <main className='scale-95'>
        <EmailCard />
      </main>
      <footer className="w-[90%] mx-auto my-2 px-2 flex justify-between items-center gap-5">
        <div className='flex justify-between items-center gap-5'>
          <span className='text-xs'>English (United Kingdom)</span>
          <IoMdArrowDropdown className='text-lg text-black' />
        </div>
        <div className="flex justify-start gap-7 items-center">
          <p className='text-xs'>Help</p>
          <p className='text-xs'>Privacy</p>
          <p className='text-xs'>Terms</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
