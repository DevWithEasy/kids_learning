import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { getData } from '../../utils/api_crud';
import getPath from '../../utils/pathGenerate';
import { motion } from 'framer-motion'
import apiurl from '../../utils/apiurl';
import getTitle from '../../utils/titleHeadGenerate';
import Loading from '../../components/Loading';

const Months = () => {
    const { lan } = useParams()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [months, setMonths] = useState([])
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
            setData: setMonths,
            setLoading
        })
    }, [path])
    console.log(months)
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
                {months &&
                    months.map((month, i) =>
                        <motion.div
                            key={i}
                            onClick={() => play(month.audio)}
                            className="p-4 flex flex-col justify-center items-center space-y-5 bg-white rounded-2xl border cursor-pointer"
                        >
                            <img
                                src={`${apiurl+month?.image}`}
                                className='w-24'
                            />
                            <p
                                className='font-semibold text-xl'
                            >
                                {month?.name}
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

export default Months;