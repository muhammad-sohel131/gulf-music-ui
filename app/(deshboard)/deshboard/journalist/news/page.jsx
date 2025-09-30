const Profile = () => {
    return (
        <div className="w-full mx-auto p-6">
            {/* Page Heading */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">News</h1>

            {/* News Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">News Information</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Title</label>
                        <input
                            type="text"
                            placeholder="Enter news title"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Date</label>
                        <input
                            type="date"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Location</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Credit</label>
                        <input
                            type="text"
                            placeholder="Enter credit info"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            placeholder="Enter news description"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-24 resize-none"
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Photos Section */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Photos</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Upload up to 5 images</label>
                    <input
                        type="file"
                        multiple
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-lg transition">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Profile;
