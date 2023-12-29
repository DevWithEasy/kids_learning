import React, { useEffect, useState } from 'react';
import Letter from '../../components/Letter';

const QN_Area = ({word}) => {
    const [letters, setLetters] = useState([])

    useEffect(() => {
        setLetters(word.split(''))
    }, [word])

    // console.log(word, letters, letters.join(''))

    return (
        <div
            className=''
        >
            {letters &&
                letters.map((letter,i)=> <Letter
                    key={i}
                    letter={letter}  
                />)
            }
        </div>
    );
};

export default QN_Area;