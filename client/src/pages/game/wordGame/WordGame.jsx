import React, { useEffect, useRef, useState } from 'react';
import bgSound from '../../../assets/background.mp3';
import useWordStore from '../../../store/wordStore';
import shuffleWord from '../../../utils/shuffleWord';
import { Ans_Area, QN_Area } from '../../../components/Index';

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
