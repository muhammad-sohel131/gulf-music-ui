import { AiFillSound } from "react-icons/ai";
import { PiSpeakerSimpleSlashFill } from "react-icons/pi";

const PlayPuseBtn = ({ play, setplay }) => {


    return (
        <div onClick={() => { setplay(!play) }} className="absolute left-10 bottom-10 bg-yellow-300 z-30 p-2 cursor-pointer rounded-full flex items-center justify-center">
            {
                play ? (
                    <PiSpeakerSimpleSlashFill className="text-gray-700 text-2xl" />

                ) : (
                    <AiFillSound className="text-gray-700 text-2xl" />
                )
            }
        </div>
    )
}

export default PlayPuseBtn;