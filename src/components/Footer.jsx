import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">

        <div className="space-y-6 md:col-span-1">
          <div>
            <Image src="/logo1.png" alt="img" width={50} height={50}/>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Social Hardware
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Innovating the future of robotics with cutting-edge automation
            systems designed for real-world mission-critical operations.
          </p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-orange-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">
            General
          </h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/products" className="hover:text-orange-500">Products</a></li>
            <li><a href="/customise" className="hover:text-orange-500">Customise</a></li>
            <li><a href="/profile" className="hover:text-orange-500">Company Profile</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">
            Our Solutions
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500">Autonomous Robots</a></li>
            <li><a href="#" className="hover:text-orange-500">Industrial Automation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates on robotics, innovation, and future tech.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-gray-500 focus:border-orange-500 focus:outline-none py-2 text-white"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 px-6 py-2 flex items-center gap-2 rounded-md text-white font-medium shadow-md"
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Social Hardware. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-500">Support</a>
        </div>
      </div>
    </footer>
  );
}
