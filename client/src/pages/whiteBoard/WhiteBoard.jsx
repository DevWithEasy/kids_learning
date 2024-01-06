import React, { useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Controller } from '../../components/Index';

const WhiteBoard = () => {
    const board = useRef()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const canvasRef = useRef()
    const [strokSize, setStrokSize] = useState(12)
    const [strokColor, setStrokColor] = useState('#000000')
    const [wordVisible, setWordVisible] = useState(true)
    const [earse,setEarse] = useState(false)

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
            className='relative h-screen pl-16 pt-12 pb-2 pr-2 bg-gray-200 overflow-hidden'
        >
            <div
                className='h-full bg-white   rounded-md'
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
            <Controller/>
        </div>
    );
};

export default WhiteBoard;