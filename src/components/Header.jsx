import React from 'react';
import logo from '../assets/logo/hashtag.svg';
import UserButtons from './UserButtons';

const Header = () => {
  return (
    <header className="text-white flex flex-wrap items-center justify-between bg-slate-950 px-4 py-3 shadow-xl text-xl sticky top-0 z-10">
      <a href="/" className="flex items-center">
        <img
          className="h-14 sm:h-16 rounded-lg mx-2 my-1 w-full"
          src={logo}
          alt="Logomarca hashtag"
        /> <h1 className='text-white flex flex-wrap mt-6 justify-between bg-slate-950 px-2 py-1 shadow-xl  text-2xl'>Magazine</h1>
      </a>

      <div className="w-full sm:w-auto flex justify-end mt-2 sm:mt-0">
        <UserButtons />
      </div>
    </header>
  );
};

export default Header;
