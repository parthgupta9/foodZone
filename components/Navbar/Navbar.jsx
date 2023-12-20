import React from 'react';
import logo from "../../assets/food-logo.png"
import {FaCartShopping} from 'react-icons/fa6';
import Darkmode from '../Darkmode';

const Navbar = () => {
  return (
   <div className="shadow-md bg-white py-3 dark:bg-gray-900 dark:text-white duration-200 color:black">
   <div className="container ">
    <div className="flex justify-between items-center">
        <div className="" >
            <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold" >
               <img src={logo} alt="Foodie Zone"
               className="w-10" />
               Foodie
            </a>
        </div>
  
    <div>
        <ul className="hidden sm:flex gap-4">
            <li>
                <a className="inline-block py-3 px-4 hover:text-primary font-semibold text-lg" href="#" >Home</a>
            </li>
            <li>
                <a className="inline-block py-3 px-4 hover:text-primary font-semibold text-lg" href="#">About</a>
            </li>
            <li>
                <a className="inline-block py-3 px-4 hover:text-primary font-semibold text-lg" href="#">Contact</a>
            </li>
        </ul>
    </div>
    <div>
        <Darkmode/>
    </div>
    <div>
        <button className="bg-gradient-to-r from-bg-primary to bg-secondary text-white px-5 py-1 md:rounded-full hover:scale-125 duration-300 flex items-center gap-2">
            Order
         <FaCartShopping className="text-xl "/>
        </button>
    </div>
   </div>

   </div>
   </div>
    
  )
}

export default Navbar;