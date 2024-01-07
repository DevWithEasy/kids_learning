import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {toBengaliNumber} from 'bengali-number'

const MultipicationTables = () => {
    const numbers = new Array(20).fill(0).map((_, index) => index + 1)
    
    return (
        <div
            className='h-screen bg-gray-100 space-y-3 font-kalpurush overflow-y-auto'
        >
            <h1
                className='px-4 py-3 bg-white text-4xl font-semibold border-b-2'
            >
                নামতা
            </h1>
            <div
                className='p-2 pb-10 space-y-2'
            >
                
                {
                    numbers.map((number, i) =>
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
                                to={`/math/tables/${number}`}
                                className='p-2 flex items-center space-x-3 bg-white text-xl border rounded-md'
                            >
                                <div
                                    className='w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full'
                                >
                                    <span>
                                        {toBengaliNumber(number)}
                                    </span>
                                </div>
                                <span>
                                    {toBengaliNumber(number)} এর নামতা
                                </span>
                            </Link>
                        </motion.div>
                    )
                }

            </div>
            
        </div>
    );
};

export default MultipicationTables;