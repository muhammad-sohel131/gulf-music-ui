"use client";

import Image from "next/image";
import { useState } from "react";

const AdminMerchPanel = ({ onSave }) => {
    const [merchItems, setMerchItems] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");

    const handleAddMerch = (e) => {
        e.preventDefault();
        if (!title || !price || !image || !link) {
            alert("Please fill in all fields");
            return;
        }

        const newItem = { title, price, image, link };
        const updatedItems = [...merchItems, newItem];
        setMerchItems(updatedItems);
        onSave?.(updatedItems);

        // Clear inputs
        setTitle("");
        setPrice("");
        setImage("");
        setLink("");
    };

    return (
        <div className="w-full mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Merch Listings</h2>
            <form onSubmit={handleAddMerch} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                        type="text"
                        placeholder="Merch Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Price</label>
                    <input
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Product Link */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Product Link</label>
                    <input
                        type="text"
                        placeholder="Printify / Shopify Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 mt-3 flex items-center justify-end">
                    <button
                        type="submit"
                        className="w-fit px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition-colors"
                    >
                        Add Merch Item
                    </button>
                </div>
            </form>

            {/* Merch Preview */}
            {merchItems.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Preview:</h3>
                    <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {merchItems.map((item, idx) => (
                            <div key={idx} className="bg-gray-100 rounded-lg p-3 flex-shrink-0 w-48 shadow hover:shadow-lg transition">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-md mb-2"
                                />
                                <h4 className="text-md font-semibold text-gray-700 truncate">{item.title}</h4>
                                <p className="text-gray-600 text-sm">${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMerchPanel;
