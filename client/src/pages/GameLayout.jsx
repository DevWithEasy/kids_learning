import React, { useEffect, useRef } from 'react';
import bgSound from '../assets/background.mp3';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

const GameLayout = ({ children }) => {
    const audioRef = useRef(null)
    useEffect(() => {

        audioRef.current.volume = 0.5

        audioRef?.current.play();

    }, [])
    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <div
                className='h-screen pt-12 pb-5 font-kalpurush overflow-y-auto bg-gray-100'
            >
                {children}
                <audio ref={audioRef} src={bgSound} loop />
            </div>
        </DndProvider>
    );
};

export default GameLayout;