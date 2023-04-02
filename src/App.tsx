import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/google.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import EmailHeader from './components/EmailHeader';
import EmailBody from './components/EmailBody';
import PasswordHeader from './components/PasswordHeader';
import PasswordBody from './components/PasswordBody';

function App() {
  const [emailExists, setEmailExists] = useState(false);

  const setPage: () => void = () => {};

  return (
    <div className="pt-14 max-w-lg sm:max-w-[29.5rem] w-[95%] mx-auto">
      <main className="scale-95">
        <div className="py-6 px-10 rounded-lg border border-gray-300 bg-white">
          <div className="flex flex-col items-center mb-10">
            <img src={logo} className="w-[4.5rem]" />
            {emailExists ? <PasswordHeader /> : <EmailHeader />}
          </div>
          {emailExists ? (
            <PasswordBody setPg={setPage} />
          ) : (
            <EmailBody setPg={setPage} />
          )}
        </div>
      </main>
      <footer className="w-[90%] mx-auto my-2 px-2 flex justify-between items-center gap-5">
        <div className="flex justify-between items-center gap-5">
          <span className="text-xs">English (United Kingdom)</span>
          <IoMdArrowDropdown className="text-lg text-black" />
        </div>
        <div className="flex justify-start gap-7 items-center">
          <p className="text-xs">Help</p>
          <p className="text-xs">Privacy</p>
          <p className="text-xs">Terms</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
