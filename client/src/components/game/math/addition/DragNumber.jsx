import React from 'react';
import { useDrag } from 'react-dnd';
import DragNumberPreview from './DragNumberPreview';
import useAddStore from '../../../../store/addStore';

const DragNumber = ({yoyo, item, image }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'number',
        item: { ...item, image },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    
    return (
        <>
            <img
                ref={yoyo === 'yes' ? drag : null}
                src={image}
                className={`w-10 h-10 ${isDragging && 'opacity-0'}`}
            />
            <DragNumberPreview />
        </>
    );
};

export default DragNumber;