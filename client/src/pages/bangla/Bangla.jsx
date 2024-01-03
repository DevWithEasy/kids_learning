import { motion } from 'framer-motion';
import { useState } from "react";
import {Link} from 'react-router-dom'

const Bangla = () => {
    
    return (
        <div
            className='space-y-3 font-kalpurush'
        >
            <h2
                className='px-4 py-3 text-4xl font-semibold border-b-2'
            >
                বাংলা স্বরবর্ণ
            </h2>
            <div
                className='p-2 space-y-2'
            >
                <Link
                    to='/alphabets/bn?q=vowel'
                    className='p-2 flex items-center space-x-3 text-xl border rounded-md'
                >
                    <div
                        className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                    >
                        <span>
                            অ
                        </span>
                    </div>
                    <span>
                        স্বরবর্ণ পরিচিতি
                    </span>
                </Link>
                <Link
                    to='/alphabets/bn?q=non_vowel'
                    className='p-2 flex items-center space-x-3 text-xl border rounded-md'
                >
                    <div
                        className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                    >
                        <span>
                            ক
                        </span>
                    </div>
                    <span>
                        ব্যঞ্জনবর্ণ পরিচিতি
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Bangla;