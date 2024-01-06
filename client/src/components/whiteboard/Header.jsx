import React from 'react';
import { motion } from 'framer-motion'

const Header = () => {
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
    
    return (
        <div
            className='absolute top-0 left-0 w-full px-4 pt-3 flex space-x-2'
        >
            <div
                    className='flex space-x-0.5 font-extrabold'
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

                                className={`w-6 h-6 flex justify-center items-center rounded-full text-white ${l.bg}`}
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
                                    x: 200
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.2 + (i === 1 ? 0 : (i + 1) / 5),
                                    delay: 1.2 + (i === 0 ? 0 : (i + 1) / 5),
                                }}

                                className={`w-5 flex justify-center items-center text-white ${l.bg}`}
                            >
                                {l.letter}
                            </motion.div>
                        )
                    }
                </div>
        </div>
    );
};

export default Header;