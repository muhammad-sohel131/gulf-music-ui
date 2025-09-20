'use client';

import Loading from "@/app/componnent/Loading";
import getId from "@/app/utilis/helper/cookie/getid";
import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakePut from "@/app/utilis/requestrespose/put";
import useLoadingStore from "@/store/useLoadingStore";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const { isLoading, setLoading } = useLoadingStore();
    const id = getId();
    const token = getCookie();
    const [isEditing, setIsEditing] = useState(false);

    // Individual state for each field
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("mdemong87@gmail.com");
    const [city, setCity] = useState("New York");
    const [genre, setGenre] = useState("Pop");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [biography, setBiography] = useState("This is a sample biography.");

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
                            onChange={(e) => setProfilePhoto(e.target.files[0])}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Cover Photo:</label>
                        <input
                            type="file"
                            onChange={(e) => setCoverPhoto(e.target.files[0])}
                            disabled={!isEditing}
                            className={`border p-2 rounded-md w-full ${!isEditing ? "bg-gray-100 cursor-not-allowed" : "border-gray-200"}`}
                        />
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
                        className="bg-yellow-600 rounded-md px-4 py-2 text-white text-lg mt-4 hover:bg-yellow-700 transition"
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
