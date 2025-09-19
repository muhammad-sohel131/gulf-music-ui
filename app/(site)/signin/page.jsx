'use client'

import Loading from "@/app/componnent/Loading";
import setCookie from "@/app/utilis/helper/cookie/setcookie";
import MakePost from "@/app/utilis/requestrespose/post";
import useLoadingStore from "@/store/useLoadingStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";

const { useState } = require("react");

const Signin = () => {

    const router = useRouter();
    const { isLoading, setLoading } = useLoadingStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password) {
            setLoading(true);
            const response = await MakePost("api/login", { email, password });

            console.log(response);


            setLoading(false);
            if (response) {
                setCookie("token", response?.data?.token, 1);
                setCookie("id", response?.data?.user?.id, 1)
                setCookie("name", response?.data?.user?.name, 1);
                setCookie("role", response?.data?.user?.role, 1);
                toast.success(response?.message);


                switch (response?.data?.user?.role?.trim()) {
                    case "Admin":
                        router.push('/deshboard/admin');
                        break;
                    case "Artist":
                        router.push('/deshboard/artists');
                        break;
                    case "Venue":
                        router.push('/deshboard/venue');
                        break;
                    case "Journalist":
                        router.push('/deshboard/journalist');
                        break;
                    case "Fan":
                        router.push('/deshboard/fan');
                        break;
                    default:
                        break;
                }




            } else {
                toast.error(response?.message);
            }
        } else {
            toast.warn("Required All Feilds");
        }

    };

    return (
        <div className="w-screen pb-[95px] pt-[200px] flex justify-center items-center bg-gray-100">
            {isLoading && <Loading />}
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-xl font-bold mb-4">Sign IN</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />


                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-600 transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <Link href="#" className="block mt-3 text-sm text-gray-600 hover:underline">
                    Forget Password
                </Link>

                <span className="flex items-center gap-1 pt-2 justify-center">Did not have an account ? <Link href="signup" className="text-sm text-gray-600 hover:underline text-yellow-500">
                    sign Up
                </Link></span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signin;
