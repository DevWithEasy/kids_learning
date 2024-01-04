import React, { useEffect, useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";

const Draw = ({ letter }) => {
    const canvasRef = useRef()
    const board = useRef()
    const [brushRadius, setBrushRadius] = useState(12)
    const [brushColor, setBrushColor] = useState('#000000')
    const [clientWidth, setClientWidth] = useState(192)
    const [clientHeight, setClientHeight] = useState(192)
    const [wordVisible, setWordVisible] = useState(true)


    function handleUpdateBrushSize(e) {
        const value = Number(e.target.value);

        if (value > 20)
            setBrushRadius(20);
        else if (value < 1)
            setBrushRadius(1);
        else
            setBrushRadius(value);
    }

    useEffect(() => {
        if (board.current) {
            const { width, height } = board?.current.getBoundingClientRect();

            setClientWidth(width)
            setClientHeight(height)
        }
    }, [])

    return (
        <div
            className='space-y-2'
        >
            <div
                ref={board}
                className='relative w-full h-62 flex justify-center items-center border overflow-hidden rounded'
            >
                <span
                    className={`text-[200px] font-extrabold ${wordVisible ? 'opacity-5' : 'opacity-0'}`}
                >
                    {letter.letter}
                </span>
                <div
                    className='absolute top-0 w-full h-full ring-2 overflow-hidden'
                >
                    <CanvasDraw
                        ref={canvasRef}
                        canvasWidth={clientWidth}
                        canvasHeight={clientHeight}
                        brushColor={brushColor}
                        brushRadius={brushRadius}
                        backgroundColor='rgba(255, 250, 250,0)'
                        hideGrid={true}
                    />
                </div>
            </div>

            <div
                className='flex items-center space-x-2 text-sm'
            >
                <label
                    htmlFor='color'
                    className={`p-1 border text-[${brushColor}] rounded`}
                >
                    রঙ পরিবর্তন 
                </label>
                <input
                    id='color'
                    type='color'
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    className='hidden'
                />
                <input
                    type='number'
                    min={0}
                    max={20}
                    value={brushRadius}
                    onChange={(e) => handleUpdateBrushSize(e)}
                    className='p-1 border rounded focus:outline-none text-center'
                />
                <button
                    onClick={() => canvasRef?.current.clear()}
                    className='p-1 border rounded'
                >
                    মুছে ফেলুন
                </button>
                <button
                    onClick={() => canvasRef?.current.undo()}
                    className='p-1 border rounded'
                >
                    ফিরে যান
                </button>
                <button
                    onClick={() => setWordVisible(!wordVisible)}
                    className='p-1 border rounded'
                >
                    {wordVisible ? 'অক্ষর দেখান' : 'অক্ষর লুকান'}
                </button>
            </div>
        </div>
    );
};

export default Draw;