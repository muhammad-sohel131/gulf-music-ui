'use client'

import Loading from "@/app/componnent/Loading";
import logingandsignupmakepost from "@/app/utilis/requestrespose/logingandsignupmakepost";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLoadingStore from "../../../store/useLoadingStore";


const SignUP = () => {


    const router = useRouter();
    const { isLoading, setLoading } = useLoadingStore();
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setrole] = useState('Artist');
    const [res, setres] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();


        if (name && email && password && role) {
            setLoading(true);
            const response = await logingandsignupmakepost("api/register", { name, email, password, role });
            setLoading(false);
            if (response) {
                setres(response);
                router.push('/accountactive');
            } else {
                alert("There was a Server side Problem");
            }
        } else {
            alert("Required All Feilds");
        }

    };




    return (
        <div className="w-screen pb-[30px] md:pt-[30px] pt-[180px] flex justify-center items-center bg-gray-100 px-[20px]">
            {isLoading && <Loading />}
            <div className="flex max-w-[1400px] mx-auto justify-between items-center">
                <div className="md:w-[60%] hidden md:block">
                    <DotLottieReact
                        src="https://lottie.host/1fdd929b-9441-4c7c-bbf1-003b55c02091/rPVKkhwjIL.lottie"
                        loop
                        autoplay
                        height={300}
                        width={300}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md md:w-[40%] w-[90%] mx-auto text-center">
                    <h2 className="text-xl font-bold mb-4">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                        />
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


                        <select
                            value={role}
                            placeholder="Select Option"
                            onChange={(e) => setrole(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                        >
                            <option value="Artist">Artist</option>
                            <option value="Venue">Venue</option>
                            <option value="Journalist">Journalist</option>
                            <option value="Fan">Fan</option>
                        </select>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-600 transition cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    <span className="flex items-center gap-1 pt-2 justify-center">Already have an Account ? <Link href="signin" className="text-sm text-gray-600 hover:underline">
                        sign In
                    </Link></span>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
