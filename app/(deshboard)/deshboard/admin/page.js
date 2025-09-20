import SongPlayer from "@/app/componnent/Songplear";

const Page = () => {
    return (
        <div className="h-fit">
            <h1 className="text-xl text-left pb-6">My Songs:</h1>
            <div className="grid grid-cols-4 item-center gap-5">
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