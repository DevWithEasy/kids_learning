import React, { useEffect, useState } from 'react';
import MathMethod from '../../../utils/game/MathMethod';
import { A_NumberArea, Q_NumberArea } from '../../../components/Index';
import correct_ans_sound from '../../../assets/correct.mp3';
import wrong_ans_sound from '../../../assets/game_wrong_answer.mp3';
import fruits from '../../../utils/fruits';

const Substraction = () => {
    const [index, setIndex] = useState(0)
    const [numbers, setNumbers] = useState([])
    const [subArray, setSubArray] = useState([])
    const [answer, setAnswer] = useState('?')
    const [wrong, setWrong] = useState(false)
    const [wrongId, setWrongId] = useState(null)
    const [dummyArray, setDummyArray] = useState([])
    const image = fruits[index]
    const [number, setNumber] = useState(0)
    const [can_number, setCan_number] = useState(0)

    const handleAnswer = (addition, n, id) => {
        if (addition === n) {
            setAnswer(n)
            setWrongId(id)
            const audio = new Audio(correct_ans_sound)
            audio.play()
            setTimeout(() => {
                const gn_1 = MathMethod.random(10)
                const gn_2 = MathMethod.random(10)
                const gn_array = gn_1 > gn_2 ? [gn_1, gn_2] : [gn_2, gn_1]
                setIndex(MathMethod.random(5))
                setSubArray(gn_array)
                setNumbers(MathMethod.numbers(gn_array[0] - gn_array[1]))
                setDummyArray(MathMethod.dummayArray(gn_array[0]))
                setNumber(gn_array[0])
                setCan_number(0)
                setAnswer('?')
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
        const gn_1 = MathMethod.random(10)
        const gn_2 = MathMethod.random(10)
        const gn_array = gn_1 > gn_2 ? [gn_1, gn_2] : [gn_2, gn_1]
        setIndex(MathMethod.random(5))
        setSubArray(gn_array)
        setNumbers(MathMethod.numbers(gn_array[0] - gn_array[1]))
        setDummyArray(MathMethod.dummayArray(gn_array[0]))
        setNumber(gn_array[0])
        setCan_number(0)
    }, [])

    return (
        <div>
            <h2
                className='p-2  fixed top-0 text-2xl bg-white w-full shadow z-10'
            >
                বিয়োগের খেলা
            </h2>
            <div
                className='p-2 text-6xl space-y-2'
            >
                <Q_NumberArea {...{
                    n_1: subArray[0],
                    n_2: subArray[1],
                    sign: '-',
                    answer
                }} />

                <A_NumberArea {...{
                    numbers,
                    wrong,
                    wrongId,
                    handleAnswer,
                    ans: subArray[0] - subArray[1]
                }} />

                <div
                    className='flex flex-col md:flex-row justify-between bg-white  border rounded-md'
                >
                    <div
                        className='md:w-1/2 relative p-5 border-b md:border-b-none md:border-r'
                    >
                        <div
                            className='flex items-center'
                        >
                            {
                                dummyArray.map(i =>
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
                            {
                                new Array(number).
                                    fill(0)
                                    .map((_, i) => <img
                                        key={i}
                                        src={image}
                                        onClick={() => {
                                            setNumber(prev => prev - 1)
                                            setCan_number(prev => prev + 1)
                                        }}
                                        className='w-10 h-10 cursor-pointer'
                                    />)
                            }
                        </div>
                    </div>
                    <div
                        className='md:w-1/2 p-5 flex items-center justify-center'
                    >
                        {
                            can_number === 0 ?
                            <p
                                className='h-10 text-sm text-center text-gray-500 animate-pulse'
                            >
                                বাদ নাম্বার হিসাব করতে ফলের উপরে টাচ কর
                            </p>
                            :
                            new Array(can_number).
                                fill(0)
                                .map((_, i) => <img
                                    key={i}
                                    src={image}
                                    onClick={() => {
                                        setNumber(prev => prev + 1)
                                        setCan_number(prev => prev - 1)
                                    }}
                                    className='w-10 h-10 cursor-pointer'
                                />)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Substraction;