import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/Avatar.png'
import MobileHeader from './MobileHeader'
import { Link } from 'react-router-dom'


export const links = [
    {
        label:"Home",
        href:"#"
    },
    {
        label:"Products",
        href:"#"
    },
    {
        label:"Resources",
        href:"#"
    },
    {
        label:"Pricing",
        href:"#"
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
                        <Link
                            key={index}
                            to={link.href}
                            className="block font-semibold text-gray-600 hover:text-rose-500"
                        >
                            {link.label}
                        </Link>
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