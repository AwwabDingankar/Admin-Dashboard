    import React, {useState} from "react";

    export default function CourseView({onClose, onStart, onStop, isActive}) {
        
        const buttonText = isActive ? 'Stop' : 'Start';
        const buttonColor = isActive ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700';

        const handleClick = () => {
            if (isActive) {
                onStop();
            } else {
                onStart();  
            }
        }   

    return (
        <div className="overly absolute inset-0 flex items-center justify-center bg-gray-100 backdrop-blur-3xl">
        <div className="content relative bg-white w-xl rounded-2xl  shadow-2xl">
            <button onClick={onClose} className="absolute right-5 top-5 cursor-pointer bg-red-500 hover:bg-red-700 text-white px-2 pb-1 rounded-lg">close</button>
            <div className="flex flex-col p-8  border-b-1 border-b-gray-300 rounded-b-lg ">
            <h1 className="flex items-center p-4 justify-center text-4xl font-bold">
                Qawaid Al-Muslah
            </h1>
            <p>Starting Date: 12-11-2024</p>
            <p className="mt-3.5 font-semibold">
                Every 1st & 3rd Thursday After Isha
            </p>
            <h3 className="mt-2.5">Masjid Al-Falah Kondhwa</h3>
            <div className="flex justify-center ">
                <button onClick={handleClick} className={`${buttonColor} text-white min-w-3xs font-bold mt-5 rounded cursor-pointer`}>
                {buttonText}
                </button>
            </div>
            </div>
            <div className="flex justify-around border-b-1 border-b-gray-300 rounded-b-lg">
            <div className="  m-3.5 p-2.5">
                Total Durs <b>11</b>
            </div>
            <div className="  m-3.5 p-2.5">
                Avg_Attendance <b>77%</b>
            </div>
            </div>
            <div className="flex justify-center my-4">
                <table className="table-auto border-collapse border text-center">
                <thead>
                    <tr>
                    <th className="border border-gray-300 p-2 w-2xs">Student Name</th>
                    <th className="border border-gray-300 p-2">Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Fuzail Palnak</td>
                        <td className="border border-gray-300 p-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Tameem Parkar</td>
                        <td className="border border-gray-300 p-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Awwab Dingankar</td>
                        <td className="border border-gray-300 p-2">80%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Hashir Firfire</td>
                        <td className="border border-gray-300 p-2">96%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Hussain Nore</td>
                        <td className="border border-gray-300 p-2">10%</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        </div>
    );
    }
