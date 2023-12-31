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
            initial={{
                scale : 0
            }}
            animate = {{
                scale : 1,
                y : isOdd ? 0 : -20
            }}
            transition={{
                delay : 0.1 * value,
                duration : 0.1 * value
            }}
            drag
            dragConstraints ={{}}
            ref={drag}
            className={`w-10  h-10  p-2 flex justify-center items-center bg-sky-100 rounded-full shadow-md hover:cursor-move ${isDragging ? 'opacity-50' : 'opacity-100'} md:w-16 md:h-16 md:text-3xl`}
        >
            <span>{letter}</span>
        </motion.div>
    );
};

export default Letter;
