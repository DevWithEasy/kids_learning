import React from 'react';
import { next, previous } from '../utils/slideHandler';

const SlideHandler = ({
    data,
    targetId,
    setTargetId,
    setTargetLetter
}) => {
    return (
        <div
            className="flex justify-between border-t px-4 py-2"
        >
            <button
                onClick={() => previous({
                    data,
                    targetId,
                    setTargetId,
                    setTargetLetter
                })}
                className="w-9 h-9 flex justify-center items-center text-pink-600 cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>
            <button
                onClick={() => next({
                    data,
                    targetId,
                    setTargetId,
                    setTargetLetter
                })}
                className="w-9 h-9 flex justify-center items-center text-pink-600 cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>
        </div>
    );
};

export default SlideHandler;