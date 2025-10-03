"use client";

import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakePost from "@/app/utilis/requestrespose/post";
import useLoadingStore from "@/store/useLoadingStore";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import thubm from "../../../public/thamnail.jpg";
import Container from "../Container";
import Loading from "../Loading";

export default function ContactForm() {


    const token = getCookie();
    const { isLoading, setLoading } = useLoadingStore();
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (email && subject && message) {

            setLoading(true);

            const formdata = {
                email: email,
                sub: subject,
                mes: message
            }

            const res = await MakePost('/api/contact', formdata, token);

            if (res) {
                setEmail("");
                setSubject("");
                setMessage("");
                toast.success(res?.message);
            } else {
                toast.error(res?.message);
            }


        } else {
            toast.warn("This field is required");
        }





    };

    return (
        <div className="w-full bg-gray-100 bg-gradient-to-b from-white to-black pb-6">
            {isLoading && <Loading />}
            <Container>
                <div className="flex items-center justify-center px-4">
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">

                        {/* Form Section */}
                        <div className="p-10">
                            <h2 className="text-2xl font-semibold text-black mb-6">Get in touch with us</h2>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-4">

                                    <div>
                                        <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:yellow-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:yellow-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows="5"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:yellow-400"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-[#FDF070] text-black hover:bg-[#FDF070] cursor-pointer font-semibold px-6 py-2 rounded-md shadow-md transition duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="hidden md:block relative">
                            <Image
                                src={thubm} // Place your image in /public
                                alt="Contact Form Image"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer position="bottom-right" />
        </div>
    );
}



