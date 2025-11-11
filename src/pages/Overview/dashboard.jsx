import React from 'react';
import Course from '../../components/UI/Course';

export default function Overview() {
    
    const handleClick = () => {

    }
    return (
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Course />
                <Course />
            </div>
        </>
    )
}