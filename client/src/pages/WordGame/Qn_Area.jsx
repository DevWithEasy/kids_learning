import React, { useEffect, useState } from 'react';
import Letter from '../../components/Letter';
import shuffleWord from '../../utils/shuffleWord';

const QN_Area = ({ word }) => {
    const [letters, setLetters] = useState([])

    useEffect(() => {
        setLetters(shuffleWord(word))
    }, [word])

    return (
        <div
            className=''
        >
            <div
                className=''
            >
                {letters &&
                    letters.map((letter, i) => <Letter
                        key={i}
                        letter={letter}
                    />)
                }
            </div>
        </div>
    );
};

export default QN_Area;