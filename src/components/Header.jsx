import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/Avatar.png'
import MobileHeader from './MobileHeader'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



export const links = [
    {
        label:"Home",
        href:"#",
        dropdown:false
    },
    {
        label:"Products",
        href:"#",
        dropdown:true
    },
    {
        label:"Resources",
        href:"#",
        dropdown:true
    },
    {
        label:"Pricing",
        href:"#",
        dropdown:false
    },
]
const Header = () => {
  return (
    <>

        {/* desktop device */}
        <div className='hidden md:flex justify-between items-center w-[85%] m-auto p-4 text-black'>
            <div className='flex gap-7 items-center'>
                <img src={logo} alt="Logo" />
                {
                    <div className="flex gap-7">
                    {links.map((link, index) => (
                        <div className='flex gap-1 items-center justify-center hover:text-rose-500'>
                            <Link
                            key={index}
                            to={link.href}
                            className="block font-semibold text-gray-600 hover:text-rose-500"
                        >
                            {link.label}
                        </Link>
                        {link.dropdown && <MdOutlineKeyboardArrowDown className='mt-1'/>}
                        </div>
                    ))}
                    </div>
                }
            </div>

            <div className='flex'>
                <img src={avatar} alt=""  className='rounded-full'/>
            </div>
        </div>

        {/* Mobile device */}
        <MobileHeader/>
    </>
  )
}

export default Header