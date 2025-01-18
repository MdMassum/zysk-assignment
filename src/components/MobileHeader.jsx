import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { links } from "./Header";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <div className="p-4 flex justify-between items-center">
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
        <>
 
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
          ></div>

          {/* Full-screen mobile menu */}
          <div className="fixed inset-0 bg-white z-50 p-4">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Logo" className="h-8" />
              <button
                onClick={() => setIsMenuOpen(false)}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-8 space-y-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-800 hover:text-rose-500"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
