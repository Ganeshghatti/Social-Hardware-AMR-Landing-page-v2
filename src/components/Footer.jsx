"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import linkedin from "@/../public/linkedin_icon.png";

export default function Footer() {
  const pathname = usePathname();

  // Helper function to get correct href for section links
  const getSectionHref = (sectionId) => {
    if (pathname === "/") {
      return sectionId; // Just the anchor on home page
    }
    return `/${sectionId}`; // Full path from other routes
  };

  return (
    <footer className="  font-geist w-full">
      <div
        className="mx-auto px-5 py-20 md:px-14  bg-[#F5F5F5]
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                  gap-10 lg:gap-25"
      >
        <div className="space-y-6 max-w-sm text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-[#333333] font-medium text-2xl">Contacts</h1>
          <h2 className="text-lg font-medium text-[#333333] tracking-wide">
            Questions? Let’s talk cobots.
          </h2>
          <p className="text-[#333333] leading-relaxed text-sm font-medium">
            We’re ready to help with product options, specs, pricing, and to
            discuss distributor partnerships and ongoing support.
          </p>
          <div className="gap-2 flex flex-col items-center md:items-start">
            <div className=" flex">
              <a href="tel:+917337743354">
                <p className="text-[#333333] leading-relaxed text-sm font-semibold cursor-pointer">
                  Call: +91 7337743354
                </p>
              </a>
            </div>
            <div className=" flex ">
              <a href="mailto:info@socialhardware.in">
                <p className="text-[#333333] leading-relaxed text-sm font-semibold cursor-pointer">
                  Email: info@socialhardware.in{" "}
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm text-center md:text-start mx-auto md:mx-0">
          <h1 className="text-[#333333] font-medium text-2xl">Locations</h1>

          <div>
            <h2 className="text-[#000000] text-lg font-medium mt-4">
              Corporate Office:
            </h2>
            <p className="text-[#333333] mt-3 text-sm font-medium">
              8, 34/4, 3rd Cross Rd, Pragathi Layout, Veerannapalya, Bengaluru,
              Karnataka 560045, India
            </p>
          </div>

          <div>
            <h2 className="text-[#000000] text-lg font-medium mt-4">
              R&D Lab:
            </h2>
            <p className="text-[#333333] mt-3 text-sm font-medium">
              679, 9th A Cross Rd, West of Chord Road 2nd Stage, Basaveshwar
              Nagar, Bengaluru, Karnataka 560086, India
            </p>
          </div>
        </div>

        <div className="md:ml-10 items-center flex flex-col text-center md:text-left">
          <h1 className="text-[#333333] font-medium text-2xl">
            Certifications
          </h1>

          <ul className="list-disc pl-5 space-y-2 mt-5 text-left">
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISO 9001:2015
              </span>
            </li>
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISO 31000:2018
              </span>
            </li>
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISO 31000:2018
              </span>
            </li>
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISO 13850:2015
              </span>
            </li>
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISO 10218-1:2011
              </span>
            </li>
            <li>
              <span className="font-medium text-md text-[#333333]">
                ISOMEC 17025
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[#333333] font-medium text-2xl text-center md:text-start">
            Site
          </h1>

          <ul className="space-y-3 mt-4 text-center md:text-start">
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
                href={getSectionHref("#product")}
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={getSectionHref("#consultation")}
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Consultation{" "}
              </Link>
            </li>
            <li>
              <Link
                href={getSectionHref("#customise")}
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Customization{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/tele-operation"
                className="font-medium text-md text-[#333333] hover:text-orange-600"
              >
                Teleoperation{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-8xl mx-auto px-6 py-8 pt-6  bg-[#FFFFFF] 
                  flex flex-col md:flex-row justify-between text-sm text-center md:text-start"
      >
        <div className=" flex flex-col md:flex-row justify-between w-full md:mx-10 gap-4 items-center md:items-start">
          <div className="flex gap-2">
            {/* <a href="https://x.com/social_hardware" target="_blank">
            </a> */}
            <a
              href="https://www.linkedin.com/company/social-hardware"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="LinkedIn - Social Hardware"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="text-[#333333] text-md font-medium">
            <Link
              href="/terms-and-condition"
              className="hover:text-orange-500 "
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-[#333333]  text-sm font-medium">
            © {new Date().getFullYear()} Social Hardware International Pvt. Ltd.
            All rights reserved.{" "}
          </p>

          <div className="text-[#333333]  text-sm font-medium">
            <Link href="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
