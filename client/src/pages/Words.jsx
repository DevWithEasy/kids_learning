import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'

const Words = () => {
    const board = useRef()
    const [clientWidth, setClientWidth] = useState(192)
    const [clientHeight, setClientHeight] = useState(192)
    const letters = ['X', 'P', 'R', 'T'];
    const [] = useState([])

    useEffect(() => {
        if (board.current) {
            const { width, height } = board?.current.getBoundingClientRect();

            setClientWidth(width)
            setClientHeight(height)
        }
    }, [])

    const generate=()=>{
        const array = []
        for (let i = 0; i < letters.length; i++) {
            const element = letters[i];
            // console.log(element)
            array.push({
                text : element,
                animation : {
                    x : i + 1 * 20,
                    y  : i + 1 * 20
                }
            })
            
        }
        return(array)
    }
    generate()
    return (
        <div
            className='m-4 h-[300px] w-[300px] flex justify-center items-center bg-gray-50  overflow-hidden'
        >
            <div
                className='relative w-10 h-10'
            >
                {letters.map((l, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x : -100,
                            y : 0,
                        }}
                        transition={{
                            delay : 0.2
                        }}
                        className='absolute w-10 h-10 bg-teal-100 text-center rounded-full'
                    >
                        A
                    </motion.div>
                ))}
            </div>
            
            {/* <div
                className='relative w-10 h-10'
            >
            <motion.div
                animate={{
                    x : -100,
                    y : 0
                }}
                transition={{
                    delay : 0.2
                }}
                className='absolute w-10 h-10 bg-teal-100 text-center rounded-full'
            >
                A
            </motion.div>
            <motion.div
                animate={{
                    x : -80,
                    y : 50
                }}
                transition={{
                    delay : 0.2
                }}
                className='absolute w-10 h-10 bg-red-100 text-center rounded-full'
            >
                B
            </motion.div>
            <motion.div
                animate={{
                    x : -50,
                    y : 80
                }}
                transition={{
                    delay : 0.4
                }}
                className='absolute w-10 h-10 bg-blue-100 text-center rounded-full'
            >
                C
            </motion.div>
            </div> */}
        </div>
    );
};

export default Words;
