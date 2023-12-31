import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
    const kids = [
        {
            letter: 'K',
            bg: 'bg-green-500'
        },
        {
            letter: 'I',
            bg: 'bg-pink-500'
        },
        {
            letter: 'D',
            bg: 'bg-lime-500'
        },
        {
            letter: 'S',
            bg: 'bg-red-500'
        }
    ]
    const learning = [
        {
            letter: 'S',
            bg: 'bg-blue-500'
        },
        {
            letter: 'C',
            bg: 'bg-pink-500'
        },
        {
            letter: 'H',
            bg: 'bg-lime-500'
        },
        {
            letter: 'O',
            bg: 'bg-violet-500'
        },
        {
            letter: 'O',
            bg: 'bg-yellow-500'
        },
        {
            letter: 'L',
            bg: 'bg-green-500'
        },
    ]
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        },5000)
    })
    return (
        <div
            className='h-screen flex justify-center items-center bg-gray-100'
        >
            <div
                className='space-y-2 flex flex-col justify-center items-center text-3xl'
            >
                <div
                    className='absolute top-20 left-10 w-52 h-52 rounded-full bg-red-200 mix-blend-multiply blur-xl animate-blob'
                >

                </div>
                <div
                    className='absolute top-20 right-10 w-52 h-52 rounded-full bg-yellow-200 mix-blend-multiply blur-xl animate-blob animation-delay-2000'
                >

                </div>
                <div
                    className='absolute top-52 left-36 w-52 h-52 rounded-full bg-green-200/50 mix-blend-multiply blur-xl animate-blob animation-delay-4000'
                >

                </div>
                <div
                    className='absolute bottom-10 left-10 w-52 h-52 rounded-full bg-pink-200 mix-blend-multiply blur-xl animate-blob animation-delay-4000'
                >

                </div>
                <div
                    className='absolute bottom-10 right-10 w-52 h-52 rounded-full bg-purple-200 mix-blend-multiply blur-xl animate-blob animation-delay-4000'
                >

                </div>
                <div
                    className='flex space-x-1 font-extrabold'
                >
                    {
                        kids.map((l, i) =>
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    x: -52
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.2 + (i === 0 ? 0 : (i + 1) / 5),
                                    delay: 0.2 + (i === 0 ? 0 : (i + 1) / 5),
                                }}

                                className={`w-12 h-12 flex justify-center items-center rounded-full text-white ${l.bg}`}
                            >
                                {l.letter}
                            </motion.div>
                        )
                    }
                </div>
                <div
                    className='flex italic'
                >
                    {
                        learning.map((l, i) =>
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 200
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.2 + (i === 1 ? 0 : (i + 1) / 5),
                                    delay: 1.2 + (i === 0 ? 0 : (i + 1) / 5),
                                }}

                                className={`w-12 h-12 flex justify-center items-center text-white ${l.bg}`}
                            >
                                {l.letter}
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Welcome;