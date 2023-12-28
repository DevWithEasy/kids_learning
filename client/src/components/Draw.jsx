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
            className='p-10 space-y-2'
        >
            <div
                ref={board}
                className='relative w-48 h-48 flex justify-center items-center border overflow-hidden'
            >
                <span
                    className='text-[175px] font-extrabold opacity-5'
                >
                    {wordVisible ? letter : ''}
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
                className='w-48 flex items-center justify-between text-sm'
            >
                <label
                    htmlFor='color'
                    className={`w-10 border text-[${brushColor}]`}
                >
                    Color
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
                    className='w-10 border focus:outline-none'
                />
                <button
                    onClick={() => canvasRef?.current.clear()}
                    className='w-10 border '
                >
                    Clear
                </button>
                <button
                    onClick={() => canvasRef?.current.undo()}
                    className='w-10 border'
                >
                    Undo
                </button>
            </div>
        </div>
    );
};

export default Draw;