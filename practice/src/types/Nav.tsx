import React from 'react';
import { IoBagHandleSharp } from "react-icons/io5";
import { BsBagHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyLogo
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">Contact</a>
          </li>
          <BsBagHeart className='bg-white w-8 h-10 rounded-lg' />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
