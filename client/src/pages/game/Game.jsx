import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addition from '../../assets/image/add.png'
import minus from '../../assets/image/minus.png'
import strawberry from '../../assets/image/strawberry.png'

const Game = () => {
    const navigate = useNavigate()
    return (
        <div
            className='p-2'
        >
            <h2
                className='p-2  fixed left-0 top-0 text-2xl bg-white w-full shadow'
            >
                খেলি ও শিখি
            </h2>
            <div
                className='grid grid-cols-2 md:grid-cols-8 gap-4 text-xl'
            >
                <div
                    onClick={() => navigate('/game/addition')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <div
                        className='flex'
                    >
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                        <div
                            className='w-10 h-10 flex justify-center items-center text-7xl'
                        >
                            <span>+</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                    </div>
                    <div
                        className='flex items-center'
                    >
                        <div
                            className='w-10 h-10 flex justify-center items-center text-7xl'
                        >
                            <span>=</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                    </div>
                </div>
                <div
                    onClick={() => navigate('/game/substraction')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <div
                        className='flex'
                    >
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                        <div
                            className='w-10 h-10 flex justify-center items-center text-7xl'
                        >
                            <span>-</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-10 h-10"
                        />
                    </div>
                    <div
                        className='flex items-center'
                    >
                        <div
                            className='w-10 h-10 flex justify-center items-center text-7xl'
                        >
                            <span>=</span>
                        </div>
                        <div
                            className='w-10 h-10 flex justify-center items-center text-6xl font-extrabold text-red-500'
                        >
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;