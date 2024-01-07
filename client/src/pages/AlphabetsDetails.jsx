import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { getData } from '../utils/api_crud';
import getPath from '../utils/pathGenerate';
import apiurl from '../utils/apiurl';
import getTitle from '../utils/titleHeadGenerate';
import { Loading, SlideHandler } from '../components/Index';
import getLetter from '../utils/letterGenerate';

const AlphabetsDetails = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [letters, setLetters] = useState([])
    const [path, setPath] = useState('')
    const [id, setId] = useState(0)
    const [letter, setLetter] = useState({})

    const play = () => {
        const audio = new Audio(`${apiurl}${letter?.audio}`)
        audio.play()
    }

    const title = getTitle({ lan, searchParams })

    const handleChange = (id) => {
        setId(id)
        setLetter(letters[id])
    }

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
    useEffect(() => {
        play()
    }, [id])

    useEffect(() => {
        letters && setLetter(letters[0])
    }, [letters])

    return (
        <div
            className='h-screen space-y-3 bg-gray-100 font-kalpurush overflow-y-auto'
        >
            <h2
                className='px-4 py-3 bg-white text-2xl font-semibold border-b-2'
            >
                {title}
            </h2>
            <div
                className='p-2 space-y-3'
            >
                <div
                    className="bg-white p-4 rounded-md"
                >
                    <p
                        className="text-9xl text-center text-pink-500 font-extrabold"
                    >
                        {lan === 'en' ?
                            <>
                                <span>{letter?.capital}</span>
                                <span
                                    className='text-blue-500'
                                >
                                    {letter?.small}
                                </span>
                            </>
                            :
                            <span>{letter?.letter}</span>
                        }
                    </p>
                    <p
                        className="py-2 text-4xl text-sky-500 font-bold"
                    >
                        {letter?.word}
                    </p>
                    <p
                        className="py-2 text-2xl"
                    >
                        {letter?.sentence}
                    </p>
                    <p
                        className="py-2 text-2xl"
                    >
                        {letter?.punctuation}
                    </p>
                </div>
                <div
                    id='slider'
                    className='pb-2 flex justify-between space-x-2 overflow-y-auto'
                >
                    {letters &&
                        letters.map((l, i) =>
                            <button
                                key={i}
                                onClick={() => handleChange(i)}
                                className={`${getLetter({ lan, searchParams, letter }) === getLetter({ lan, searchParams, letter: l }) ? 'bg-red-500 text-white' : 'bg-white'} px-4 text-center text-xl border-2 rounded`}
                            >
                                {getLetter({ lan, searchParams, letter: l })}
                            </button>
                        )
                    }
                </div>
                {/* <SlideHandler {...{
                    letters,
                    id,
                    setId,
                    setLetter
                }} /> */}
                {loading &&
                    <Loading />
                }
            </div>
        </div>

    );
};

export default AlphabetsDetails;