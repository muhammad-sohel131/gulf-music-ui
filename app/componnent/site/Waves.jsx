"use client";


const WavesSection = () => {
    // Demo open mic data (will be admin-controlled later)
    const latestOpenMic = {
        title: "Acoustic Vibes: Open Mic Night",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };

    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Side: Latest Open Mic Performance */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <a href={latestOpenMic.link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={latestOpenMic.thumbnail}
                        alt={latestOpenMic.title}
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                            {latestOpenMic.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">Watch now on YouTube</p>
                    </div>
                </a>
            </div>


            {/* Right Side: Static Text */}
            <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Waves</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Experience the raw talent of your favorite artists, musicians, and
                    bands through our open mic performances. Stay tuned for the latest
                    vibes, energy, and unforgettable moments.
                </p>
            </div>
        </section>
    );
};

export default WavesSection;
