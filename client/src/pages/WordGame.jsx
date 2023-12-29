// WordGame.js

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Letter from '../components/Letter';

const lettersArray = ['ক', 'ল', 'ম'];

const WordGame = () => {
    const [word, setWord] = useState([]);

    const handleDrop = (item) => {
        setWord((prevWord) => [...prevWord, item.letter]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                {lettersArray.map((letter, index) => (
                    <Letter key={index} id={index} letter={letter} />
                ))}
            </div>
            <div>
                <p>Formed Word: {word.join('')}</p>
            </div>
        </DndProvider>
    );
};

export default WordGame;
