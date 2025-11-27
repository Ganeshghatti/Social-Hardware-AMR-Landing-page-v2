import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google'

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','700'],  // choose weights you need
  variable: '--font-montserrat',      // optional — use for CSS variable
  display: 'swap',
})


export const metadata = {
  title: "Social Hardware",
  description:
    "We specialize in designing advanced all-terrain, multi-purpose robots for mission-critical tasks. Our cutting-edge systems prioritize safety.",
  keywords: ["robots", "automation", "AI", "Next.js", "technology"],
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
