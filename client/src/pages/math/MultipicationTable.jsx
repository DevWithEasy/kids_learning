import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { toBengaliNumber } from 'bengali-number'

const MultipicationTable = () => {
    const { id } = useParams()
    const numbers = new Array(10).fill(0).map((_, index) => index + 1)

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
                className='mx-2 p-4 space-y-4 bg-white rounded-md'
            >
                <h2
                    className='bg-white text-2xl font-semibold border-b-2'
                >
                    {toBengaliNumber(id)} এর নামতা
                </h2>
                {
                    numbers.map((_, i) =>
                        <motion.p
                            key={i}
                            initial={{
                                y: 50,
                                opacity : 0
                            }}
                            animate={{
                                y: 0,
                                opacity : 1
                            }}
                            transition={{
                                duration: 0.5,
                                delay : i=== 0 ? 0 : 0.2 + (i/10)
                            }}
                            className='text-xl'
                        >
                            {toBengaliNumber(id)} X {toBengaliNumber(i+1)} = {toBengaliNumber(Number(id) * (i+1))}
                        </motion.p>
                    )
                }

            </div>

        </div>
    );
};

export default MultipicationTable;