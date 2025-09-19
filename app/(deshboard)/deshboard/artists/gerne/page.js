

'use client'


const Page = () => {
    return (
        <div className="h-fit">
            <h1 className="text-xl text-left pb-6">Photos:</h1>

            <div>
                <span className="block mb-1">Profile Photo:</span>
                <input
                    type="file"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>


            <div className="grid grid-cols-4 item-center gap-5 mt-8">
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
            </div>
        </div>
    )
}

export default Page;








const PhotoCard = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            {/* Delete Button */}
            <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                onClick={() => alert("Delete clicked!")}
            >
                ✕
            </button>

            {/* Photo */}
            <img
                src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                alt="Sample"
                className="w-full h-48 object-cover"
            />
        </div>
    );
};




