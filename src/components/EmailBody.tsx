import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MdError } from 'react-icons/md';
import BodyProps from '../types/body-props';

function EmailBody({ setPg, setIsLoading }: BodyProps) {
  const [email, setEmail] = useState('');
  const { mutate, isLoading, error } = useMutation((email) =>
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then(() => setIsLoading(false))
  );
  const submitEmail: (e: React.SyntheticEvent) => void = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;
    mutate();
    setPg();
  };

  return (
    <form onSubmit={submitEmail}>
      <div className="relative w-full h-fit mb-10">
        <>
          <input
            type="email"
            className={`text-base font-normal p-4 border border-gray-400 w-full outline-none rounded-md mb-[7px] focus:mb-1 peer focus:outline-none focus:border-[3px] focus:border-blue-700 transition duration-200 ease-in-out ${
              error && 'border-red-700 focus:border-red-700'
            }`}
            name="email"
            value={email}
          />
          <p
            className={`absolute z-10 transition-all duration-200 ease-in-out top-4 peer-focus:-top-2 ml-4 text-base peer-focus:text-xs text-gray-500 peer-focus:text-blue-700 pointer-events-none bg-white px-2 ${
              error && 'text-red-700 peer-focus:text-red-700 -top-2 text-xs'
            }`}
          >
            Email or phone
          </p>
          {error && (
            <div className="flex justify-start items-center gap-2 mb-2">
              <MdError className="text-red-700 text-xl" />
              <span className="text-sm font-light text-red-700">
                Couldn&apos;t find your google account
              </span>
            </div>
          )}
          <a href="#" className="text-base font-medium text-blue-700">
            Forgot email?
          </a>
        </>
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
        <button
          type="submit"
          className="rounded-md bg-blue-700 text-white text-base font-medium leading-[0] py-5 px-6"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default EmailBody;
