import React from 'react';
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const Menu = ({ view, setView }) => {
    const navigate = useNavigate()
    return (
        <div
            className='fixed top-0 left-0 h-screen w-full py-10 flex justify-center bg-gray-500/50 font-kalpurush z-50'
        >
            <div
                className='relative h-full w-full mx-5 bg-white rounded-md shadow-md'
            >
                <button
                    onClick={() => setView(!view)}
                    className='text-red-500 text-2xl cursor-pointer float-right pr-5 pt-2'
                >
                    X
                </button>
                <div
                    className='w-9/12 mx-auto pt-10 text-lg'
                >
                    <motion.button
                        whileHover={{
                            x : 10,
                            color : 'red'
                        }}
                        transition={{
                            duration : 0.2
                        }}
                        onClick={()=>{
                            navigate(-1)
                            setView(!view)
                        }}
                        className='pl-2 pr-6 py-2 text-left flex items-center space-x-3 border-b text-green-500'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>

                        <span>পিছনে যান</span>

                    </motion.button>
                    <motion.button
                        whileHover={{
                            x : 10
                        }}
                        transition={{
                            duration : 0.5
                        }}
                        onClick={()=>{
                            navigate('/')
                            setView(!view)
                        }}
                        className='pl-2 pr-6 py-2 text-left flex items-center space-x-3 border-b text-green-500'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <span>শুরুতে ফিরে যান</span>

                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Menu;