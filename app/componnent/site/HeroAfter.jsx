"use client";

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaUser } from "react-icons/fa";
import heroAfterImage from "../../../public/heroAfterImage.jpg";
import Container from "../Container";

export default function HeroAfter() {
    return (
        <section className="bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Image Section */}
                    <div className="relative w-full lg:w-1/2">
                        <Image
                            src={heroAfterImage} // Replace with your image path
                            alt="Gulf Coast Music"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg object-cover w-full h-auto"
                        />
                        {/* Streaming Badge */}
                        <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-4 py-2 text-center">
                            <h3 className="text-xl font-bold">259+</h3>
                            <p className="text-gray-500 text-sm">Streaming</p>
                        </div>
                        {/* Hits Badge */}
                        <div className="absolute top-6 right-6 bg-white shadow-lg rounded-xl px-4 py-2 text-center">
                            <h3 className="text-xl font-bold">100+</h3>
                            <p className="text-gray-500 text-sm">Hits</p>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-gray-500 text-sm font-semibold tracking-widest mb-2">
                            ABOUT GULF COAST MUSIC
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
                            Catch The Hottest Live Shows On The Gulf Coast
                        </h2>
                        <p className="text-gray-600 mb-6">
                            From intimate jazz nights to high-energy rock concerts — explore the best upcoming live
                            music events across the Gulf Coast. Filter by city, artist, or venue and never miss a beat.
                        </p>

                        <div className="space-y-3 text-gray-700">
                            <p className="flex items-center gap-2 text-nowrap">
                                <FaCalendarAlt className="text-green-500" /> <strong>Live Event Calendar →</strong> Browse shows by date, genre, and location.
                            </p>
                            <p className="flex items-center gap-2 text-nowrap">
                                <FaUser className="text-green-500" /> <strong>Featured Artists →</strong> Discover talented musicians shaping the Gulf Coast sound.
                            </p>
                            <p className="flex items-center gap-2 text-nowrap">
                                <FaMapMarkerAlt className="text-green-500" /> <strong>Top Venues →</strong> Explore iconic spots where music comes alive.
                            </p>
                            <p className="flex items-center gap-2 text-nowrap">
                                <FaTicketAlt className="text-green-500" /> <strong>Easy Ticket Access →</strong> One-click links to buy tickets online.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
