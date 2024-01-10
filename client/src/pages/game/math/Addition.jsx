import React, { useEffect, useState } from 'react';
import MathMethod from '../../../utils/game/MathMethod';
import correct_ans_sound from '../../../assets/correct.mp3'
import wrong_ans_sound from '../../../assets/game_wrong_answer.mp3'
import AdditionHelper from './addition/AdditionHelper';
import apple from '../../../assets/image/addition_apple.png'
import banana from '../../../assets/image/addition_banana.png'
import guava from '../../../assets/image/addition_guava.png'
import orange from '../../../assets/image/addition_orange.png'
import pineapple from '../../../assets/image/addition_pineapple.png'
import useAddStore from '../../../store/addStore';

const Addition = () => {
    const fruits = [apple, banana, guava, orange, pineapple]
    const {n_1,setN_1,n_2,setN_2,index,setIndex,numbers,setNumbers,answer,setAnswer,setAddArray,setArray_1,setArray_2,setDummyArray_1,setDummyArray_2,wrong,setWrong,wrongId,setWrongId} = useAddStore()
    const image = fruits[index]
    const handleAnswer = (addition, n, id) => {
        if (addition === n) {
            setAnswer(n)
            setWrongId(id)
            const audio = new Audio(correct_ans_sound)
            audio.play()
            setTimeout(() => {
                const gn_1 = MathMethod.random(5)
                const gn_2 = MathMethod.random(5)
                setN_1(gn_1)
                setN_2(gn_2)
                setNumbers(MathMethod.numbers(gn_1 + gn_2))
                setAnswer('?')
                setAddArray([])
                setIndex(MathMethod.random(5))
                setArray_1(MathMethod.dragArray(gn_1, 'array_1'))
                setArray_2(MathMethod.dragArray(gn_2, 'array_2'))
                setDummyArray_1(MathMethod.dummayArray(gn_1))
                setDummyArray_2(MathMethod.dummayArray(gn_2))
                setWrongId(null)
            }, 1000)
        } else {
            const audio = new Audio(wrong_ans_sound)
            audio.play()
            setWrong(true)
            setWrongId(id)
            setTimeout(() => {
                setWrong(false)
                setWrongId(null)
            }, 500)
        }
    }
    useEffect(() => {
        const gn_1 = MathMethod.random(5)
        const gn_2 = MathMethod.random(5)
        setN_1(gn_1)
        setN_2(gn_2)
        setNumbers(MathMethod.numbers(gn_1 + gn_2))
        setIndex(MathMethod.random(5))
        setAddArray([])
        setArray_1(MathMethod.dragArray(gn_1, 'array_1'))
        setArray_2(MathMethod.dragArray(gn_2, 'array_2'))
        setDummyArray_1(MathMethod.dummayArray(gn_1))
        setDummyArray_2(MathMethod.dummayArray(gn_2))
    }, [])
    // console.log(n_1)
    return (
        <div
            className=''
        >
            <h2
                className='p-2  fixed top-0 text-2xl bg-white w-full shadow z-10'
            >
                যোগের খেলা
            </h2>
            <div
                className='p-2 text-6xl space-y-2'
            >
                <div
                    className='flex flex-col justify-center items-center p-5 bg-white rounded-md border'
                >
                    <p>
                        {n_1} + {n_2}
                    </p>
                    <p>
                        =
                    </p>
                    <p
                        className={`px-6 py-2 border rounded-md ${answer === '?' ? 'text-gray-300' : ' border-green-500'}`}
                    >
                        <span
                            className={`${answer === '?' ? 'inline-block px-2 text-4xl  animate-bounce' : 'text-green-500'}`}
                        >
                            {answer}
                        </span>
                    </p>
                </div>
                <div
                    className='flex justify-center p-5 bg-white space-x-3 rounded-md border'
                >
                    {numbers &&
                        numbers.map((number, i) =>
                            <button
                                key={i}
                                onClick={() => handleAnswer(n_1 + n_2, number, i)}
                                className={`px-6 py-2 border rounded-md ${wrong && wrongId == i ? 'bg-red-500 text-white' : !wrong && wrongId == i ? 'bg-green-500 text-white' : ''}`}
                            >
                                {number}
                            </button>
                        )
                    }
                </div>
                <AdditionHelper {...{ image }} />
            </div>
        </div>
    );
};

export default Addition;