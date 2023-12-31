import React from 'react';
import {motion} from 'framer-motion'

const Welcome = () => {
    return (
        <div
            className='p-4 flex space-x-1'
        >
            <motion.div
                initial ={{
                    opacity : 0,
                }}
                animate={{
                    opacity : 1,
                }}
                transition={{
                    duration : 0.2,
                }}

                className='w-12 h-12 flex justify-center items-center rounded-full bg-blue-400 text-white'
            >
                K
            </motion.div>
            <motion.div
                initial ={{
                    opacity : 0,
                    x : -52
                }}
                animate={{
                    opacity : 1,
                    x : 0
                }}
                transition={{
                    duration : 0.4,
                    delay : 0.2
                }}

                className='w-12 h-12 flex justify-center items-center rounded-full bg-blue-400 text-white'
            >
                K
            </motion.div>
        </div>
    );
};

export default Welcome;