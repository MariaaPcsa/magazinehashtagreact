import React from 'react';
import logo from '../assets/logo/hashtag.svg';
import UserButtons from './UserButtons';

const Header = () => {
  return (
    <header className="text-white flex flex-wrap items-center justify-between bg-slate-950 px-4 py-3 shadow-xl sticky top-0 z-10">
      <a href="/" className="flex items-center">
        <img
          className="h-12 sm:h-16 rounded-lg mx-2 my-1"
          src={logo}
          alt="Logomarca hashtag"
        />
      </a>

      <div className="w-full sm:w-auto flex justify-end mt-2 sm:mt-0">
        <UserButtons />
      </div>
    </header>
  );
};

export default Header;
