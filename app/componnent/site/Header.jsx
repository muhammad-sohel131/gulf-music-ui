"use client";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import AuthBtnandProfileForheader from "../AuthBtnAndProfileforHeader";
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
          <AuthBtnandProfileForheader />
        </div>
      </Container>
    </header>
  );
}
