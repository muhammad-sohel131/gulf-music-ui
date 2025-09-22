'use client'

import useLogedUserStore from "@/store/useLogedUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import getEmail from "../utilis/helper/cookie/getemail";
import getRole from "../utilis/helper/cookie/getrole";
import getCookie from "../utilis/helper/cookie/gettooken";
import setCookie from "../utilis/helper/cookie/setcookie";

const AuthBtnandProfileForheader = () => {


    const { loginUser, setLoginUser } = useLogedUserStore();
    const router = useRouter();

    const token = getCookie();
    const role = getRole();
    const name = getEmail();

    useEffect(() => {
        setLoginUser({ name, token, role });
    }, []);



    function handleLogout() {

        setCookie("token", '');
        setCookie("name", '');
        setCookie("role", '');
        router.refresh();

    }


    return (
        <>
            {
                token && token != "undefined" ? (
                    <div className="hidden md:flex items-center justify-center gap-2 relative">
                        <div className="flex flex-col leading-none">
                            <span className="text-nowrap text-yellow-50 text-sm">{loginUser?.name}</span>
                            <span className="nowrap text-xs text-right text-gray-200">{loginUser?.role}</span>
                        </div>
                        <div className="relative group cursor-pointer">
                            <div className="border-2 border-yellow-200 bg-transparent rounded-full w-[45px] h-[45px] flex items-center justify-center">
                                <FaRegUser className="text-2xl text-yellow-200" />
                            </div>


                            <div className="hidden group-hover:block absolute top-10 right-0">
                                <div className="h-[20px] w-full bg-transparent"></div>
                                <div className="w-fit px-8 bg-yellow-100 text-gray-900 rounded-md py-3 px-3 flex flex-col shadow-xl hhhhh">
                                    <Link href={'/deshboard/artists'} className="text-lg text-center pb-2 cursor-pointer">Deshboard</Link>
                                    <button onClick={() => { handleLogout() }} className="text-lg text-center cursor-pointer">Logout</button>
                                </div>
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