import Container from "@/app/componnent/Container";
import SongPlayer from "@/app/componnent/Songplear";
import Image from "next/image";

export default function ArtistProfile() {
    return (
        <div className="">
            <Container>
                <div className="pb-[70px] pt-[170px]">
                    <div className="min-h-screen bg-gray-100 rounded-b-lg pb-20">
                        {/* Cover Photo Section */}
                        <div className="relative h-64 bg-gray-200">
                            <img
                                src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                alt="Cover Photo"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            {/* Profile Image */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                                <img
                                    src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                    alt="Profile"
                                    className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="mt-24 text-center px-5">
                            <h1 className="text-3xl font-bold text-gray-900">Md Emon Hossen</h1>
                            <p className="text-gray-500 text-sm mt-1">Pop Artist • New York</p>
                        </div>

                        {/* About Section */}
                        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Biography</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Emon's music journey started at a young age, inspired by classic pop icons. He has released
                                multiple tracks that gained millions of streams across platforms and continues to innovate
                                in his musical style.
                            </p>
                        </div>





                        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Photos</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                <div>
                                    <Image
                                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                        alt="Photo"
                                        width={1000}
                                        height={1000}
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                        alt="Photo"
                                        width={1000}
                                        height={1000}
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                        alt="Photo"
                                        width={1000}
                                        height={1000}
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </div>

                                <div>
                                    <Image
                                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                        alt="Photo"
                                        width={1000}
                                        height={1000}
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                                        alt="Photo"
                                        width={1000}
                                        height={1000}
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>












                        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Songs</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <SongPlayer />
                                <SongPlayer />
                                <SongPlayer />
                                <SongPlayer />
                                <SongPlayer />

                            </div>

                        </div>









                    </div>
                </div>
            </Container>
        </div>
    );
}
