import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QN_Area from './Qn_Area';
import Ans_Area from './Ans_Area';

const WordGame = () => {
    const [word, setWord] = useState('কলসি')
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className='h-screen bg-sky-500'
            >
                <Ans_Area/>
                <QN_Area {...{word}}/>
            </div>
        </DndProvider>
    );
};

export default WordGame;
