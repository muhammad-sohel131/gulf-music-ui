

'use client'

import Loading from "@/app/componnent/Loading";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import handleFileChange from "@/app/utilis/helper/handlefilechange";
import useLoadingStore from "@/store/useLoadingStore";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";


const Page = () => {



    const token = getCookie();
    const { isLoading, setLoading } = useLoadingStore();
    const [allPhotos, setallPhotos] = useState(null);
    const [photo, setphoto] = useState('');



    const getallphoto = useCallback(async () => {
        setLoading(true);

        const res = await MakeGet(`api/artists`, token);

        if (res) {
            setallPhotos(res?.data);
            toast.success(res?.data?.message);
        } else {
            toast.error(res?.message);
        }


        setLoading(false);
    }, [token])



    /******* run one time and get single profile data *******/
    useEffect(() => {
        getallphoto();
    }, [])




    /************** hanlde sunmite function is here ****************/
    const handleSubmit = async () => {
        setLoading(true);


        console.log(data);


        const res = await MakePut(`api/artists/${id}`, { photo }, token);


        if (res) {
            toast.success(res?.message);
            getallphoto();
        } else {
            toast.error("There was server side problem");
        }


        setLoading(false);

    };



















    return (
        <div className="h-fit">
            {isLoading && <Loading />}
            <h1 className="text-xl text-left pb-6">Photos:</h1>

            <div>
                <span className="block mb-1">Profile Photo:</span>
                <input
                    type="file"
                    onChange={(e) => { handleFileChange(e, setphoto) }}
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>


            {
                allPhotos ? (
                    <div className="grid grid-cols-4 item-center gap-5 mt-8">


                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                    </div>
                ) : (
                    <div className="grid grid-cols-4 item-center gap-5 mt-8">
                        <h3>NO Image Found</H3>
                    </div>
                )
            }



            <ToastContainer />
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
            <Image
                width={1000}
                height={1000}
                src="https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg"
                alt="Sample"
                className="w-full h-48 object-cover"
            />
        </div>
    );
};




