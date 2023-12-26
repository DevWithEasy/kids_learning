import { motion, AnimatePresence } from "framer-motion"

const ArabicWordDetails = ({ id, letter, view, setView }) => {
    return (
        <div
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-gradient-to-r from-pink-500/95 to-pink-500 p-4"
        >
            <AnimatePresence>
                <motion.div
                    layoutId={id}
                    className="relative w-4/12 p-4 bg-white rounded-3xl shadow-md"
                >
                    <div
                        onClick={()=>setView(!view)}
                        className="absolute right-3 top-3 h-8 w-8 flex justify-center items-center bg-pink-100 text-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer rounded-full"
                    >
                        <span>X</span>
                    </div>
                    <p
                        className="font-uthemi text-9xl text-center font-extrabold"
                    >
                        {letter.letter}
                    </p>
                    <p
                        className="font-kalpurush py-2 text-4xl"
                    >
                        {letter.banglaPunctuation}
                    </p>
                    <table
                        className="w-full"
                    >
                        <tbody>
                            <tr
                                className="text-center font-kalpurush bg-teal-50"
                            >
                                <td
                                    className='p-2 border'
                                >
                                    শেষে
                                </td>
                                <td
                                    className='p-2 border'
                                >
                                    মাঝে
                                </td>
                                <td
                                    className='p-2 border'
                                >
                                    শুরুতে
                                </td>
                            </tr>
                            <tr
                                className="text-center text-4xl font-uthemi"
                            >
                                <td
                                    className='p-2 border'
                                >
                                    {letter.position.end}
                                </td>
                                <td
                                    className='p-2 border'
                                >
                                    {letter.position.center}
                                </td>
                                <td
                                    className='p-2 border'
                                >
                                    {letter.position.start}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ArabicWordDetails;