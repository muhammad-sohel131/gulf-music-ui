"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FevArtist() {
    const artists = [
        { name: "BILLIE EILISH", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
        { name: "DADDY YANKEE", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
        { name: "CARDI B", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
        { name: "BRUNO MARS", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
        { name: "LAUV", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
        { name: "CHARLIE PUTH", img: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
    ];

    return (
        <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 text-center">
            <h4 className="text-gray-500 text-sm font-semibold tracking-widest mb-2">
                OUR GALLERY
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
                Watch Your Favourite Artist
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Venenatis cras sed felis eget velit aliquet sagittis. Facilisis gravida neque convallis a
                cras semper auctor neque. Diam quam nulla porttitor.
            </p>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                pagination={{ clickable: true }}
                navigation
                loop
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    1024: { slidesPerView: 5 },
                    768: { slidesPerView: 3 },
                    480: { slidesPerView: 1 },
                }}
                className="pb-10"
            >
                {artists.map((artist, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <Image
                                src={artist.img}
                                alt={artist.name}
                                width={300}
                                height={400}
                                className="w-full h-72 object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer bg-yellow-300">
                Read more
            </button>
        </section>
    );
}
