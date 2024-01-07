import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Bangla = () => {
    const lists = [
        {
            path: '/alphabets/bn?q=vowel',
            abr: 'অ',
            title: 'স্বরবর্ণ'
        },
        {
            path: '/alphabets/details/bn?q=vowel',
            abr: 'আ',
            title: 'স্বরবর্ণ দেখি ও পড়ি'
        },
        {
            path: '/alphabets/write/bn?q=vowel',
            abr: 'ই',
            title: 'স্বরবর্ণ লিখি ও শিখি'
        },
        {
            path: '/alphabets/bn?q=non_vowel',
            abr: 'ক',
            title: 'ব্যঞ্জনবর্ণ'
        },
        {
            path: '/alphabets/details/bn?q=non_vowel',
            abr: 'খ',
            title: 'ব্যঞ্জনবর্ণ দেখি ও পড়ি'
        },
        {
            path: '/alphabets/write/bn?q=non_vowel',
            abr: 'গ',
            title: 'ব্যঞ্জনবর্ণ লিখি ও শিখি'
        },
        {
            path: '/alphabets/bangla_kar',
            abr: 'া',
            title: 'বাংলা কার'
        },
        {
            path: '/alphabets/write/bangla_kar',
            abr: 'া',
            title: 'বাংলা কার লিখি ও শিখি'
        },
        {
            path: '/alphabets/bangla_fola',
            abr: 'য',
            title: 'বাংলা ফলা'
        },
        {
            path: '/alphabets/punctuation_mark',
            abr: '।',
            title: 'যতিচ্ছেদ চিহ্ন'
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

export default Bangla;