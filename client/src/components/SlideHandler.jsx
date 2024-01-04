import React from 'react';
import { next, previous } from '../utils/slideHandler';

const SlideHandler = ({
    letters,
    id,
    setId,
    setLetter
}) => {
    return (
        <div
            className="flex justify-between"
        >
            <button
                onClick={() => previous({
                    letters,
                    id,
                    setId,
                    setLetter
                })}
                className="px-2 py-1 flex justify-between items-center space-x-2 bg-pink-100 text-pink-600 rounded-md cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>পূর্ববর্তী অক্ষর</span>
            </button>
            <button
                onClick={() => next({
                    letters,
                    id,
                    setId,
                    setLetter
                })}
                className="px-2 py-1 flex justify-between items-center space-x-2 bg-pink-100 text-pink-600 rounded-md cursor-pointer"
            >
                <span>পরবর্তী অক্ষর</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                
            </button>
        </div>
    );
};

export default SlideHandler;