import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addition from '../../assets/image/add.png'
import minus from '../../assets/image/minus.png'
import strawberry from '../../assets/image/strawberry.png'
import { arabic, bangla, color, days, english, math, month, season } from '../../utils/homeImages';

const Game = () => {
    const navigate = useNavigate()
    return (
        <div
            className='p-2 space-y-2'
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
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                        <div
                            className='w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-5xl'
                        >
                            <span>+</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                    </div>
                    <div
                        className='flex items-center'
                    >
                        <div
                            className='w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-5xl'
                        >
                            <span>=</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                        <img
                            src={strawberry}
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                    </div>
                    <p
                        className='pt-5'
                    >
                        যোগ করি
                    </p>
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
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                        <div
                            className='w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-5xl'
                        >
                            <span>-</span>
                        </div>
                        <img
                            src={strawberry}
                            className="w-8 md:w-10 h-8 md:h-10"
                        />
                    </div>
                    <div
                        className='flex items-center'
                    >
                        <div
                            className='w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-5xl'
                        >
                            <span>=</span>
                        </div>
                        <div
                            className='w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-5xl font-extrabold text-red-500'
                        >
                            <span>0</span>
                        </div>
                    </div>
                    <p
                        className='pt-5'
                    >
                        বিযোগ করি
                    </p>
                </div>
            </div>
            <h2
                className='p-2 text-2xl font-bold border-b-2 border-white'
            >
                শব্দ শুনে বর্ণ খুজি
            </h2>
            <div
                className='grid grid-cols-2 md:grid-cols-8 gap-4 text-xl'
            >
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={arabic}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        আরবি
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={bangla}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        বাংলা
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={english}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        ইংরেজি
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={math}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        অংক (নাম্বার বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={math}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        অংক (নাম্বার ইংরেজি)
                    </p>
                </div>
            </div>
            <h2
                className='p-2 text-2xl font-bold border-b-2 border-white'
            >
                শব্দ বানান মিলাই
            </h2>
            <div
                className='grid grid-cols-2 md:grid-cols-8 gap-4 text-xl'
            >
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={bangla}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        বাংলা
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={english}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        ইংরেজি
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={math}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        অংক (নাম্বার বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={math}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        অংক (নাম্বার ইংরেজি)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={days}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        সাতদিনের নাম (বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={days}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        সাতদিনের নাম (ইংরেজি)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={month}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        বার মাসের নাম (বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={month}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        বার মাসের নাম (ইংরেজি)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={season}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        ঋতুর নাম (বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={season}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        ঋতুর নাম নাম (ইংরেজি)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={color}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        রং নাম (বাংলা)
                    </p>
                </div>
                <div
                    onClick={() => navigate('')}
                    className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                >
                    <img
                        src={color}
                        className="w-16 h-16"
                    />
                    <p
                        className=""
                    >
                        রং নাম (ইংরেজি)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Game;