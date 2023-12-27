import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { next, previous } from "../utils/slideHandler";

const MathWordDetails = ({ id, data, letter, view, setView }) => {
    const [targetLetter, setTargetLetter] = useState(letter)
    const [targetId,setTargetId] = useState(id)
    return (
        <div
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-gradient-to-r from-pink-500/95 to-pink-500 p-4"
        >
            <AnimatePresence>
                <motion.div
                    layoutId={id}
                    className="relative w-4/12 p-4 font-kalpurush bg-white rounded-3xl shadow-md"
                >
                    <div
                        onClick={()=>setView(!view)}
                        className="absolute right-3 top-3 h-8 w-8 flex justify-center items-center bg-pink-100 text-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer rounded-full"
                    >
                        <span>X</span>
                    </div>
                    <p
                        className="text-9xl text-center font-extrabold"
                    >
                        {targetLetter.letter}
                    </p>
                    <p
                        className="py-2 text-4xl"
                    >
                        {targetLetter.punctuation}
                    </p>
                    <div
                        className="flex justify-between"
                    >
                        <button
                            onClick={() => previous({
                                data,
                                targetId,
                                setTargetId,
                                setTargetLetter
                            })}
                            className="w-9 h-9 flex justify-center items-center bg-pink-100 text-pink-600 rounded-full cursor-pointer"
                        >
                            <span>⏪</span>
                        </button>
                        <button
                            onClick={() => next({
                                data,
                                targetId,
                                setTargetId,
                                setTargetLetter
                            })}
                            className="w-9 h-9 flex justify-center items-center bg-pink-100 text-pink-600 rounded-full cursor-pointer"
                        >
                            ⏩
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MathWordDetails;