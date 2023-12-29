import React from 'react';
import { useDrag } from 'react-dnd';

const Letter = ({ letter, id }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'letter',
        item: { id, letter },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={`w-10 h-10 p-2 flex justify-center items-center bg-sky-100 rounded-full`}
        >
            <span>{letter}</span>
        </div>
    );
};

export default Letter;
