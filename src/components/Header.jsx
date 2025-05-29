
import React from 'react'
import logo from '../assets/logo/hashtag.svg';
import UserButtons from './UserButtons';

const Header = () => {
  return (

    <header className='  text-white flex text-xl sticky top-0 shadow-xl shadow-slete-400 bg-slate-950 text-slete-200 px-8 py-4 items-end justify-between text-base z-10'>
        
   <a href="/">
 <img className='h-16 px-2' src={logo} alt='Logamarca hashtag'/>

   </a>


   
    <UserButtons/>
   </header>
  )
}

export default Header