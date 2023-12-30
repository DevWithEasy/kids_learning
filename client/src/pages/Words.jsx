import React, { useEffect, useRef, useState } from 'react';

const Words = () => {
    const board = useRef()
    const [clientWidth, setClientWidth] = useState(192)
    const [clientHeight, setClientHeight] = useState(192)
    const letters = ['X', 'P', 'R', 'T'];

    const getRandomPosition = () => ({
        top: `${Math.random() * clientHeight-20}px`,
        left: `${Math.random() * clientWidth-20}px`,
    })

    useEffect(() => {
        if (board.current) {
            const { width, height } = board?.current.getBoundingClientRect();

            setClientWidth(width)
            setClientHeight(height)
        }
    }, [])

    console.log(getRandomPosition())

    return (
        <div
            className='relative h-[300px]  overflow-hidden'
        >
            {letters.map((l, i) => (
                <div 
                    key={i} 
                    style={{ ...getRandomPosition() }}
                    className='absolute h-10 w-10 m-2 p-2 text-center bg-teal-100 rounded-full'
                >
                    {l}
                </div>
            ))}
        </div>
    );
};

export default Words;
