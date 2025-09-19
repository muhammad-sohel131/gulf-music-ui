'use client'

import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ArtistsNavigation = ({ isnavOpen, setisnavOpen }) => {

    const [openMenu, setOpenMenu] = useState(null);

    const navItems = [

    ];

    return (
        <nav className={`flex flex-col md:flex-row bg-black md:bg-transparent fixed top-0 left-0 md:static w-screen h-screen md:fit md:h-fit space-x-8 md:justify-center pt-20 md:pt-0 pl-4 md:pl-0 gap-4 md:gap-3 z-30 ${isnavOpen ? "flex flex-col md:flex-row" : "hidden md:flex md:flex-row"}`}>
            {navItems.map((item, index) => (
                item.title === "Profile" ? (
                    <Link className="hover:text-gray-300 text-xl text-yellow-50 cursor-pointer" key={index} href="/artists">{item.title}</Link>
                ) : (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setOpenMenu(index)}
                    >
                        <button className="hover:text-gray-300 text-xl text-yellow-50 cursor-pointer">{item.title}</button>

                        {/* Dropdown */}
                        {openMenu === index && (
                            <div
                                onMouseLeave={() => setOpenMenu(null)}
                                className="absolute top-full left-0 mt-2 bg-yellow-100 text-black rounded shadow-lg w-40 z-50"
                            >
                                {item.options.map((option, i) => (
                                    <Link
                                        key={i}
                                        href={option.Link}
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        {option.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )
            ))}

            <div
                onClick={() => { setisnavOpen(false); setOpenMenu(null); }}
                className="md:hidden absolute top-10 right-10 z-40 bg-yellow-900 hover:rotate-180 transition-all duration-500 p-1 rounded-sm cursor-pointer"
            >
                <RxCross2 className="text-2xl text-yellow-200 cursor-pointer" />
            </div>
        </nav>
    )
}

export default ArtistsNavigation;
