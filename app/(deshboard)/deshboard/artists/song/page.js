'use client'

import Loading from "@/app/componnent/Loading";
import SongPlayer from "@/app/componnent/Songplear";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakeGet from "@/app/utilis/requestrespose/get";
import MakePost from "@/app/utilis/requestrespose/post";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {



    const token = getCookie("token");
    const [isloading, setisloading] = useState(false);
    const [title, settitle] = useState('');
    const [song, setsong] = useState('');
    const [data, setdata] = useState(null);








    const handleget = useCallback(async () => {
        setisloading(true);
        const res = await MakeGet('api/songs', token);
        setisloading(false);
        if (res) {
            console.log(res);
            setdata(res?.data?.songs);
            toast.success(res?.message);
        } else {
            toast.error("Something went wrong");
        }
    }, [token]);



    useEffect(() => {
        handleget();
    }, [handleget]);







    /********* add songs function is here *********/
    async function addSong() {


        const formData = {
            title,
            link: song
        }


        if (title && song) {

            setisloading(true);
            const res = await MakePost('api/songs', formData, token);

            console.log(res);

            setisloading(false);
            if (res) {
                handleget();
                toast.success(res?.message);
            } else {
                toast.error("Something went wrong");
            }
        } else {
            toast.warn('Please enter song title and song link');
        }

    }





    return (
        <div className="h-fit">
            <h1 className="text-xl text-left pb-6">Upload Songs:</h1>
            {isloading && <Loading />}

            <div>
                <span className="block mb-1">Song Title:</span>
                <input onChange={(e) => { settitle(e.target.value) }}
                    type="text"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>

            <div className="mt-3">
                <span className="block mb-1">Embeddable Song:</span>
                <input
                    onChange={(e) => { setsong(e.target.value) }}
                    type="text"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>

            <div className="flex justify-end">
                <button onClick={addSong} className="text-black bg-yellow-300 cursor-pointer border border-gray-200 p-2 rounded-md mt-4">Add Song</button>
            </div>


            <div className="grid grid-cols-4 item-center gap-6 mt-6">

                {
                    data?.map((song, index) => {
                        return (
                            <SongPlayer key={index} song={song} handleget={handleget} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page;



