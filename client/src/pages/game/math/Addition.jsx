import React, { useState } from 'react';
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
    const [n_1,setN_1] = useState()
    const [n_2,setN_2] = useState()
    const [answer,setAnswer] = useState('?')
    const [numbers,setNumbers] = useState()
    const [addArray, setAddArray] = useState([])
    const [index, setIndex] = useState(MathMethod.random(5))
    const image = fruits[index]
    const [array_1, setArray_1] = useState(MathMethod.dragArray(n_1, 'array_1'))
    const [array_2, setArray_2] = useState(MathMethod.dragArray(n_2, 'array_2'))
    const handleAnswer=(addition,n)=>{
        if(addition === n){
            setAnswer(n)
            const audio = new Audio(correct_ans_sound)
            audio.play()
            setTimeout(()=>{
                const n_1 = MathMethod.random(5)
                const n_2 = MathMethod.random(5)
                setN_1(n_1)
                setN_2(n_2)
                setNumbers(MathMethod.numbers(n_1 + n_2))
                setAnswer('?')
                setAddArray([])
                setIndex(MathMethod.random(5))
            },1000)
        }else{
            const audio = new Audio(wrong_ans_sound)
            audio.play()
        }
    }
    return (
        <div
            className='pt-12'
        >
            <div
                className='p-10 text-6xl space-y-2'
            >
                <div
                    className='p-5 bg-white'
                >
                    {n_1} + {n_2} = {answer}
                </div>
                <div
                    className='p-5 bg-white space-x-3'
                >
                    {numbers &&
                        numbers.map(number=>
                            <button
                                onClick={()=>handleAnswer(n_1+n_2,number)}
                                className='px-6 py-2 border'
                            >
                                {number}
                            </button>    
                        )
                    }
                </div>
                <AdditionHelper {...{n_1,n_2,image,array_1,array_2,addArray, setAddArray}}/>
            </div>
        </div>
    );
};

export default Addition;