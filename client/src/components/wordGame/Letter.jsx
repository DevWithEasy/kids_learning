import React from 'react';
import { useDrag } from 'react-dnd';

const Letter = ({ letter}) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'letter',
        item: { letter },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    
    return (
        <div
            ref={drag}
            className={`w-12 h-12 p-2 flex justify-center items-center bg-green-100 text-2xl rounded-full shadow-md hover:cursor-move ${isDragging ? 'opacity-50' : 'opacity-100'} md:w-16 md:h-16 md:text-3xl`}
        >
            <span>{letter}</span>
        </div>
    );
};

export default Letter;
