import {  Bars3BottomRightIcon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {

  let links = [
    {name: 'Home', link: '/'},
    {name: 'Services', link: '/'},
    {name: 'About', link: '/'},
    {name: 'Contact', link: '/'}
  ]; 

  let [isOpen,setIsOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
        {/* logo */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <CodeBracketIcon className='w-7 h-7 text-blue-600'/>
          <span className='font-bold'>MyportFolio</span>
        </div>

        {/* Menu icon */}
        <div onClick={()=> setIsOpen(!isOpen) } className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
          {
            isOpen ?  <XMarkIcon/> :    <Bars3BottomRightIcon/>
          } 
        </div>

        {/* nav link */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
          {
            links.map((link, index) =>
                <li key={index} className='font-semibold my-7 md:my-0 md:ml-8'>
                  <a href="/"> {link.name}</a>
                </li>)
          }
          <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Get Started</button>
        </ul>
        
      </div>
    </div>
  )
}

export default Header