import { useState } from "react";
import banglaOkkor from "../assets/banglaOkkor";
import { motion } from 'framer-motion'
import MathWordDetails from "../components/MathWordDetails";

const Math = () => {
    const [view, setView] = useState(false)
    const [selectedId, setSelectedId] = useState(false)
    const [letter, setLetter] = useState({})
    const [query,setQuery] = useState('BN')

    return (
        <div
            className="font-kalpurush p-4 space-y-2 bg-gradient-to-r from-pink-500 to-pink-300"
        >
            <div
                className="p-2 bg-white text-white space-x-2 rounded-xl"
            >
                <button
                    onClick={()=>setQuery('BN')}
                    className="px-4 py-2 bg-blue-500 rounded-md"
                >
                    বাংলা
                </button>
                <button
                    onClick={()=>setQuery('EN')}
                    className="px-4 py-2 bg-green-500 rounded-md"
                >
                    ইংরেজি
                </button>
                <button
                    onClick={()=>setQuery('AR')}
                    className="px-4 py-2 bg-sky-500 rounded-md"
                >
                    আরবি
                </button>
            </div>
            <div
                className={`grid grid-cols-5 gap-4 }`}
            >

                {
                    banglaOkkor.songkha.filter(letter=>letter.lang === query).map((letter, i) =>
                        <motion.div
                            key={i}
                            layoutId={i}
                            onClick={() => {
                                setView(!view)
                                setSelectedId(i)
                                setLetter(letter)
                            }}
                            className="p-4 space-y-3 font-kalpurush bg-white rounded-2xl shadow-md cursor-pointer"
                        >
                            <p
                                className="text-8xl text-center font-extrabold"
                            >
                                {letter.letter}
                            </p>
                            <p
                                className="py-2 text-3xl"
                            >
                                {letter.punctuation}
                            </p>
                        </motion.div>
                    )
                }
                {view &&
                    <MathWordDetails {...{ id: selectedId, letter, view, setView }} />
                }
            </div>
        </div>

    );
};

export default Math;