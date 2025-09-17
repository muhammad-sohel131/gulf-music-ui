"use client";
import { useState } from "react";
import Container from "../Container";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        // Clear form data
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className="h-fit w-full bg-gray-100 bg-gradient-to-b from-white to-black pb-24 pt-12">
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
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                            />

                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
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
        </div>
    );
}
