const Profile = () => {
    return (
        <div>
            <h1 className="text-xl pb-6">Venue  Profile:</h1>


            <h2 className="text-lg pb-4">Genaral Informations:</h2>
            <div className="p-2 border border-gray-200 rounded-md mt-2">
                <div>
                    <span className="w-full">Name:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>


                <div className="mt-2">
                    <span className="w-full">City:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>


                <div className="mt-2">
                    <span className="w-full">Address:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>



                <div className="mt-2">
                    <span className="w-full">Seating Capacity:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>


                <div className="mt-2">
                    <span className="w-full">Open Hours and Days:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>



            </div>





            <h2 className="text-lg pb-4 pt-4">Biography:</h2>
            <div className="p-2 border border-gray-200 rounded-md mt-2">
                <div>
                    <span className="w-full">About Us:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>


                <div className="mt-2">
                    <span className="w-full">Achievements:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>

                <div className="mt-2">
                    <span className="w-full">Future Goals:</span>
                    <input type="text" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>

            </div>






            <h2 className="text-lg pb-4 pt-4">photos:</h2>
            <div className="p-2 border border-gray-200 rounded-md mt-2">
                <div>
                    <span className="w-full">Image Up to 5:</span>
                    <input type="file" className="border border-gray-200 p-2 rounded-md w-full mt-2" />
                </div>
            </div>





            <div className="flex justify-end">
                <button className="text-whtie bg-blue-600 rounded-md px-2 text-white py-1 text-lg mt-4 cursor-pointer">Save</button>
            </div>


        </div>
    )

}

export default Profile;