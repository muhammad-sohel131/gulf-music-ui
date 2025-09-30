"use client";

import Image from "next/image";
import mergeImage from "../../../public/merch.png";
import Container from "../Container";


const MerchSection = () => {
    // Demo merchandise data
    const merchItems = [
        {
            id: 1,
            title: "Podcast Logo T-Shirt",
            price: "$25",
            image: mergeImage,
            link: "https://example.com/tshirt",
        },
        {
            id: 2,
            title: "Podcast Mug",
            price: "$15",
            image: mergeImage,
            link: "https://example.com/mug",
        },
        {
            id: 3,
            title: "Podcast Cap",
            price: "$20",
            image: mergeImage,
            link: "https://example.com/cap",
        },
        {
            id: 4,
            title: "Podcast Hoodie",
            price: "$40",
            image: mergeImage,
            link: "https://example.com/hoodie",
        },
    ];

    return (
        <section className="w-full">
            <Container>
                <div className="w-full">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Merch</h2>

                    {/* Horizontal Scrollable Merch Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        {merchItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-50 min-w-[220px] shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover border border-gray-50"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 mt-1">{item.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default MerchSection;
