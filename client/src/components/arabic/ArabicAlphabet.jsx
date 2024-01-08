import React from 'react';
import getArabicList from '../../utils/arabicLetterGenerate';
import apiurl from '../../utils/apiurl';

const ArabicAlphabet = ({ letters }) => {
    const play = (path) => {
        const audio = new Audio(`${apiurl}${path}`)
        audio.play()
    }
    return (
        <div>
            <div
                className='p-4 space-y-4 hidden md:block'
            >
                {letters &&
                    getArabicList(letters, 5).map((letter, i) =>
                        <div
                            key={i}
                            className="grid grid-cols-5 gap-x-4"
                        >
                            {
                                letter.map(l => <div
                                    onClick={() => play(l.audio)}
                                    className="p-4 flex flex-col justify-center items-center space-y-3 bg-white rounded-2xl border cursor-pointer"
                                >
                                    <p
                                        className="text-4xl md:text-8xl text-center font-extrabold"
                                    >
                                        {l.letter}
                                    </p>
                                </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div
                className='p-4 space-y-4 md:hidden'
            >
                {letters &&
                    getArabicList(letters, 4).map((letter, i) =>
                        <div
                            key={i}
                            className="grid grid-cols-4 gap-x-4"
                        >
                            {
                                letter.map(l => <div
                                    onClick={() => play(l.audio)}
                                    className="p-4 flex flex-col justify-center items-center space-y-3 bg-white rounded-2xl border cursor-pointer"
                                >
                                    <p
                                        className="text-4xl md:text-8xl text-center font-extrabold"
                                    >
                                        {l.letter}
                                    </p>
                                </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ArabicAlphabet;