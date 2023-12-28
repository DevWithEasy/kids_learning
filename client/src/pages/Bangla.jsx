import { motion } from 'framer-motion';
import { useState } from "react";
import banglaOkkor from "../assets/banglaOkkor";
import BanglaWordDetails from "../components/details/BanglaWordDetails";

const Bangla = () => {
    const [view,setView] = useState(false)
    const [selectedId,setSelectedId] = useState(false)
    const [letter,setLetter] = useState({})
    const [data,setData] = useState([...banglaOkkor.bangla])
    return (
        <div
            className={`font-kalpurush bg-gradient-to-r from-pink-500 to-pink-300 p-4 grid grid-cols-4 md:grid-cols-5 gap-4 }`}
        >
            {
                data.map((letter,i)=>
                    <motion.div
                        key={i}
                        layoutId={i}
                        onClick={()=>{
                            setView(!view)
                            setSelectedId(i)
                            setLetter(letter)
                        }}
                        className="p-4 flex justify-center items-center bg-white rounded-2xl shadow-md cursor-pointer"
                    >
                        <p
                            className="text-4xl md:text-8xl text-center font-extrabold"
                        >
                            {letter.letter}
                        </p>
                    </motion.div>
                )
            }
            {view &&
                <BanglaWordDetails {...{id: selectedId,data,letter,view,setView}}/>
            }
        </div>
    );
};

export default Bangla;