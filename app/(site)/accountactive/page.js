'use client'
import { ImNotification } from "react-icons/im";


const AccountActive = () => {


    return (
        <div className="w-screen pb-[140px] pt-[235px] flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
                <div className="flex items-center justify-center mb-5">
                    <ImNotification className="text-center text-4xl" />
                </div>
                <h2 className="text-xl font-bold mb-4">Account Activation</h2>
                <p className="">
                    We have sent an email to your registered address. Please check your inbox and follow the instructions in the email to activate your account.
                </p>
            </div>
        </div>
    );
};

export default AccountActive;
