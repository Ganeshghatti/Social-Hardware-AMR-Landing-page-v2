"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E5E5E5] text-[#232323] border-b-2 border-gray-300  w-full">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <ul className="hidden md:flex justify-between w-full text-md font-normal tracking-wide">
          <li>
            <a href="/" className="hover:text-gray-900 transition">HOME</a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-900 transition">PRODUCTS</a>
          </li>
          <li>
            <a href="/customise" className="hover:text-gray-900 transition">CUSTOMISE</a>
          </li>
          <li>
            <a href="/company" className="hover:text-gray-900 transition">COMPANY PROFILE</a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-900 transition">GALLERY</a>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-2">
          <li><a href="/" className="block hover:text-gray-400 transition">HOME</a></li>
          <li><a href="/products" className="block hover:text-gray-400 transition">PRODUCTS</a></li>
          <li><a href="/customise" className="block hover:text-gray-400 transition">CUSTOMISE</a></li>
          <li><a href="/company" className="block hover:text-gray-400 transition">COMPANY PROFILE</a></li>
          <li><a href="/gallery" className="block hover:text-gray-400 transition">GALLERY</a></li>
        </ul>
      )}
    </nav>
  );
}
