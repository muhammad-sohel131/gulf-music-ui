"use client";

import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakePost from "@/app/utilis/requestrespose/post";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminLatestPodcast = () => {

    const token = getCookie();
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [link, setLink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !thumbnail || !link) {
            alert("Please fill in all fields.");
            return;
        }


        const res = await MakePost('/api/admin/wave', { title, thumbnail, link }, token);

        if (res) {
            toast.success(res?.message);
        }

    };

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Latest Podcast</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Podcast Title</label>
                    <input
                        type="text"
                        placeholder="Enter podcast title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Thumbnail URL</label>
                    <input
                        type="text"
                        placeholder="Enter thumbnail URL"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* YouTube Link */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">YouTube Link</label>
                    <input
                        type="text"
                        placeholder="Enter YouTube video link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Preview */}
                {thumbnail && (
                    <div className="mt-4">
                        <p className="text-gray-700 font-medium mb-2">Preview:</p>
                        <Image
                            width={1000}
                            height={1000}
                            src={thumbnail}
                            alt="Podcast Thumbnail"
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="w-fit  px-4 bg-yellow-300 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition-colors"
                    >
                        Save Podcast
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminLatestPodcast;
