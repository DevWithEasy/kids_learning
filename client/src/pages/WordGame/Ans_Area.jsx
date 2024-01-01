import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import AnsAlert from '../../components/wordGame/AnsAlert';

const Ans_Area = ({ word, letters, setLetters, ans_letters, setAns_letters, clientHeight }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'letter',
        drop: (item) => addLetter(item.letter),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const [ansView, setAnsView] = useState(false)
    const [type, setType] = useState('yes')
    const [blink, setBlink] = useState(0)
    const addLetter = (letter) => {
        setAns_letters(prevState => {
            return [...prevState, letter]
        })
        setLetters(prevState => {
            return prevState.filter(item => item !== letter)
        })
        setBlink(preValue => preValue + 1)
    }

    const removeLetter = (letter) => {
        setAns_letters(prevState => {
            return prevState.filter(item => item !== letter)
        })
        setLetters(prevState => {
            return [...prevState, letter]
        })
        setBlink(preValue => preValue - 1)
    }
    useEffect(() => {
        if (word.length === ans_letters.length) {
            if (word === ans_letters.join('')) {
                setAnsView(!ansView)
                setType('yes')
            } else {
                setAnsView(!ansView)
                setType('no')
            }
        }
    }, [ans_letters])
    return (
        <div
            className='h-[100%]'
        >
            <div
                ref={drop}
                className={`h-full p-4 flex justify-center items-center ${isOver ? 'bg-gray-50' : ''}`}
            >
                <div
                    className='flex flex-col justify-center space-y-3'
                >
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto md:w-10 md:h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>

                    </button>
                    <p
                        className='text-center text-7xl'
                    >
                        {ans_letters.length > 0 ? ans_letters.join('') : '?'}
                    </p>

                    <div
                        className='relative'
                    >
                        <div
                            className='flex space-x-0.5'
                        >
                            {
                                new Array(word.length).fill('')
                                    .map((item, i) =>
                                        <p
                                            className='p-2 w-12 h-12 flex justify-center items-center text-center bg-white text-gray-200 border md:w-16 md:h-16 md:text-3xl'
                                        >
                                            <span
                                                className={`${i == blink ? 'animate-pulse' : ''}`}
                                            >
                                                ?
                                            </span>
                                        </p>
                                    )
                            }
                        </div>
                        <div
                            className='absolute left-0 top-0 flex space-x-0.5'
                        >
                            {
                                ans_letters.map((letter, i) => <p
                                    key={i}
                                    onClick={() => removeLetter(letter)}
                                    className='relative p-2 w-12 h-12 flex justify-center bg-white items-center text-center border cursor-pointer group hover:bg-red-500 hover:text-white hover:border-none hover:rounded-full hover:flex-row-reverse transition-all duration-300 md:w-16 md:h-16 md:text-3xl'
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
            </div>
            {ansView &&
                <AnsAlert {...{
                    type,
                    ansView,
                    setAnsView
                }} />
            }
        </div>
    );
};

export default Ans_Area;