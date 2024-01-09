import React, { useState } from 'react';
import MathMethod from '../../../utils/game/MathMethod';
import correct_ans_sound from '../../../assets/correct.mp3'
import wrong_ans_sound from '../../../assets/game_wrong_answer.mp3'
import AdditionHelper from './addition/AdditionHelper';

const Addition = () => {
    const [n_1,setN_1] = useState(MathMethod.random(5))
    const [n_2,setN_2] = useState(MathMethod.random(5))
    const [answer,setAnswer] = useState('?')
    const addition = n_1 + n_2
    const numbers = MathMethod.numbers(n_1 + n_2)
    const handleAnswer=(addition,n)=>{
        if(addition === n){
            setAnswer(n)
            const audio = new Audio(correct_ans_sound)
            audio.play()
            setTimeout(()=>{
                setN_1(MathMethod.random(5))
                setN_2(MathMethod.random(5))
                setAnswer('?')
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
                                onClick={()=>handleAnswer(addition,number)}
                                className='px-6 py-2 border'
                            >
                                {number}
                            </button>    
                        )
                    }
                </div>
                <AdditionHelper {...{n_1,n_2}}/>
            </div>
        </div>
    );
};

export default Addition;