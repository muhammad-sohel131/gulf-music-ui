import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const AuthBtnandProfileForheader = () => {
    return (
        <>
            {
                true ? (
                    <div className="hidden md:flex items-center justify-center gap-2">
                        <div className="flex flex-col leading-none">
                            <span className="text-nowrap text-yellow-50">John deo</span>
                            <span className="nowrap text-xs text-right text-gray-200">artist</span>
                        </div>
                        <div className="relative group cursor-pointer">
                            <div className="border-2 border-yellow-200 bg-transparent rounded-full w-[45px] h-[45px] flex items-center justify-center">
                                <FaRegUser className="text-2xl text-yellow-200" />
                            </div>

                            <div className="hidden group-hover:block bg-yellow-300 text-black absolute top-[100%] left-0 p-1 rounded-lg">
                                Logout
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="w-fit space-x-4 hidden md:flex">
                        <Link href={'/signin'} className="bg-transparent text-yellow-50  px-3 py-1 cursor-pointer rounded hover:bg-yellow-100 hover:text-black transition text-nowrap text-lg">
                            Sign In
                        </Link>
                        <Link href={'/signup'} className="bg-yellow-200 text-black px-3 py-1 cursor-pointer rounded hover:bg-yellow-100 transition text-nowrap text-lg">
                            Sign Up
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default AuthBtnandProfileForheader;