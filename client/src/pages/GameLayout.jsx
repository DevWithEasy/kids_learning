import React, { useRef } from 'react';
import bgSound from '../assets/background.mp3';

const GameLayout = ({children}) => {
    const audioRef = useRef(null)
    useEffect(() => {

        audioRef.current.volume = 0.5

        audioRef?.current.play();

    }, [])
    return (
        <div>
            {children}
            <audio ref={audioRef} src={bgSound} loop />
        </div>
    );
};

export default GameLayout;