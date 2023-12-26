import { motion, AnimatePresence } from "framer-motion"

const MathWordDetails = ({ id, letter, view, setView }) => {
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
                        {letter.letter}
                    </p>
                    <p
                        className="py-2 text-4xl"
                    >
                        {letter.punctuation}
                    </p>
                    
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MathWordDetails;