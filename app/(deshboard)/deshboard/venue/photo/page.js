

'use client'

import Loading from "@/app/componnent/Loading";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import handleFileChange from "@/app/utilis/helper/handlefilechange";
import MakeDelete from "@/app/utilis/requestrespose/delete";
import MakeGet from "@/app/utilis/requestrespose/get";
import MakePost from "@/app/utilis/requestrespose/post";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const Page = () => {



    const token = getCookie("token");
    const [isloading, setisloading] = useState(false);
    const [photo, setphoto] = useState('');
    const [data, setdata] = useState(null);








    const handleget = useCallback(async () => {
        setisloading(true);
        const res = await MakeGet('api/photos', token);
        setisloading(false);
        if (res) {
            console.log(res);
            setdata(res?.data?.photos);

        }
    }, [token]);



    useEffect(() => {
        handleget();
    }, [handleget]);






    /********* add songs function is here *********/
    async function addphoto() {


        const formData = {
            image: photo
        }


        console.log(formData);

        if (photo) {

            setisloading(true);
            const res = await MakePost('api/photos', formData, token);

            setisloading(false);
            if (res) {
                handleget();
                toast.success(res?.message);
            } else {
                toast.error("Something went wrong");
            }
        } else {
            toast.warn('Please Select a Image');
        }

    }




    console.log(data);




    return (
        <div className="h-fit">
            {isloading && <Loading />}
            <h1 className="text-xl text-left pb-6">Photos: <span className="text-md bg-red-100 py-1 px-2">You can Maximum Upload 5 Photos</span></h1>

            <div>
                <span className="block mb-1">Profile Photo:</span>
                <input
                    type="file"
                    onChange={(e) => { handleFileChange(e, setphoto) }}
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>

            <div className="flex justify-end">
                <button
                    className="bg-yellow-300 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded mt-4"
                    onClick={addphoto}
                >
                    Add Photo
                </button>
            </div>


            {
                data?.length > 0 ? (
                    <div className="grid grid-cols-4 item-center gap-5 mt-8">


                        {data?.map((item, index) => (
                            <PhotoCard photo={item} key={index} handleget={handleget} />
                        ))}


                    </div>
                ) : (
                    <div className="grid grid-cols-4 item-center gap-5 mt-8">
                        <h3>NO Image Found</h3>
                    </div>
                )
            }



            <ToastContainer />
        </div>
    )
}

export default Page;








const PhotoCard = ({ photo, handleget }) => {




    const token = getCookie();


    /********** handle delect photo her *********/
    async function deletephoto(e, id) {


        confirm("Are you sure you want to delete this photo?");
        if (!confirm) {
            return;
        }

        const res = await MakeDelete(`api/photos/${id}`, token);
        if (res) {
            handleget();
            toast.success(res?.message);
        }
    }











    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            {/* Delete Button */}
            <button onClick={(e) => deletephoto(e, photo?.id)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
            >
                ✕
            </button>

            {/* Photo */}
            <Image
                width={1000}
                height={1000}
                src={photo?.url}
                alt="Sample"
                className="w-full h-48 object-cover"
            />
        </div>
    );
};




