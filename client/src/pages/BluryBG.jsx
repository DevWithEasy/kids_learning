import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'

const BluryBG = () => {

    return (
        <div
            className='flex justify-center items-center'
        >
            <div
            className='relative bg-gray-50 flex justify-center items-center'
        >
            <div
                className='absolute top-10 left-10 w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply blur-xl animate-blob'
            >

            </div>
            <div
                className='absolute top-10 left-64 w-72 h-72 rounded-full bg-yellow-200 mix-blend-multiply blur-xl animate-blob animation-delay-2000'
            >

            </div>
            <div
                className='absolute top-38 left-36 w-72 h-72 rounded-full bg-pink-200 mix-blend-multiply blur-xl animate-blob animation-delay-4000'
            >

            </div>
        </div>
        </div>
    );
};

export default BluryBG;
