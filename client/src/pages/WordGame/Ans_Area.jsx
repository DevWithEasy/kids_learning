import React from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

const Ans_Area = () => {
    const [letters,setLetters] = useState([])
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'letter',
        drop: (item) => addLetter(item.letter),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addLetter=(letter)=>{
        setLetters([...letters,letter])
    }
    console.log(letters)
    return (
        <div>
            <div
                    ref={drop}
                    className='p-4 border'
                >
                    {
                        letters.map((letter,i)=><p key={i}>{letter}</p>)
                    }
                </div>
        </div>
    );
};

export default Ans_Area;