import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const English = () => {
    const lists = [
        {
            path: '/alphabets/en?q=capital',
            abr: 'A',
            title: 'ইংরেজি বড় হাতের অক্ষর'
        },
        {
            path: '/alphabets/write/en?q=capital',
            abr: 'A',
            title: 'ইংরেজি বড় হাতের লিখি ও শিখি'
        },
        {
            path: '/alphabets/en?q=small',
            abr: 'a',
            title: 'ইংরেজি ছোট হাতের অক্ষর'
        },
        {
            path: '/alphabets/write/en?q=small',
            abr: 'A',
            title: 'ইংরেজি ছোট হাতের লিখি ও শিখি'
        },
        {
            path: '/alphabets/details/en',
            abr: 'Aa',
            title: 'ইংরেজি দেখি ও পড়ি'
        },
        {
            path: '/alphabets/en?q=number',
            abr: '1',
            title: 'ইংরেজি নাম্বার (1-100)'
        }
    ]

    return (
        <div
            className='h-screen bg-gray-100 space-y-3 font-kalpurush overflow-y-auto'
        >
            <h1
                className='px-4 py-3 bg-white text-4xl font-semibold border-b-2'
            >
                বাংলা স্বরবর্ণ
            </h1>
            <div
                className='p-2 pb-10 space-y-2'
            >
                {
                    lists.map((list, i) =>
                        <motion.div
                            key={i}
                            initial={{
                                x : i % 2 === 0 ? -200 : 200
                            }}
                            animate={{
                                x : 0
                            }}
                            transition={{
                                duration : 0.5
                            }}
                        >
                            <Link
                                to={list.path}
                                className='p-2 flex items-center space-x-3 bg-white text-xl border rounded-md'
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
                        </motion.div>
                    )
                }

            </div>
        </div>
    );
};

export default English;