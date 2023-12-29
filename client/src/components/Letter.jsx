import React from 'react';
import { useDrag } from 'react-dnd';

const Letter = ({ letter, id }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'LETTER',
        item: { id, letter },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                position: 'absolute',
                width: '50px',
                height: '50px',
                backgroundColor: 'lightblue',
                textAlign: 'center',
                lineHeight: '50px',
            }}
        >
            {letter}
        </div>
    );
};

export default Letter;
