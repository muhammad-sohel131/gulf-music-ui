import SongPlayer from "@/app/componnent/Songplear";

const Page = () => {
    return (
        <div className="h-fit">
            <h1 className="text-xl text-left pb-6">Your Songs:</h1>


            <div>
                <span className="block mb-1">Profile Photo:</span>
                <input
                    type="file"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>

            <div>
                <span className="block mb-1">Song Tham:</span>
                <input
                    type="file"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>

            <div className="mt-3">
                <span className="block mb-1">Song:</span>
                <input
                    type="file"
                    className="border border-gray-200 p-2 rounded-md w-full"
                />
            </div>


            <div className="grid grid-cols-4 item-center gap-5 mt-6">
                <SongPlayer />
                <SongPlayer />
                <SongPlayer />
                <SongPlayer />
                <SongPlayer />
            </div>
        </div>
    )
}

export default Page;



