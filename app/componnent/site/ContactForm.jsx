"use client";

import getCookie from "@/app/utilis/helper/cookie/gettooken";
import MakePost from "@/app/utilis/requestrespose/post";
import useLoadingStore from "@/store/useLoadingStore";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
        <div className="h-fit w-full bg-gray-100 bg-gradient-to-b from-white to-black pb-6 pt-12">
            {isLoading && <Loading />}
            <Container>
                <div className="flex justify-center items-center">
                    <div className="bg-yellow-50 p-6 rounded-lg w-3/4">
                        <h2 className="text-xl font-bold mb-4 text-center">For any inquiries:</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-md outline-none bg-white"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-md outline-none bg-white"
                            />

                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={7}
                                className="w-full px-3 py-2 border border-gray-200 rounded-md outline-none bg-white"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-yellow-300 text-gray-700 font-bold py-2 rounded-md hover:bg-yellow-400 cursor-pointer transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
            <ToastContainer position="bottom-right" />
        </div>
    );
}



