import React from 'react';
import { useDrag } from 'react-dnd';
import {motion} from 'framer-motion'

const Letter = ({ letter, value }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'letter',
        item: { letter },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const isOdd = value % 2 === 0
    return (
        <motion.div
            ref={drag}
            initial={{
                y : 0
            }}
            animate={{
                y : !isOdd ? -20+(Math.random(100)*20) : 0
            }}
            drag
            className={`w-12 h-12 p-2 flex justify-center items-center bg-green-100 text-2xl rounded-full shadow-md hover:cursor-move ${isDragging ? 'opacity-50' : 'opacity-100'} md:w-16 md:h-16 md:text-3xl`}
        >
            <span>{letter}</span>
        </motion.div>
    );
};

export default Letter;
