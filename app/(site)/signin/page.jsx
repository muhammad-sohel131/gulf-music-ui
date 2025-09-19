'use client'

import Loading from "@/app/componnent/Loading";
import MakePost from "@/app/utilis/requestrespose/post";
import useLoadingStore from "@/store/useLoadingStore";
import Link from "next/link";

const { useState } = require("react");

const Signin = () => {

    const { isLoading, setLoading } = useLoadingStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [res, setres] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({ email, password, });

        if (email && password) {
            setLoading(true);
            const response = await MakePost("api/login", { email, password });
            setLoading(false);
            console.log(response);
            if (response) {
                setres(response);
            } else {
                alert("There was a Server side Problem");
            }
        } else {
            alert("Required All Feilds");
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
        </div>
    );
};

export default Signin;
