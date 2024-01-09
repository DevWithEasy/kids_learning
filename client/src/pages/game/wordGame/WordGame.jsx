import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import useWordStore from '../../../store/wordStore';
import shuffleWord from '../../../utils/shuffleWord';
import bgSound from '../../../assets/background.mp3';
import Ans_Area from './Ans_Area';
import QN_Area from './Qn_Area';

const WordGame = () => {
    const game = useRef()
    const audioRef = useRef(null);
    const { addWord } = useWordStore()
    const [word, setWord] = useState('কলসি')
    const [letters, setLetters] = useState([])
    const [ans_letters, setAns_letters] = useState([])

    useEffect(() => {
        setLetters(shuffleWord(word))

        addWord(word)

        audioRef.current.volume = 0.5

        audioRef?.current.play();

    }, [word])
    return (
        <div
            ref={game}
            className='h-screen flex flex-col justify-between bg-gray-100 font-kalpurush'
        >
            <Ans_Area {...{ word, letters, setLetters, ans_letters, setAns_letters }} />
            <QN_Area {...{ word, letters, setLetters, ans_letters, setAns_letters }} />
            <audio ref={audioRef} src={bgSound} loop />
        </div>

    );
};

export default WordGame;
