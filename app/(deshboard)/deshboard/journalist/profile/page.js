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

    // Profile states
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
        } else {
            toast.error(res?.message || "Failed to load profile");
        }
        setLoading(false);
    }, [token]);

    useEffect(() => {
        getSingleProfile();
    }, []);

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            user_id: id,
            name,
            city,
            genre,
            image: profilePhoto,
            cover_photo: coverPhoto,
            bio: biography
        };

        const res = await MakePut(`api/artist/${signleProfile?.id}/profile`, data, token);
        if (res.success) {
            toast.success(res?.message);
            setIsEditing(false);
            getSingleProfile();
        } else {
            toast.error(res?.message || "Update failed");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {isLoading && <Loading />}
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-2xl font-bold text-gray-800">Journalist Profile</h1>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Edit Profile
                    </button>
                )}
            </div>

            <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={!isEditing}
                            className={`w-full p-3 rounded-lg border ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"}`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full p-3 rounded-lg border bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Profile Photo */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Profile Photo</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setProfilePhoto)}
                            disabled={!isEditing}
                            className="w-full border p-2 rounded-lg"
                        />
                        {profilePhoto && (
                            <div className="w-36 h-36 mt-3 rounded-lg border overflow-hidden">
                                <Image src={profilePhoto} alt="Profile Photo" width={300} height={300} className="object-cover w-full h-full" />
                            </div>
                        )}
                    </div>

                    {/* Cover Photo */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Cover Photo</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setCoverPhoto)}
                            disabled={!isEditing}
                            className="w-full border p-2 rounded-lg"
                        />
                        {coverPhoto && (
                            <div className="w-full h-36 mt-3 rounded-lg border overflow-hidden">
                                <Image src={coverPhoto} alt="Cover Photo" width={1000} height={300} className="object-cover w-full h-full" />
                            </div>
                        )}
                    </div>

                    {/* Biography */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium text-gray-700">Biography</label>
                        <textarea
                            value={biography}
                            onChange={(e) => setBiography(e.target.value)}
                            disabled={!isEditing}
                            className={`w-full p-3 rounded-lg border h-40 resize-none ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"}`}
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            {isEditing && (
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 rounded-lg px-6 py-2 text-white font-medium text-lg hover:bg-green-700 transition"
                    >
                        Save Changes
                    </button>
                </div>
            )}

            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default Profile;
