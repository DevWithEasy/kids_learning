import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
    return (
        <div
            className='h-screen'
        >
            <Link to='/game/addition'>Addition</Link>
            <Link to='/game/substraction'>Addition</Link>
        </div>
    );
};

export default Game;