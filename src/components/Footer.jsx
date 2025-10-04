import { ArrowRight, Facebook } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 ">
      <div className="max-w-9xl flex flex-col py-16 md:flex-row justify-between gap-28  mx-12">
        <div className="flex flex-col items-start gap-10 md:w-1/3">
          <div className="">
            <h3 className="uppercase text-gray-400 text-sm font-semibold mb-4">
              General
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-500">
                  Products
                </a>
              </li>
              <li>
                <a href="/customise" className="hover:text-orange-500">
                  Customise
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:text-orange-500">
                  Company Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-400 text-sm font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex gap-5 text-2xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 sm:ml-10">
          <h2 className="text-4xl md:text-6xl font-medium mb-4">
            Engineer the Future. Today.
          </h2>
          <p className="text-gray-500 mb-6">
            Contact us as soon as possible to reach your hands towards the most
            advanced form of productivity
          </p>
          <form className="flex flex-col text-gray-900 gap-4 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 w-fit font-medium flex items-center gap-2"
            >
              Submit Now <ArrowRight/>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
