import React from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

const Ans_Area = () => {
    const [letters, setLetters] = useState([])
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'letter',
        drop: (item) => addLetter(item.letter),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addLetter = (letter) => {
        setLetters((prevLetters) => [...prevLetters, letter])
    }

    const removeLetter = (letter) => {
        const findLetters = letters.filter(item => item !== letter)
        setLetters(findLetters)
    }

    // console.log(letters)
    // console.log(letters.join(''))
    return (
        <div>
            <div
                ref={drop}
                className='p-4'
            >
                <p>{letters.join('')}</p>
                <div
                    className='flex space-x-0.5'
                >
                {
                    letters.map((letter, i) => <p 
                            key={i}
                            onClick={()=>removeLetter(letter)}
                            className='relative p-2 w-10 h-10 flex justify-center items-center text-center border cursor-pointer group hover:bg-red-500 hover:text-white hover:border-none hover:rounded-full hover:flex-row-reverse'
                        >
                            <span
                                className='group-hover:invisible'
                            >
                                {letter}
                            </span>
                            <span
                                className='absolute invisible group-hover:visible text-center'
                            >
                                X
                            </span>
                        </p>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Ans_Area;