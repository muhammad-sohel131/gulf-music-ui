
"use client";
import Image from "next/image";
import { useState } from "react";
import thubm from "../../../public/thamnail.jpg";
import Container from "../Container";
import MusicList from "../shared/MusicList";

const CastsSection = () => {
    const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);
    const latestPodcast = [
        {
            title: "Uncle Emmington - The Furniture Song | Wave #87",
            thumbnail: thubm,
            link: "https://youtube.com/watch?v=2bqzYTeuvw1",
        },
        {
            title: "DJ Snare - Electric Dreams | Wave #88",
            thumbnail: "https://cdn.pixabay.com/photo/2020/03/10/19/12/nature-4919960_640.jpg",
            link: "https://youtube.com/watch?v=2bqzYTeuvw1",
        },
        {
            title: "Luna Vale - Starlight Echoes | Wave #89",
            thumbnail: "https://cdn.pixabay.com/photo/2021/07/31/20/21/gulf-6513003_640.jpg",
            link: "https://youtube.com/watch?v=3crxZTgxyz2",
        },
        {
            title: "MC Drift - Bassline Voyage | Wave #90",
            thumbnail: "https://cdn.pixabay.com/photo/2017/09/21/18/45/beach-2772902_640.jpg",
            link: "https://youtube.com/watch?v=4dszZUjklm3",
        },
        {
            title: "The Static Seas - Digital Tide | Wave #91",
            thumbnail: "https://cdn.pixabay.com/photo/2021/08/05/06/34/naples-6523243_640.jpg",
            link: "https://youtube.com/watch?v=5etvZYabcw4",
        },
        {
            title: "Nova Pulse - Orbit Runner | Wave #92",
            thumbnail: "https://cdn.pixabay.com/photo/2020/07/11/01/16/dunedin-5392514_640.jpg",
            link: "https://youtube.com/watch?v=6fuwZXdefv5",
        },
        {
            title: "Echo Division - Mirage Bloom | Wave #93",
            thumbnail: "https://cdn.pixabay.com/photo/2017/03/27/11/53/bay-2178192_640.jpg",
            link: "https://youtube.com/watch?v=7gvxZYghi6",
        },
        {
            title: "Neon Grave - Luminous Fade | Wave #94",
            thumbnail: "https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974_640.jpg",
            link: "https://youtube.com/watch?v=8hwyZZjklm7",
        },
    ]

    const favorites = [
        {
            name: "John Doe",
            genre: "Pop Music",
            thumbnail: thubm,
        },
        {
            name: "Jane Smith",
            genre: "Rock Music",
            thumbnail: 'https://cdn.pixabay.com/photo/2020/03/10/19/12/nature-4919960_640.jpg',
        },
        {
            name: "Alice Cooper",
            genre: "Country Music",
            thumbnail: 'https://cdn.pixabay.com/photo/2021/07/31/20/21/gulf-6513003_640.jpg',
        },
        {
            name: "Bob Marley",
            genre: "Reggae Music",
            thumbnail: 'https://cdn.pixabay.com/photo/2017/09/21/18/45/beach-2772902_640.jpg',
        },
        {
            name: "Lana Del Rey",
            genre: "Indie Pop",
            thumbnail: 'https://cdn.pixabay.com/photo/2021/08/05/06/34/naples-6523243_640.jpg',
        },
        {
            name: "Ed Sheeran",
            genre: "Folk Music",
            thumbnail: 'https://cdn.pixabay.com/photo/2020/07/11/01/16/dunedin-5392514_640.jpg',
        },
        {
            name: "Ariana Grande",
            genre: "R&B",
            thumbnail: 'https://cdn.pixabay.com/photo/2017/03/27/11/53/bay-2178192_640.jpg',
        },
        {
            name: "The Weeknd",
            genre: "Pop Music",
            thumbnail: 'https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974_640.jpg',
        }]

    return (
        <section className="bg-gray-50">
            <Container>
                <div className="">
                    <div className="mx-auto px-4 flex flex-col lg:flex-row gap-10">
                        {/* Left Side: Favorites */}
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Favorites</h2>
                            <div className="h-[525px] bg-white overflow-y-auto pr-2 rounded-xl scrollbar-thin scrollbar-thumb-gray-300">
                                <MusicList list={favorites} change={setCurrentPodcastIndex} />
                            </div>
                        </div>

                        {/* Right Side: Latest Podcast */}
                        <div className="w-full h-[555px] lg:w-2/3 flex flex-col gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Casts</h2>
                                <p className="text-gray-600 text-base">
                                    Tune into engaging podcast episodes featuring your favorite personalities.
                                </p>
                            </div>

                            <div className="relative w-full  rounded-2xl overflow-hidden shadow-lg">
                                <div href={latestPodcast[currentPodcastIndex].link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={latestPodcast[currentPodcastIndex]?.thumbnail}
                                        alt={latestPodcast[currentPodcastIndex].title}
                                        width={1000}
                                        height={1000}
                                        className="object-cover opacity-80 w-full h-auto"

                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{latestPodcast[currentPodcastIndex].title}</h3>
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

export default CastsSection;
