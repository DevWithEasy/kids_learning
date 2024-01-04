import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import useAlphabetStore from '../store/alphabateStore';
import { getData } from '../utils/api_crud';
import getPath from '../utils/pathGenerate';
import apiurl from '../utils/apiurl';
import getTitle from '../utils/titleHeadGenerate';
import { SlideHandler } from '../components/Index';
import Draw from '../components/Draw';

const WritingBoard = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const { addLetters, letters } = useAlphabetStore()
    const [path, setPath] = useState('')
    const [id, setId] = useState(0)
    const [letter, setLetter] = useState(letters[0])

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
            setData: addLetters
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
                className='p-2 space-y-3'
            >
                <div
                    className=""
                >
                    <Draw {...{letter}}/>
                </div>
                <div
                    id = 'slider'
                    className='pb-2 flex justify-between space-x-2 overflow-y-auto'
                >
                    {letters &&
                        letters.map((letter, i) =>
                            <button
                                onClick={() => handleChange(i)}
                                className='px-4 text-center text-xl border-2 rounded '
                            >
                                {letter?.letter}
                            </button>
                        )
                    }
                </div>
                <SlideHandler {...{
                    letters,
                    id,
                    setId,
                    setLetter
                }} />
            </div>
        </div>

    );
};

export default WritingBoard;