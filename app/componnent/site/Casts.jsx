"use client";

import Image from "next/image";
import tham from "../../../public/thamnail.jpg";

const CastsSection = () => {
    const latestPodcast = {
        title: "Uncle Emmington - The Furniture Song | Wave #87",
        thumbnail: { tham },
        link: "https://youtu.be/1aqzOZtewp0?si=rzKpqAwQJsq6UwTG",
    };

    const favorites = Array(8).fill({
        name: "John Doe",
        genre: "Pop Music",
        thumbnail: latestPodcast.thumbnail,
    });

    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
                {/* Left Side: Favorite List */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-4">Your Favorites</h2>
                    <div className="h-[525px] bg-white overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
                        {favorites.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex gap-3 p-3 mb-3 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
                            >
                                <div className="w-24 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                                    <Image
                                        src={tham}
                                        alt={item.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-md sm:text-lg font-semibold text-gray-800 truncate">{item.name}</h4>
                                    <p className="text-sm sm:text-md text-gray-500 truncate">{item.genre}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Latest Podcast */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Casts</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Tune into engaging podcast episodes featuring your favorite personalities.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300">
                        <a href={latestPodcast.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-60 sm:h-72 lg:h-92">
                                <Image
                                    src={tham}
                                    alt={latestPodcast.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
                                    {latestPodcast.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-500 mt-2">Watch now on YouTube</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CastsSection;




