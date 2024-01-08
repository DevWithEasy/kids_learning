import React from 'react';
import MathMethod from '../../../utils/game/MathMethod';

const Addition = () => {
    const number_1 = MathMethod.random(5)
    const number_2 = MathMethod.random(5)
    const addition = number_1 + number_2
    const numbers = MathMethod.numbers(number_1 + number_2)
    console.log(numbers)
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
                    {number_1}
                </div>
                <div
                    className='p-5 bg-white'
                >
                    {number_2}
                </div>
                <div
                    className='p-5 bg-white'
                >
                    {addition}
                </div>
            </div>
        </div>
    );
};

export default Addition;