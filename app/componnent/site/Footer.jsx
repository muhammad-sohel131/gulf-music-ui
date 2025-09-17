import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-10 mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="School Logo"
              className="w-[200px] mb-4"
            />
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-200 flex flex-col">
              <Link href={'/'}>→ Campus Contact</Link>
              <Link href={'/'}>→ Meet With Us</Link>
              <Link href={'/'}>→ Report Copyright</Link>
              <Link href={'/'}>→ Report on Security Issues</Link>
              <Link href={'/'}>→ Privacy Statement</Link>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-200 flex flex-col">
              <Link href={'/'}>→ Campus Contact</Link>
              <Link href={'/'}>→ Meet With Us</Link>
              <Link href={'/'}>→ Report Copyright</Link>
              <Link href={'/'}>→ Report on Security Issues</Link>
              <Link href={'/'}>→ Privacy Statement</Link>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-200 flex flex-col">
              <Link href={'/'} className="flex items-center gap-2"><MdPhone /> +880 1713 738679</Link>
              <Link href={'/'} className="flex items-center gap-2"><MdEmail /> chandashmshighschool@gmail.com</Link>
              <Link href={'/'} className="flex items-center gap-2"><MdLocationOn /> Chandash, Mohadevpur, Naogoan</Link>
            </ul>
            <div className="flex gap-4 mt-4 text-xl">
              <Link href="https://www.facebook.com/gulfcoastmusic/"><FaFacebookF /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="https://www.instagram.com/gulfcoastmusic/"><FaInstagram /></Link>
              <Link href="https://www.youtube.com/@TheGulfCoastMusic"><FaYoutube /></Link>
              <Link href="#"><FaWhatsapp /></Link>
              <Link href="#"><MdEmail /></Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="flex items-center justify-center w-full">
        <div className="text-center py-4 text-gray-300 text-sm border-t border-gray-600 w-fit px-20">
          Copyright © 2025 Gull Coast Music. All Rights Reserved ||
          <Link href={'https://sardaritbd.com/'} className="text-yellow-200 font-semibold"> Developed By Sardar IT Team</Link>
        </div>
      </div>
    </footer>
  );
}
