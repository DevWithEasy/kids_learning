import React, {useEffect, useRef, useState } from 'react';
import { Board, BoardControllers } from '../Index';



const Draw = ({ letter }) => {
    const canvasRef = useRef()
    const [strokSize, setStrokSize] = useState(12)
    const [strokColor, setStrokColor] = useState('#000000')
    const [wordVisible, setWordVisible] = useState(true)
    const [earse,setEarse] = useState(false)

    useEffect(()=>{
        canvasRef?.current?.resetCanvas()
    },[letter])

    return (
        <div
            className='space-y-2'
        >
            <Board {...{
                canvasRef,
                letter,
                strokColor,
                strokSize,
                wordVisible
            }}/>

            <BoardControllers {...{
                canvasRef,
                strokColor,setStrokColor,
                strokSize,setStrokSize,
                earse,setEarse,
                wordVisible,setWordVisible
            }}/>
        </div>
    );
};

export default Draw;