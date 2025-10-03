import { Play } from "lucide-react"
import Image from "next/image"
export default function MusicList({ list, change }) {
    return (
        <>
            {list.map((item, idx) => (
                <div
                    key={idx}
                    onClick={() => change(idx)}
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
        </>
    )
}
