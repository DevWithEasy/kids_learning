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

const Addition = () => {
    const fruits = [apple, banana, guava, orange, pineapple]
    const [n_1, setN_1] = useState(0)
    const [n_2, setN_2] = useState(0)
    const [answer, setAnswer] = useState('?')
    const [numbers, setNumbers] = useState([])
    const [addArray, setAddArray] = useState([])
    const [index, setIndex] = useState(0)
    const image = fruits[index]
    const [array_1, setArray_1] = useState(MathMethod.dragArray(n_1, 'array_1'))
    const [array_2, setArray_2] = useState(MathMethod.dragArray(n_2, 'array_2'))
    const [dummyArray_1, setDummyArray_1] = useState([])
    const [dummyArray_2, setDummyArray_2] = useState([])
    const [wrong, setWrong] = useState(false)
    const [wrongId, setWrongId] = useState(null)
    const handleAnswer = (addition, n, id) => {
        if (addition === n) {
            setAnswer(n)
            setWrongId(id)
            const audio = new Audio(correct_ans_sound)
            audio.play()
            setTimeout(() => {
                const n_1 = MathMethod.random(5)
                const n_2 = MathMethod.random(5)
                setN_1(n_1)
                setN_2(n_2)
                setNumbers(MathMethod.numbers(n_1 + n_2))
                setAnswer('?')
                setAddArray([])
                setIndex(MathMethod.random(5))
                setArray_1(MathMethod.dragArray(n_1, 'array_1'))
                setArray_2(MathMethod.dragArray(n_2, 'array_2'))
                setDummyArray_1(MathMethod.dummayArray(n_1))
                setDummyArray_2(MathMethod.dummayArray(n_2))
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
        const n_1 = MathMethod.random(5)
        const n_2 = MathMethod.random(5)
        setN_1(n_1)
        setN_2(n_2)
        setNumbers(MathMethod.numbers(n_1 + n_2))
        setIndex(MathMethod.random(5))
        setArray_1(MathMethod.dragArray(n_1, 'array_1'))
        setArray_2(MathMethod.dragArray(n_2, 'array_2'))
        setDummyArray_1(MathMethod.dummayArray(n_1))
        setDummyArray_2(MathMethod.dummayArray(n_2))
        console.log('from useEffect')
    }, [])
    return (
        <div
            className=''
        >
            <h2
                className='p-2  fixed top-0 text-2xl bg-white w-full shadow'
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
                <AdditionHelper {...{ image, array_1, setArray_1, array_2, setArray_2, dummyArray_1, dummyArray_2, addArray, setAddArray }} />
            </div>
        </div>
    );
};

export default Addition;