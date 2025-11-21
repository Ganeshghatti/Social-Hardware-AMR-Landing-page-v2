import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] font-geist w-full pt-16 pb-10">
      <div
        className="mx-auto px-5 sm:px-10 
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                  gap-10 lg:gap-20"
      >
        <div className="space-y-6 max-w-sm">
          <h1 className="text-[#333333] font-semibold text-2xl">Contacts</h1>
          <h2 className="text-lg font-medium text-[#333333] tracking-wide">
            Questions? Let’s talk cobots.
          </h2>
          <p className="text-[#333333] leading-relaxed text-sm font-medium">
            We’re ready to help with product options, specs, pricing, and to
            discuss distributor partnerships and ongoing support.
          </p>
          <div className="gap-2 flex flex-col">
            <div className="gap-2 flex">
              <Image src="/SVG.png" alt="m" width={15} height={10} />
              <p className="text-[#333333] leading-relaxed text-sm font-medium">
                +91 7337743354
              </p>
            </div>
            <div className="gap-2 flex">
              <Image src="/SVG (1).png" alt="m" width={15} height={10} />
              <p className="text-[#333333] leading-relaxed text-sm font-medium">
                info@socialhardware.in
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm">
          <h1 className="text-[#333333] font-semibold text-2xl">Locations</h1>

          <div>
            <h2 className="text-[#000000] text-md font-medium mt-4">
              Corporate Office:
            </h2>
            <p className="text-[#333333] mt-3 text-sm font-medium">
              8, 34/4, 3rd Cross Rd, Pragathi Layout, Veerannapalya, Bengaluru,
              Karnataka 560045, India
            </p>
          </div>

          <div>
            <h2 className="text-[#000000] text-md font-medium mt-4">
              R&D Lab:
            </h2>
            <p className="text-[#333333] mt-3 text-sm font-medium">
              679, 9th A Cross Rd, West of Chord Road 2nd Stage, Basaveshwar
              Nagar, Bengaluru, Karnataka 560086, India
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[#333333] font-semibold text-2xl">
            ISO Certifications
          </h1>

          <ul className="list-disc pl-5 space-y-2 mt-5">
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISO 9001:2015
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISO 31000:2018
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISO 31000:2018
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISO 13850:2015
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISO 10218-1:2011
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                ISOMEC 17025
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-[#333333] font-semibold text-2xl">Quick Links</h1>

          <ul className="space-y-3 mt-4">
            <li>
              <Link
                href="/"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#product"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#customise"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Customise
              </Link>
            </li>
            <li>
              <Link
                href="#profile"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Company Profile
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-8xl mx-auto px-6 mt-10 pt-6 border-t border-gray-700 
                  flex flex-col md:flex-row justify-between text-sm"
      >
        <div className="flex justify-between w-full mx-10">
          <p className="text-[#333333]  text-sm font-medium">
            Terms & Conditions
          </p>
          <p className="text-[#333333]  text-sm font-medium">
            © {new Date().getFullYear()} Social Hardware International Pvt. Lrd.
            All rights reserved.{" "}
          </p>

          <div className="text-[#333333]  text-sm font-medium">
            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
