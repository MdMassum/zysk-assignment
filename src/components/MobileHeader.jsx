import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/Avatar.png'
import { useState } from "react";
import { links } from "./Header";
import { Link } from 'react-router-dom';


const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="block md:hidden p-4">
            <div className="flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-8" />
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="mt-4 space-y-2">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="block text-gray-800 hover:text-rose-500"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileHeader