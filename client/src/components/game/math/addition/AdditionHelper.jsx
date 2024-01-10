import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import DragNumber from './DragNumber';
import useAddStore from '../../../../store/addStore';

const AdditionHelper = ({ image }) => {
    const { array_1, array_2, dummyArray_1, dummyArray_2, addArray, dropItem } = useAddStore()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'number',
        drop: (item) => addItem(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItem = (item) => {
        dropItem(item)
    }

    return (
        <div
            className='flex flex-col md:flex-row justify-between bg-white  border rounded-md'
        >
            <div
                ref={drop}
                className={`md:w-1/2 p-5 flex flex-wrap ${isOver ? 'bg-gray-50' : ''} border-b md:border-b-none md:border-r`}
            >
                {addArray.length === 0 ?
                    <p
                        className='w-full animate-pulse space-y-2'
                    >
                        <img
                            src={image}
                            className='w-10 mx-auto h-10 grayscale opacity-50'
                        />
                        <span
                            className='block text-sm font-kalpurush text-center text-gray-500'
                        >
                            নিচের ফলের সারি থেকে শেষ দিকে থেকে ফল গুলো টেনে এনে রাখ
                        </span>
                    </p>
                    :
                    addArray.map((item, i) =>
                        <img
                            key={i}
                            src={item?.image}
                            className='w-10 h-10'
                        />
                    )
                }
            </div>
            <div
                className='md:w-1/2 space-y-2'
            >
                <div
                    className='relative p-5 border-b'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            dummyArray_1.map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-10 h-10 grayscale opacity-50'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-5 flex items-center z-50 '
                    >
                        {array_1.map((item, i) =>
                            <DragNumber key={i} {...{ item, image, yoyo: array_1.length === i + 1 ? 'yes' : 'no' }} />
                        )}
                    </div>
                </div>
                <div
                    className='relative p-5 flex items-center'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            dummyArray_2.map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-10 h-10 grayscale opacity-50'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-5 flex items-center z-50'
                    >
                        {array_2.map((item, i) =>
                            <DragNumber key={i} {...{ i, item, image, yoyo: array_2.length === i + 1 ? 'yes' : 'no' }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionHelper;