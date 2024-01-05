import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { getData } from '../utils/api_crud';
import getPath from '../utils/pathGenerate';
import { motion } from 'framer-motion'
import apiurl from '../utils/apiurl';
import getTitle from '../utils/titleHeadGenerate';
import Loading from '../components/Loading';

const Alphabets = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [letters, setLetters] = useState([])
    const [path, setPath] = useState('')

    const play = (path) => {
        const audio = new Audio(`${apiurl}${path}`)
        audio.play()
    }

    const title = getTitle({ lan, searchParams })

    useEffect(() => {
        setPath(getPath({ lan, searchParams }))
    }, [path])

    useEffect(() => {
        path && getData({
            path: path,
            setData: setLetters,
            setLoading
        })
    }, [path])

    return (
        <div
            className='h-screen space-y-3 font-kalpurush overflow-y-auto'
        >
            <h2
                className='px-4 py-3 text-4xl font-semibold border-b-2'
            >
                {title}
            </h2>
            <div
                className={`p-2 grid ${lan === 'bangla_kar' || lan === 'bangla_fola' ? 'grid-cols-2' : 'grid-cols-4'} md:grid-cols-5 gap-4`}
            >
                {letters &&
                    letters.map((letter, i) =>
                        <motion.div
                            key={i}
                            onClick={() => play(letter.audio)}
                            className="p-4 flex flex-col justify-center items-center space-y-3 rounded-2xl border cursor-pointer"
                        >
                            <p
                                className="text-4xl md:text-8xl text-center font-extrabold"
                            >
                                {lan === 'bangla_kar' ?
                                    letter.kar
                                    :
                                    letter.letter
                                }
                            </p>
                            {lan === 'bangla_kar' &&
                                <p
                                    className='text-xl'
                                >
                                    {letter.letter} তে {letter.kar} কার
                                </p>
                            }
                            {lan === 'bangla_fola' &&
                                <p
                                    className='text-xl'
                                >
                                    {letter.name}
                                </p>
                            }
                            {
                                lan === 'bangla_fola' &&
                                <div
                                    className='text-xl'
                                >
                                    {
                                        letter?.examples?.map((f, i) =>
                                            <span
                                                key={i}
                                                className='m-1 px-2 py-0.5 border rounded'
                                            >
                                                {f}
                                            </span>
                                        )
                                    }
                                </div>
                            }
                        </motion.div>
                    )
                }
            </div>
            {loading &&
                <Loading />
            }
        </div>

    );
};

export default Alphabets;