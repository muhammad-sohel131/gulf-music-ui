"use client";


const CastsSection = () => {
    // Demo podcast data
    const latestPodcast = {
        title: "Building the Future: AI & Web Development",
        thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
    };

    return (
        <section className="bg-yellow-50">
            <div className="w-full max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side: Static Description */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Casts</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Tune into engaging podcast episodes featuring your favorite
                        personalities. Discover their past experiences, unique perspectives,
                        and exciting plans for the future — all in one place.
                    </p>
                </div>

                {/* Right Side: Latest Podcast */}
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <a href={latestPodcast.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={latestPodcast.thumbnail}
                            alt={latestPodcast.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                                {latestPodcast.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">Watch now on YouTube</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CastsSection;
