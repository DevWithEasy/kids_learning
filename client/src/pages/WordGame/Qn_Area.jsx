import React from 'react';
import Letter from '../../components/wordGame/Letter';

const QN_Area = ({ word,letters }) => {
    
    return (
        <div
            className='bg-gray-500'
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