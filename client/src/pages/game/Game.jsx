import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
    return (
        <div
            className=''
        >
            <h2
                className='p-2  fixed top-0 text-2xl bg-white w-full shadow'
            >
                খেলি ও শিখি
            </h2>
            <Link to='/game/addition'>Addition</Link>
            <Link to='/game/substraction'>Addition</Link>
        </div>
    );
};

export default Game;