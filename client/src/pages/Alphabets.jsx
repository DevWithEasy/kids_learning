import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import useAlphabetStore from '../store/alphabateStore';
import { getData } from '../utils/api_crud';
import getPath from '../utils/pathGenerate';
import { motion } from 'framer-motion'
import apiurl from '../utils/apiurl';

const Alphabets = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const { addLetters, letters } = useAlphabetStore()
    const [path,setPath] = useState('')

    const play=(path)=>{
        const audio = new Audio(`${apiurl}${path}`)
        audio.play()
    }

    useEffect(() => {
        setPath(getPath({ lan, searchParams }))
    }, [path])

    useEffect(() => {
        path && getData({
            path: path,
            setData: addLetters
        })
    }, [path])

    console.log(path)

    return (
        <div
            className='h-screen space-y-3 font-kalpurush bg-gradient-to-r from-pink-500 to-pink-300 overflow-y-auto'
        >
            <h2
                className='px-4 py-3 text-4xl text-white font-semibold border-b-2'
            >
                বাংলা স্বরবর্ণ
            </h2>
            <div
                className={`p-2 grid grid-cols-4 md:grid-cols-5 gap-4`}
            >
                {letters &&
                    letters.map((letter, i) =>
                        <motion.div
                            key={i}
                            onClick={() => play(letter.audio)}
                            className="p-4 flex justify-center items-center bg-white rounded-2xl shadow-md cursor-pointer"
                        >
                            <p
                                className="text-4xl md:text-8xl text-center font-extrabold"
                            >
                                {letter.letter}
                            </p>
                        </motion.div>
                    )
                }
            </div>
        </div>

    );
};

export default Alphabets;