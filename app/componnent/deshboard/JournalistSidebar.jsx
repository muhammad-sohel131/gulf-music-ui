'use client'


import setCookie from "@/app/utilis/helper/cookie/setcookie";
import MakePost from "@/app/utilis/requestrespose/post";
import useNavIsOpenStore from "@/store/useNavIsOpenStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const JournalistSidebar = () => {


    const router = useRouter();
    const { isOpen, setisOpen } = useNavIsOpenStore();


    async function handleLogout() {


        const response = await MakePost('api/logout', {}, token);

        if (response) {
            toast.success(response?.message);
            setCookie("token", '');
            setCookie("name", '');
            setCookie("role", '');
            setCookie("id", '');
            router.refresh();
        } else {
            toast.error("Something went wrong");
        }
    }




    return (
        <div className={`w-full bg-black text-white h-screen sticky top-28 py-12 px-8 ${isOpen ? "flex flex-col" : "hidden lg:flex lg:flex-col"} `}>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/journalist/profile'}>
                Profile
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/journalist/news'}>
                Add News
            </Link>




            <div onClick={() => { handleLogout() }} className="fixed top-[92vh] left-0 text-black p-1 rounded-lg w-[200px] pl-6">
                <span className="bg-yellow-200 text-center cursor-pointer font-semibold px-20 py-3 rounded-md">
                    Logout
                </span>
            </div>

        </div>
    )
}

export default JournalistSidebar;