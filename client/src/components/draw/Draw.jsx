import React, { useEffect, useRef, useState } from 'react';
import Board from './Board';


const Draw = ({ letter }) => {
    const canvasRef = useRef()
    const [strokSize, setStrokSize] = useState(12)
    const [strokColor, setStrokColor] = useState('#000000')
    const [wordVisible, setWordVisible] = useState(true)

    function handleUpdateBrushSize(e) {
        const value = Number(e.target.value);

        if (value > 20)
            setStrokSize(20);
        else if (value < 1)
            setStrokSize(1);
        else
            setStrokSize(value);
    }


    return (
        <div
            className='space-y-2'
        >
            <Board {...{canvasRef,letter,strokColor,strokSize,wordVisible}}/>

            <div
                className='flex items-center space-x-2 text-sm'
            >
                <label
                    htmlFor='color'
                    className={`p-1 border text-[${strokColor}] rounded`}
                >
                    রঙ পরিবর্তন
                </label>
                <input
                    id='color'
                    type='color'
                    value={strokColor}
                    onChange={(e) => setStrokColor(e.target.value)}
                    className='hidden'
                />
                <input
                    type='number'
                    min={0}
                    max={20}
                    value={strokSize}
                    onChange={(e) => handleUpdateBrushSize(e)}
                    className='p-1 border rounded focus:outline-none text-center'
                />
                <button
                    onClick={() => canvasRef?.current.clearCanvas()}
                    className='p-1 border rounded'
                >
                    মুছুন
                </button>
                <button
                    onClick={() => canvasRef?.current.clearCanvas()}
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