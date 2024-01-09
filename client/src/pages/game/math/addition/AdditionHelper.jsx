import React, { useEffect, useState } from 'react';
import MathMethod from '../../../../utils/game/MathMethod';
import { useDrop } from 'react-dnd';
import DragNumber from './DragNumber';

const AdditionHelper = ({ n_1, n_2, image, addArray, setAddArray }) => {
    const [array_1, setArray_1] = useState(MathMethod.dragArray(n_1, 'array_1'))
    const [array_2, setArray_2] = useState(MathMethod.dragArray(n_2, 'array_2'))

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'number',
        drop: (item) => addItem(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItem = (item) => {
        
        setAddArray(prevArray => [...prevArray, item])

        if (item.array === 'array_1') {
            console.log(item)
            const newArray = array_1.filter(i => i._id !== item._id)
            console.log(newArray)
            setArray_1(newArray)
        } else {
            // const newArray = array_2.filter(i => i._id !== item._id)
            // setArray_2(newArray)
        }
    }

    return (
        <div
            className='p-10 bg-white flex justify-between'
        >
            <div
                ref={drop}
                className={`w-1/2 flex flex-wrap ${isOver ? 'bg-gray-50' : ''}`}
            >
                {addArray &&
                    addArray.map((item, i) =>
                        <img
                            key={i}
                            src={item?.image}
                            className='w-12 h-12'
                        />
                    )
                }
            </div>
            <div
                className='w-1/2'
            >
                <div
                    className='relative'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            MathMethod.dummayArray(n_1).map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-12 h-12 grayscale opacity-50'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-0 flex items-center z-50 '
                    >
                        {array_1.map((item, i) =>
                            <DragNumber key={i} {...{ item, image }} />
                        )}
                    </div>
                </div>
                <div
                    className='relative flex items-center'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            MathMethod.dummayArray(n_2).map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-12 h-12 grayscale'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-0 flex items-center z-50'
                    >
                        {array_2.map((item, i) =>
                            <DragNumber key={i} {...{ item, image }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionHelper;