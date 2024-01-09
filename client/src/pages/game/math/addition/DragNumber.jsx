import React from 'react';
import { useDrag } from 'react-dnd';
import DragNumberPreview from './DragNumberPreview';

const DragNumber = ({ item, image }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'number',
        item: { ...item, image },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    // console.log(image)
    return (
        <>
            <img
                ref={drag}
                src={image}
                className='w-10 h-10'
            />
            <DragNumberPreview />
        </>
    );
};

export default DragNumber;