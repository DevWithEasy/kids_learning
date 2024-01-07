import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import apiurl from '../utils/apiurl';
import { getData } from '../utils/api_crud';
import Loading from '../components/Loading';


const Color = () => {
    const [loading, setLoading] = useState(false)
    const [colors, setColors] = useState([])

    const play = (path) => {
        const audio = new Audio(`${apiurl+path}`)
        audio.play()
    }

    useEffect(() => {
        getData({
            path: 'admin/find/colors',
            setData: setColors,
            setLoading
        })
    }, [])
    console.log(colors)
    return (
        <div
            className='h-screen bg-gray-100 space-y-3 font-kalpurush overflow-y-auto'
        >
            <h1
                className='px-4 py-3 bg-white text-4xl font-semibold border-b-2'
            >
                রং পরিচিতি
            </h1>
            <div
                className='mx-2 p-4 space-y-4 bg-white rounded-md'
            >
                <table
                    className='w-full'
                >
                    <thead>
                        <tr
                            className='border bg-gray-100 font-semibold'
                        >
                            <td
                                className='px-4 py-2 text-center'
                            >
                                রং
                            </td>
                            <td
                                className='px-4 py-2 text-center'
                            >
                                বাংলা নাম
                            </td>
                            <td
                                className='px-4 py-2 text-center'
                            >
                                ইংরেজি নাম
                            </td>
                            <td
                                className='px-4 py-2 text-center'
                            >
                                উদাহরন
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {colors &&
                            colors.map((color, i) =>
                                <motion.tr
                                    key={i}
                                    onClick={()=>play(color?.audio)}
                                    initial={{
                                        y: 50,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i === 0 ? 0 : 0.2 + (i / 10)
                                    }}
                                    className='relative border group cursor-pointer'
                                >
                                    <td
                                        className='px-4 py-2 text-center'
                                    >
                                        <p style={{ background: color?.code }} className={`${color?.code === '#FFFFFF' ? 'border ' : ''} w-6 h-6 rounded-full`}></p>
                                    </td>
                                    <td
                                        className='px-4 py-2 text-center'
                                    >
                                        {color?.bn_name}
                                    </td>
                                    <td
                                        className='px-4 py-2 text-center'
                                    >
                                        {color?.en_name}
                                    </td>
                                    <td
                                        className='px-4 py-2 text-center'
                                    >
                                        <img
                                            src={`${apiurl+color?.image}`}
                                            className='w-6 mx-auto'
                                        />
                                        <div
                                            className='absolute -top-10 p-2 hidden bg-white group-hover:block'
                                        >
                                            <img
                                                src={`${apiurl+color?.image}`}
                                                className='w-20 mx-auto'
                                            />
                                        </div>

                                    </td>
                                </motion.tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {loading &&
                <Loading />
            }
        </div>
    );
};

export default Color;