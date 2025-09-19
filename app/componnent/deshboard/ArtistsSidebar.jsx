import Link from "next/link";

const ArtistsSidebar = () => {
    return (
        <div className="w-full bg-gray-800 text-white h-full sticky top-28 left-0 py-12 px-8 flex flex-col">

            <Link className="text-xl w-full hover:bg-gray-900 py-2 px-2" href={'/deshboard/artists/profile'}>
                Profile
            </Link>

            <Link className="text-xl w-full hover:bg-gray-900 py-2 px-2" href={'/deshboard/artists/profile'}>
                Music
            </Link>

        </div>
    )
}

export default ArtistsSidebar;