import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import useWordStore from '../../store/wordStore';

const Ans_Area = ({word,letters, setLetters,ans_letters, setAns_letters}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'letter',
        drop: (item) => addLetter(item.letter),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addLetter = (letter) => {
        setAns_letters(prevState=> {
            return [...prevState ,letter]
        })
        setLetters(prevState=> {
            return prevState.filter( item => item !== letter)
        })
    }

    const removeLetter = (letter) => {
        setAns_letters(prevState=> {
            return prevState.filter( item => item !== letter)
        })
        setLetters(prevState=> {
            return [...prevState ,letter]
        })
    }
    useEffect(()=>{
        if(word.length === ans_letters.length) {
            if(word === ans_letters.join('')){
                return console.log('Match found')
            }else{
                return console.log('Match not found')
            }
        }
    },[ans_letters])
    // console.log(word.length)
    return (
        <div>
            <div
                ref={drop}
                className={`p-4 ${isOver ? 'bg-gray-50' : ''}`}
            >
                <p>{ans_letters.join('')}</p>
                <div
                    className='flex space-x-0.5'
                >
                {
                    ans_letters.map((letter, i) => <p 
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