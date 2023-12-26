import { motion, AnimatePresence } from "framer-motion"

const WordDetails = ({ id, letter, view, setView }) => {
    return (
        <div
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-teal-500/90"
        >
            <AnimatePresence>
                <motion.div
                    layoutId={id}
                    className="w-4/12 p-4 bg-white rounded-xl shadow-md"
                >
                    <p
                        className="font-uthemi text-8xl text-center font-extrabold"
                    >
                        {letter.letter}
                    </p>
                    <p
                        className="font-kalpurush py-2 text-3xl"
                    >
                        {letter.banglaPunctuation}
                    </p>
                    <table
                        className="w-full"
                    >
                        <tbody>
                            <tr
                                className="text-center"
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
                                className="text-center"
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
                    <button
                        onClick={()=>setView(!view)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                        Close
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default WordDetails;