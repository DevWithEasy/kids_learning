import { motion } from 'framer-motion';
import { useState } from "react";
import { Link } from 'react-router-dom'

const Bangla = () => {
    const lists = [
        {
            path: '/alphabets/bn?q=vowel',
            abr: 'অ',
            title: 'স্বরবর্ণ'
        },
        {
            path: '/alphabets/bn?q=non_vowel',
            abr: 'ক',
            title: 'ব্যঞ্জনবর্ণ'
        },
        {
            path: '/alphabets/bangla_kar',
            abr: 'া',
            title: 'বাংলা কার'
        },
        {
            path: '/alphabets/bangla_fola',
            abr: 'য',
            title: 'বাংলা ফলা'
        },
        {
            path: '/alphabets/punctuation_mark',
            abr: '।',
            title: 'যতিচ্ছেদ চিহ্ন'
        }
    ]
    const practices = [
        {
            path: '/practice/bn?q=vowel',
            abr: 'অ',
            title: 'স্বরবর্ণ'
        },
        {
            path: '/practice/bn?q=non_vowel',
            abr: 'ক',
            title: 'ব্যঞ্জনবর্ণ'
        },
        {
            path: '/practice/bangla_kar',
            abr: 'া',
            title: 'বাংলা কার'
        },
        {
            path: '/practice/bangla_fola',
            abr: 'য',
            title: 'বাংলা ফলা'
        },
        {
            path: '/practice/punctuation_mark',
            abr: '।',
            title: 'যতিচ্ছেদ চিহ্ন'
        }
    ]
    const games = [
        {
            path: '/game/bn?q=vowel',
            abr: 'অ',
            title: 'স্বরবর্ণ'
        },
        {
            path: '/game/bn?q=non_vowel',
            abr: 'ক',
            title: 'ব্যঞ্জনবর্ণ'
        },
        {
            path: '/game/bangla_kar',
            abr: 'া',
            title: 'বাংলা কার'
        },
        {
            path: '/game/bangla_fola',
            abr: 'য',
            title: 'বাংলা ফলা'
        },
        {
            path: '/game/punctuation_mark',
            abr: '।',
            title: 'যতিচ্ছেদ চিহ্ন'
        }
    ]
    return (
        <div
            className='space-y-3 font-kalpurush'
        >
            <h1
                className='px-4 py-3 text-4xl font-semibold border-b-2'
            >
                বাংলা স্বরবর্ণ
            </h1>
            <div
                className='p-2 grid md:grid-cols-3 gap-x-4 space-y-2 md:space-y-0'
            >
                <div
                    className=''
                >
                    <h2
                        className='pb-2 text-xl'
                    >
                        পরিচিতি
                    </h2>
                    <div
                        className='space-y-2'
                    >
                        {
                            lists.map((list, i) =>
                                <Link
                                    key={i}
                                    to={list.path}
                                    className='p-2 flex items-center space-x-3 text-xl border rounded-md'
                                >
                                    <div
                                        className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                                    >
                                        <span>
                                            {list.abr}
                                        </span>
                                    </div>
                                    <span>
                                        {list.title}
                                    </span>
                                </Link>
                            )
                        }

                    </div>
                </div>
                <div
                    className=''
                >
                    <h2
                        className='pb-2 text-xl'
                    >
                        প্র্যাকটিস
                    </h2>
                    <div
                        className='space-y-2'
                    >
                        {
                            practices.map((practice, i) =>
                                <Link
                                    key={i}
                                    to={practice.path}
                                    className='p-2 flex items-center space-x-3 text-xl border rounded-md'
                                >
                                    <div
                                        className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                                    >
                                        <span>
                                            {practice.abr}
                                        </span>
                                    </div>
                                    <span>
                                        {practice.title}
                                    </span>
                                </Link>
                            )
                        }

                    </div>
                </div>
                <div
                    className=''
                >
                    <h2
                        className='pb-2 text-xl'
                    >
                        চ্যালেঞ্জ
                    </h2>
                    <div
                        className='space-y-2'
                    >
                        {
                            games.map((game, i) =>
                                <Link
                                    key={i}
                                    to={game.path}
                                    className='p-2 flex items-center space-x-3 text-xl border rounded-md'
                                >
                                    <div
                                        className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                                    >
                                        <span>
                                            {game.abr}
                                        </span>
                                    </div>
                                    <span>
                                        {game.title}
                                    </span>
                                </Link>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bangla;