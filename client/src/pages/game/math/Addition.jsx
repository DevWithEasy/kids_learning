import React, { useEffect } from 'react';
import correct_ans_sound from '../../../assets/correct.mp3';
import wrong_ans_sound from '../../../assets/game_wrong_answer.mp3';
import { A_NumberArea, AdditionHelper, Q_NumberArea } from '../../../components/Index';
import useAddStore from '../../../store/addStore';
import MathMethod from '../../../utils/game/MathMethod';
import fruits from '../../../utils/fruits';

const Addition = () => {
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
                <Q_NumberArea {...{
                    n_1,
                    n_2,
                    sign : '+',
                    answer
                    
                }}/>

                <A_NumberArea {...{
                    numbers,
                    wrong,
                    wrongId,
                    handleAnswer,
                    ans : n_1+n_2
                }}/>

                <AdditionHelper {...{ 
                    image
                }} />
            </div>
        </div>
    );
};

export default Addition;