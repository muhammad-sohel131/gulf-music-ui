'use client'


import setCookie from "@/app/utilis/helper/cookie/setcookie";
import useNavIsOpenStore from "@/store/useNavIsOpenStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminSidebar = () => {


    const router = useRouter();
    const { isOpen, setisOpen } = useNavIsOpenStore();


    function handleLogout() {

        setCookie("token", '');
        setCookie("name", '');
        setCookie("role", '');
        router.refresh();

    }


    return (
        <div className={`w-full bg-black text-white h-screen sticky top-28 py-12 px-8 ${isOpen ? "flex flex-col" : "hidden lg:flex lg:flex-col"} `}>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/artists'}>
                Deshboard
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/admin/merch'}>
                Merchandise
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/admin/waves'}>
                Waves
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/admin/podcasts'}>
                Podcasts
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/admin/inquiries'}>
                Inquiries
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/artists/profile'}>
                All Artists
            </Link>

            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/artists/profile'}>
                All Journalists
            </Link>





            <Link onClick={() => { setisOpen(false) }} className="text-xl w-full bg-gray-800 hover:bg-gray-900 py-2 px-3 mb-4 rounded-md" href={'/deshboard/artists/song'}>
                All Songs
            </Link>



            <div onClick={() => { handleLogout() }} className="fixed top-[92vh] left-0 text-black p-1 rounded-lg w-[200px] pl-6">
                <span className="bg-yellow-200 text-center cursor-pointer font-semibold px-20 py-3 rounded-md">
                    Logout
                </span>
            </div>

        </div>
    )
}

export default AdminSidebar;