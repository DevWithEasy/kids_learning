import React, { useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QN_Area from './Qn_Area';
import Ans_Area from './Ans_Area';
import shuffleWord from '../../utils/shuffleWord';
import useWordStore from '../../store/wordStore';

const WordGame = () => {
    const game = useRef()
    const {addWord} = useWordStore()
    const [word, setWord] = useState('কলসি')
    const [letters, setLetters] = useState([])
    const [ans_letters, setAns_letters] = useState([])
    const [clientWidth, setClientWidth] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)

    useEffect(() => {
        setLetters(shuffleWord(word))

        addWord(word)

        if (game.current) {
            const { width, height } = game?.current.getBoundingClientRect();

            setClientWidth(width)
            setClientHeight(height)
        }
    }, [word])
    

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                ref={game}
                className='h-screen flex flex-col justify-between bg-gray-100 font-kalpurush'
            >
                <Ans_Area {...{word,letters, setLetters,ans_letters, setAns_letters}}/>
                <QN_Area {...{word,letters, setLetters,ans_letters, setAns_letters}}/>
            </div>
        </DndProvider>
    );
};

export default WordGame;
