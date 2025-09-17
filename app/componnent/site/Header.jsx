"use client";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Container from "../Container";
import Navigation from "./Navigation";

export default function Header() {

  const pathname = usePathname();
  const [isnavOpen, setisnavOpen] = useState(false);
  const [scrollHeight, setscrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {

      setscrollHeight(window.scrollY);
    })

  });



  return (
    <header className={`text-white w-screen fixed top-0 left-0 z-40 ${pathname === "/" ? scrollHeight > 100 ? "bg-black py-1" : "bg-transparent py-1" : "bg-black py-1"}`}>
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href={'/'} className="w-fit">
            <Image className={`w-[90px] sm:w-[100px]  md:w-[140px]`} src={logo} alt="logo" />
          </Link>

          {/* Navigation Links */}
          <Navigation isnavOpen={isnavOpen} setisnavOpen={setisnavOpen} />

          <FaBars onClick={(e) => { setisnavOpen(true) }} className="text-2xl md:hidden text-yellow-200 cursor-pointer" />

          {/* Auth Buttons */}
          {
            true ? (
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col leading-none">
                  <span className="text-nowrap text-yellow-50">John deo</span>
                  <span className="nowrap text-xs text-right text-gray-200">artist</span>
                </div>
                <div>
                  <div className="border-2 border-yellow-200 bg-transparent rounded-full w-[45px] h-[45px]">

                  </div>

                </div>
              </div>
            ) : (
              <div className="w-fit space-x-4 hidden md:flex">
                <Link href={'/signin'} className="bg-transparent text-yellow-50  px-3 py-1 cursor-pointer rounded hover:bg-yellow-100 hover:text-black transition text-nowrap text-lg">
                  Sign In
                </Link>
                <Link href={'/signup'} className="bg-yellow-200 text-black px-3 py-1 cursor-pointer rounded hover:bg-yellow-100 transition text-nowrap text-lg">
                  Sign Up
                </Link>
              </div>
            )
          }
        </div>
      </Container>
    </header>
  );
}
