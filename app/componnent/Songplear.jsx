'use client'

import { toast } from "react-toastify";
import convertDriveLink from "../utilis/helper/convertDriveLink";
import getCookie from "../utilis/helper/cookie/gettooken";
import MakeDelete from "../utilis/requestrespose/delete";

export default function SongPlayer({ song, handleget }) {


    const token = getCookie();


    /**************** delectsong function is here ********************/
    async function delectsong(e, id) {
        e.preventDefault();
        const response = await MakeDelete(`api/songs/${id}`, token);
        if (response) {
            toast.success(response?.message);
            handleget();
        } else {
            toast.error("Something went wrong");
        }
    }



    return (
        <div className="bg-white shadow-md rounded-xl p-4 w-full col-span-1 overflow-hidden relative">

            <button onClick={(e) => delectsong(e, song?.id)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 transition cursor-pointer"
            >
                ✕
            </button>

            {/* Song Title */}
            <h2 className="text-md text-gray-900 line-clamp-1 mb-2 text-left">
                {song?.title}
            </h2>

            {/* Audio Player */}
            <div className="flex justify-center">
                <audio controls className="w-full">
                    <source src={convertDriveLink('https://drive.google.com/file/d/1Y5gjdDIsdQjszeC3FieuY7a02gMWnB22/view?usp=sharing')} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
}
