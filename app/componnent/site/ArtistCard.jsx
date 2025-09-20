'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ArtistCard() {

    const pathname = usePathname();

    return (
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
            {/* Cover Image */}
            <div className="relative">
                <img
                    src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                    alt="Cover"
                    className="w-full h-40 object-cover rounded-t-2xl"
                />
                {/* Profile Image */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <img
                        src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="pt-12 px-5 pb-5 text-center">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Md Emon Hossen
                </h3>
                <p className="text-sm text-gray-500 mt-1">Pop • New York</p>

                <p className="text-gray-600 text-sm mt-3">
                    Passionate artist creating soulful music blending modern pop and classical elements.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                    <Link href={`${pathname}/34`} className="px-4 py-2 text-sm font-medium border rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}


