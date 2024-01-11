import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import strawberry from '../../assets/image/strawberry.png'
import { arabic, bangla, color, days, english, math, month, season } from '../../utils/homeImages';

const Game = () => {
    const navigate = useNavigate()
    const lists = [
        {
            title: 'শব্দ শুনে বর্ণ খুজি',
            paths: [
                {
                    title: 'আরবি',
                    image: arabic,
                    path: '/game/alphabet/ar'
                },
                {
                    title: 'বাংলা',
                    image: bangla,
                    path: '/game/alphabet/bn'
                },
                {
                    title: 'ইংরেজি',
                    image: english,
                    path: '/game/alphabet/en'
                },
                {
                    title: 'অংক (নাম্বার বাংলা)',
                    image: math,
                    path: '/game/alphabet/'
                },
                {
                    title: 'অংক (নাম্বার ইংরেজি)',
                    image: math,
                    path: '/game/alphabet/'
                },
            ]
        },
        {
            title: 'শব্দ বানান মিলাই',
            paths: [
                {
                    title: 'বাংলা',
                    image: bangla,
                    path: '/game/alphabet/'
                },
                {
                    title: 'ইংরেজি',
                    image: english,
                    path: '/game/alphabet/'
                },
                {
                    title: 'অংক (নাম্বার বাংলা)',
                    image: math,
                    path: '/game/alphabet/'
                },
                {
                    title: 'অংক (নাম্বার ইংরেজি)',
                    image: math,
                    path: '/game/alphabet/'
                },
                {
                    title: 'সাতদিনের নাম (বাংলা)',
                    image: days,
                    path: '/game/alphabet/'
                },
                {
                    title: 'সাতদিনের নাম (ইংরেজি)',
                    image: days,
                    path: '/game/alphabet/'
                },
                {
                    title: 'বার মাসের নাম (বাংলা)',
                    image: month,
                    path: '/game/alphabet/'
                },
                {
                    title: 'বার মাসের নাম (ইংরেজি)',
                    image: month,
                    path: '/game/alphabet/'
                },
                {
                    title: 'ঋতুর নাম (বাংলা)',
                    image: season,
                    path: '/game/alphabet/'
                },
                {
                    title: 'ঋতুর নাম নাম (ইংরেজি)',
                    image: season,
                    path: '/game/alphabet/'
                },
                {
                    title: 'রং নাম (বাংলা)',
                    image: color,
                    path: '/game/alphabet/'
                },
                {
                    title: 'রং নাম (ইংরেজি)',
                    image: color,
                    path: '/game/alphabet/'
                },
            ]
        }
    ]
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
            <div>
                {
                    lists.map((list, i) =>
                        <div
                            className='space-y-2'
                        >
                            <h2
                                className='p-2 text-2xl font-bold border-b-2 border-white'
                            >
                                {list.title}
                            </h2>
                            <div
                                className='grid grid-cols-2 md:grid-cols-8 gap-4 text-xl'
                            >
                                {
                                    list.paths.map((path, i) => <div
                                        onClick={() => navigate(path.path)}
                                        className="p-4 flex flex-col items-center space-y-4 bg-white border rounded-md cursor-pointer"
                                    >
                                        <img
                                            src={path.image}
                                            className="w-16 h-16"
                                        />
                                        <p
                                            className=""
                                        >
                                            {path.title}
                                        </p>
                                    </div>)
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Game;