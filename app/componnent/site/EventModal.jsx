"use client";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { FaEnvelope, FaFacebookF, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import organizerImg from "../../../public/postcast.jpg";
import thumb from "../../../public/thamnail.jpg";

export default function EventModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-auto px-4 py-8">
      <div className="bg-white w-full max-w-4xl mt-[180px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 uppercase">
          KAT DEAL LIVE AT BRICKYARD
        </h2>

        {/* Top Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center border rounded p-4 mb-4">
          <div>
            <p className="font-semibold text-gray-600">DATE</p>
            <p>Sep 29 2025 - Oct 01 2025</p>
            <p className="text-sm text-red-500 font-semibold">Expired!</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">TIME</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">COST</p>
            <p>$79.00</p>
          </div>
        </div>

        {/* Event Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={thumb} // You need to put this image in public/
            alt="Event Thumbnail"
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 text-center">
          Join us for LIVE music from Kat Deal at 9pm <br />
          <a
            href="https://www.facebook.com/events/2482312098799571/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            View on Facebook
          </a>
        </p>

        {/* Organizer */}
        <div className="flex justify-between mt-10">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-shrink-0">
              <Image
                src={organizerImg} // Put organizer image in /public
                alt="Organizer"
                width={260}
                height={260}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <p className="font-bold uppercase mb-2">Organizer</p>
              <p className="text-gray-800 font-semibold">Rayhan</p>
              <p className="text-yellow-600 font-medium mt-2 flex gap-2"><FaPhoneAlt /> 01822559945</p>
              <p className="text-yellow-600 font-medium mt-2 flex gap-2"><FaEnvelope /> example@gmail.com</p>
            </div>
          </div>
          <div>
            <QRCodeSVG value="https://gulf-coast.vercel.app/" />
          </div>
        </div>

        {/* Share */}
        <div className="mb-6">
          <p className="text-center font-bold uppercase mb-2 border-b pb-2">Share This Event</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-[#3b5998] text-white p-2 rounded"><FaFacebookF /></a>
            <a href="#" className="bg-[#1DA1F2] text-white p-2 rounded"><FaTwitter /></a>
            <a href="#" className="bg-[#0077b5] text-white p-2 rounded"><FaLinkedin /></a>
            <a href="#" className="bg-red-500 text-white p-2 rounded"><FaEnvelope /></a>
          </div>
        </div>

      </div>
    </div >
  );
}
