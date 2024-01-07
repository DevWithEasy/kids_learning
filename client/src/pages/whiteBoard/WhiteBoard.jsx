import React, { useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Controller, Header } from '../../components/Index';

const WhiteBoard = () => {
    const board = useRef()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const canvasRef = useRef()
    const [strokSize, setStrokSize] = useState(12)
    const [eraserSize, setEraserSize] = useState(12)
    const [strokColor, setStrokColor] = useState('#000000')
    const [canvasColor, setCanvasColor] = useState('rgba(255, 255, 255, 0)')
    const [earse,setEarse] = useState(false)

    const styles = {
        border: "none"
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
            className='relative h-screen pl-10 md:pl-16 pt-12 pb-3 pr-3 bg-gray-200 overflow-hidden'
        >
            <Header/>
            <div
                className='whiteboard_pen h-full w-full bg-white rounded-xl overflow-hidden'
            >
                <ReactSketchCanvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    strokeColor={strokColor}
                    strokeWidth={strokSize}
                    eraserWidth={strokSize}
                    canvasColor={canvasColor}
                    style={styles}
                />
            </div>
            
            <Controller {...{
                canvasRef,
                strokSize,
                setStrokSize,
                eraserSize, 
                setEraserSize,
                setStrokColor,
                setCanvasColor,
                earse,
                setEarse
            }}/>
        </div>
    );
};

export default WhiteBoard;