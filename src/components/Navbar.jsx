"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#F5F5F5] text-[#232323] border-b border-[#E5E5E5] w-full relative">
      <div className="w-full px-4 md:px-10 py-5 flex justify-between items-center">
        <ul className="hidden md:flex justify-between w-full text-md font-normal tracking-wide">
          <li>
            <Link href="/" className="hover:text-orange-600 transition">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-600 transition">
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              href="/#customise"
              className="hover:text-orange-600 transition"
            >
              CUSTOMISE
            </Link>
          </li>
          <li>
            <Link
              href="/#consultation"
              className="hover:text-orange-600 transition"
            >
              CONSULTATION
            </Link>
          </li>
          <li>
            <Link
              href="/#teleoperation"
              className="hover:text-orange-600 transition"
            >
              TELEOPERATION
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF6600]"
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#1a1a1a] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
            <span className="text-[#FF6600] font-semibold text-lg tracking-wide">
              MENU
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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

          {/* Navigation Links */}
          <ul className="flex-1 px-6 py-8 space-y-1">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="flex items-center justify-between py-4 px-4 text-white hover:bg-[#FF6600] hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium tracking-wide">HOME</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={handleLinkClick}
                className="flex items-center justify-between py-4 px-4 text-white hover:bg-[#FF6600] hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium tracking-wide">PRODUCTS</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/#customise"
                onClick={handleLinkClick}
                className="flex items-center justify-between py-4 px-4 text-white hover:bg-[#FF6600] hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium tracking-wide">CUSTOMISE</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/#consultation"
                onClick={handleLinkClick}
                className="flex items-center justify-between py-4 px-4 text-white hover:bg-[#FF6600] hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium tracking-wide">CONSULTATION</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/#teleoperation"
                onClick={handleLinkClick}
                className="flex items-center justify-between py-4 px-4 text-white hover:bg-[#FF6600] hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium tracking-wide">TELEOPERATION</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <div className="px-6 py-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} Social Hardware
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
