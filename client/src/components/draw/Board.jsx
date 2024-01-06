import React, { useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Board = ({canvasRef,letter,strokSize,strokColor,wordVisible}) => {
    const board = useRef()
    const [width, setWidth] = useState(192)
    const [height, setHeight] = useState(192)

    const styles = {
        border: "none",
    };

    useEffect(() => {
        if (board.current) {
            const { width, height } = board?.current.getBoundingClientRect();

            setWidth(width)
            setHeight(height)
        }
    }, [])

    return (
        <div
                ref={board}
                className='relative w-full h-64 flex justify-center items-center bg-white border overflow-hidden rounded'
            >
                <span
                    className={`text-[200px] font-extrabold ${wordVisible ? 'opacity-5' : 'opacity-0'}`}
                >
                    {letter}
                </span>
                <div
                    className='absolute top-0 w-full h-full overflow-hidden'
                >
                    <ReactSketchCanvas
                        ref={canvasRef}
                        width={width}
                        height={height}
                        strokeColor={strokColor}
                        strokeWidth={strokSize}
                        eraserWidth={strokSize}
                        canvasColor='rgba(255, 255, 255, 0)'
                        style={styles}
                    />
                </div>
            </div>

    );
};

export default Board;