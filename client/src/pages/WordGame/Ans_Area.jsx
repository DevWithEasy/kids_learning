import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import AnsAlert from '../../components/wordGame/AnsAlert';

const Ans_Area = ({ word, letters, setLetters, ans_letters, setAns_letters }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'letter',
        drop: (item) => addLetter(item.letter),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const [ansView,setAnsView] = useState(false)
    const [type,setType] = useState('')
    const addLetter = (letter) => {
        setAns_letters(prevState => {
            return [...prevState, letter]
        })
        setLetters(prevState => {
            return prevState.filter(item => item !== letter)
        })
    }

    const removeLetter = (letter) => {
        setAns_letters(prevState => {
            return prevState.filter(item => item !== letter)
        })
        setLetters(prevState => {
            return [...prevState, letter]
        })
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
            className=''
        >
            <div
                ref={drop}
                className={`p-4 ${isOver ? 'bg-gray-50' : ''}`}
            >
                <p>{ans_letters ? ans_letters.join('') : ' '}</p>

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
                                        className='p-2 w-10 h-10 flex justify-center items-center text-center text-gray-200 border'
                                    >
                                        ? 
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
                                className='relative p-2 w-10 h-10 flex justify-center bg-white items-center text-center border cursor-pointer group hover:bg-red-500 hover:text-white hover:border-none hover:rounded-full hover:flex-row-reverse'
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
            {ansView &&
                <AnsAlert {...{
                    type,
                    ansView,
                    setAnsView
                }}/>
            }
        </div>
    );
};

export default Ans_Area;