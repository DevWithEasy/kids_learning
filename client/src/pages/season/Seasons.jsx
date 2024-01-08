import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { getData } from '../../utils/api_crud';
import getPath from '../../utils/pathGenerate';
import { motion } from 'framer-motion'
import apiurl from '../../utils/apiurl';
import getTitle from '../../utils/titleHeadGenerate';
import Loading from '../../components/Loading';

const Seasons = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [Seasons, setSeasons] = useState([])
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
            setData: setSeasons,
            setLoading
        })
    }, [path])

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
                className={`p-2 pb-5 grid grid-cols-3 md:grid-cols-4 gap-4`}
            >
                {Seasons &&
                    Seasons.map((season, i) =>
                        <motion.div
                            key={i}
                            onClick={() => play(season.audio)}
                            className="p-4 flex flex-col justify-center items-center space-y-5 bg-white rounded-2xl border cursor-pointer"
                        >
                            <img
                                src={`${apiurl+season?.image}`}
                                className='w-24'
                            />
                            <p
                                className='font-semibold text-xl'
                            >
                                {season?.name}
                            </p>
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

export default Seasons;