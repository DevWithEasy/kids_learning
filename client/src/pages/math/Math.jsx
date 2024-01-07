import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Math = () => {
    const lists = [
        {
            path: '/alphabets/math',
            abr: '১',
            title: 'সংখ্যা (১-১০০)'
        },
        {
            path: '/alphabets/write/math',
            abr: '২',
            title: 'সংখ্যা লিখি ও শিখি'
        },
        {
            path: '/alphabets/details/math',
            abr: '৩',
            title: 'সংখ্যা দেখি ও পড়ি'
        },
        {
            path: '/math/tables',
            abr: '৪',
            title: 'নামতা পড়ুন ও শিখুন'
        },
    ]

    return (
        <div
            className='h-screen bg-gray-100 space-y-3 font-kalpurush overflow-y-auto'
        >
            <h1
                className='px-4 py-3 bg-white text-4xl font-semibold border-b-2'
            >
                অংক
            </h1>
            <div
                className='p-2 pb-10 space-y-2'
            >
                {
                    lists.map((list, i) =>
                        <motion.div
                            key={i}
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

export default Math;