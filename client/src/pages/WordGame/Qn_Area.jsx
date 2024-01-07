import React from 'react';
import Letter from '../../components/wordGame/Letter';

const QN_Area = ({ word,letters }) => {
    
    return (
        <div
            className='h-[250px] flex flex-col justify-center items-center bg-gray-200'
        >
            <div
                className='flex space-x-2'
            >
                {letters &&
                    letters.map((letter, i) => <Letter
                        key={i}
                        value={i}
                        letter={letter}
                    />)
                }
            </div>
        </div>
    );
};

export default QN_Area;