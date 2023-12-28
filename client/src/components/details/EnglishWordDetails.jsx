import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { next, previous } from "../../utils/slideHandler";
import SlideHandler from "../SlideHandler";

const EnglishWordDetails = ({ id, data, letter, view, setView }) => {
    const [targetLetter, setTargetLetter] = useState(letter)
    const [targetId,setTargetId] = useState(id)

    return (
        <div
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-gradient-to-r from-pink-500/95 to-pink-500 p-4"
        >
            <AnimatePresence>
                <motion.div
                    layoutId={id}
                    className="relative w-4/12 p-4 bg-white rounded-3xl shadow-md"
                >
                    <button
                        onClick={() => setView(!view)}
                        className="absolute right-3 top-3 h-8 w-8 flex justify-center items-center bg-pink-100 text-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer rounded-full"
                    >
                        <span>X</span>
                    </button>
                    <p
                        className="font-uthemi text-9xl text-center font-extrabold"
                    >
                        {targetLetter.capital}
                    </p>
                    <p
                        className="font-kalpurush py-2 text-4xl"
                    >
                        {targetLetter.word}
                    </p>
                    <SlideHandler {...{
                        data,
                        targetId,
                        setTargetId,
                        setTargetLetter
                    }}/>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default EnglishWordDetails;