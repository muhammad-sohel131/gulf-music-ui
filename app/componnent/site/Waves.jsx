
"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import tham from "../../../public/thamnail.jpg";
import Container from "../Container";

const WavesSection = () => {
    const latestPodcast = {
        title: "Uncle Emmington - The Furniture Song | Wave #87",
        thumbnail: tham,
        link: "https://youtu.be/1aqzOZtewp0?si=rzKpqAwQJsq6UwTG",
    };

    const favorites = Array(8).fill({
        name: "John Doe",
        genre: "Pop Music",
        thumbnail: tham,
    });

    return (
        <section className="">
            <Container>
                <div className="">
                    <div className="px-4 flex flex-col lg:flex-row gap-10">
                        {/* Left Side: Favorites */}
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Favorites</h2>
                            <div className="h-[525px] bg-white overflow-y-auto pr-2 rounded-xl scrollbar-thin scrollbar-thumb-gray-300">
                                {favorites.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 mb-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer group relative"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Play Icon on Hover */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                                <Play className="text-white w-6 h-6" />
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-md font-semibold text-gray-800 truncate">{item.name}</h4>
                                            <p className="text-sm text-gray-500 truncate">{item.genre}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Latest Podcast */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Waves</h2>
                                <p className="text-gray-600 text-base">
                                    Tune into engaging podcast episodes featuring your favorite personalities.
                                </p>
                            </div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                                <div href={latestPodcast.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={latestPodcast?.thumbnail}
                                        alt={latestPodcast.title}
                                        width={1000}
                                        height={1000}
                                        className="object-cover opacity-80 w-full h-auto"

                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{latestPodcast.title}</h3>
                                        <button className="bg-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
                                            Watch on YouTube
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WavesSection;




