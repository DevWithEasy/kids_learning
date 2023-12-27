import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { next, previous } from "../../utils/slideHandler";
import SlideHandler from "../SlideHandler";

const BanglaWordDetails = ({ id, data, letter, view, setView }) => {
    const [targetLetter, setTargetLetter] = useState(letter)
    const [targetId, setTargetId] = useState(id)
    return (
        <div
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-gradient-to-r from-pink-500/95 to-pink-500 p-4"
        >
            <AnimatePresence>
                <motion.div
                    layoutId={id}
                    className="relative w-full md:w-4/12 pt-5 font-kalpurush bg-white rounded-3xl shadow-md"
                >
                    <div
                        onClick={() => setView(!view)}
                        className="absolute right-3 top-3 h-8 w-8 flex justify-center items-center bg-pink-100 text-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer rounded-full"
                    >
                        <span>X</span>
                    </div>
                    <div
                        className="p-4"
                    >
                        <p
                            className="text-9xl text-center text-pink-500 font-extrabold"
                        >
                            {targetLetter.letter}
                        </p>
                        <p
                            className="py-2 text-4xl"
                        >
                            {targetLetter.word}
                        </p>
                        <p
                            className="py-2 text-4xl"
                        >
                            {targetLetter.sentence}
                        </p>
                    </div>
                    <SlideHandler {...{
                        data,
                        targetId,
                        setTargetId,
                        setTargetLetter
                    }} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default BanglaWordDetails;