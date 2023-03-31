import EmailCard from './components/EmailCard'
import {IoMdArrowDropdown} from 'react-icons/io'

function App() {
  return (
    <div className="pt-20 max-w-lg w-[95%] mx-auto">
      <main>
        <EmailCard />
      </main>
      <footer className="w-[90%] mx-auto my-5 px-2 flex justify-between items-center gap-5">
        <div className='flex justify-between items-center gap-5'>
          <span>English (United Kingdom)</span>
          <IoMdArrowDropdown className='text-lg text-black' />
        </div>
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
