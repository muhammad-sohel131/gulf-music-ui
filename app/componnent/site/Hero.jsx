"use client";

import Link from "next/link";
import { useState } from "react";
import PlayPuseBtn from "./PlayPuseBtn";


const HeroSection = () => {

    const [play, setplay] = useState(true);

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted={play}
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dmo0gctub/video/upload/v1758253287/hero_p0pi6d.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay (Dark Layer for Readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Hero Content */}
            <div className="relative z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-100">
                    Welcome to Gulf Coast Music
                </h1>
                <p className="text-lg md:text-2xl mb-6 text-yellow-50">
                    Experience the best with stunning visuals and powerful performance.
                </p>
                <div className="mt-12">
                    <Link
                        href="/"
                        className="bg-yellow-200 hover:bg-yellow-100  font-semibold py-3 text-yellow-900 px-6 rounded-lg transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            <PlayPuseBtn play={play} setplay={setplay} />
        </section>
    );
};

export default HeroSection;
