'use client'

import SongPlayer from "@/app/componnent/Songplear";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakeGet from "@/app/utilis/requestrespose/get";
import { useCallback, useEffect, useState } from "react";

const Page = () => {



    const token = getCookie();
    const [data, setdata] = useState(null);
    const [isloading, setisloading] = useState(false);



    const handleget = useCallback(async () => {
        setisloading(true);
        const res = await MakeGet('api/songs', token);
        setisloading(false);
        if (res) {
            console.log(res);
            setdata(res?.data?.songs);
        }
    }, [token]);



    useEffect(() => {
        handleget();
    }, [handleget]);







    return (
        <div className="h-fit">
            <h1 className="text-xl text-left pb-6">My Songs:</h1>
            <div className="grid grid-cols-4 item-center gap-5">
                {
                    data?.map((song, index) => {
                        return (
                            <SongPlayer key={index} song={song} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page;