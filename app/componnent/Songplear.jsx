export default function SongPlayer() {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 max-w-sm mx-auto">
            {/* Thumbnail */}
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3">
                <img
                    src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                    alt="Song Thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Song Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                This is the Song Title
            </h2>

            {/* Audio Player */}
            <div className="flex justify-center">
                <audio controls className="w-full">
                    <source src="/songs/song.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
}
