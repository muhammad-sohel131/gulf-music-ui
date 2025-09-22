'use client';

import Loading from "@/app/componnent/Loading";
import getId from "@/app/utilis/helper/cookie/getid";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import handleFileChange from "@/app/utilis/helper/handlefilechange";
import MakeGet from "@/app/utilis/requestrespose/get";
import MakePut from "@/app/utilis/requestrespose/put";
import useLoadingStore from "@/store/useLoadingStore";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const { isLoading, setLoading } = useLoadingStore();
    const id = getId();
    const token = getCookie();
    const [isEditing, setIsEditing] = useState(false);

    // Individual state for each field
    const [signleProfile, setsignleProfile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [genre, setGenre] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [coverPhoto, setCoverPhoto] = useState('');
    const [biography, setBiography] = useState('');





    const getSingleProfile = useCallback(async () => {
        setLoading(true);

        const res = await MakeGet(`api/artists`, token);

        if (res) {
            setsignleProfile(res?.data);
            setName(res?.data?.name);
            setEmail(res?.data?.email);
            setGenre(res?.data?.genre);
            setCity(res?.data?.city);
            setBiography(res?.data?.bio);
            setProfilePhoto(res?.data?.image_url);
            setCoverPhoto(res?.data?.cover_photo_url);
            toast.success(res?.data?.message);
        } else {
            toast.error(res?.message);
        }


        setLoading(false);
    }, [token])



    /******* run one time and get single profile data *******/
    useEffect(() => {
        getSingleProfile();
    }, [])



    console.log(signleProfile);


    /************** hanlde sunmite function is here ****************/
    const handleSubmit = async () => {
        setLoading(true);

        const data = {
            user_id: id,
            name,
            email,
            city,
            genre,
            image: profilePhoto,
            cover_photo: coverPhoto,
            bio: biography
        }

        const res = await MakePut(`api/artists/${id}`, data, token);

        console.log(res);

        if (res) {
            toast.success(res?.message);
            getSingleProfile();
        } else {
            toast.error("There was server side problem");
        }


        setLoading(false);

    };



    return (
        <div className="p-4">
            {isLoading && <Loading />}
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-xl font-semibold">Artist Profile</h1>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Edit
                    </button>
                )}
            </div>

            <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Genre:</label>
                        <select
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        >
                            <option value="Rap">Rap</option>
                            <option value="Country">Country</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Reggae">Reggae</option>
                            <option value="EDM">EDM</option>
                            <option value="Classical">Classical</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">Profile Photo:</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setProfilePhoto)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />

                        {
                            profilePhoto && <div>
                                <div className="w-[150px] h-[150px] mt-5 rounded-md border border-gray-200 mb-4 overflow-hidden">
                                    <Image src={profilePhoto} alt="Profile-Photo" width={1000} height={1000} />
                                </div>
                            </div>
                        }
                    </div>

                    <div>
                        <label className="block mb-1">Cover Photo:</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setCoverPhoto)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />


                        {
                            coverPhoto && <div>
                                <div className="w-full h-[150px] mt-5 rounded-md border border-gray-200 overflow-hidden object-contain mb-4 overflow-hidden">
                                    <Image src={coverPhoto} alt="Profile-Photo" width={1000} height={1000} />
                                </div>
                            </div>
                        }
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1">Biography:</label>
                        <textarea
                            value={biography}
                            onChange={(e) => setBiography(e.target.value)}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full h-40 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        ></textarea>
                    </div>
                </div>
            </div>

            {isEditing && (
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-yellow-600 rounded-md px-4 py-2 text-white text-lg mt-4 hover:bg-yellow-700 transition cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Profile;
