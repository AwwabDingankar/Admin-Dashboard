import React from 'react';

export default function Overview() {
    
    const handleClick = () => {

    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div onClick={handleClick} className="bg-white p-4 rounded-md shadow-md hover:bg-gray-200  cursor-pointer">
                    <h2 className="text-lg text-center font-bold">Qawaid Al-Muslah</h2>
                    <div className="flex flex-col items-center justify-center m-10 rounded-md shadow-md ">
                        <p>1st & 3rd Thursday </p>
                        <p>After Isha</p>
                    </div>
                    <div className="flex justify-center">
                        <p>Status: Active</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-lg text-center font-bold">Qawaid Al-Muslah</h2>
                    <div className="flex flex-col items-center justify-center m-10 rounded-md shadow-md ">
                        <p>1st & 3rd Thursday </p>
                        <p>After Isha</p>
                    </div>
                    <div className="flex justify-center">
                        <p>Status: Active</p>
                    </div>
                </div>
            </div>
        </>
    )
}