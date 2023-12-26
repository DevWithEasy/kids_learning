import { useState } from "react";
import banglaOkkor from "../assets/banglaOkkor";
import {motion} from 'framer-motion'
import WordDetails from "../components/WordDetails";

const Home = () => {
    const [view,setView] = useState(false)
    const [selectedId,setSelectedId] = useState(false)
    const [letter,setLetter] = useState({})
    return (
        <div
            className={`bg-teal-100 p-4 grid grid-cols-5 gap-4 }`}
        >
            {
                banglaOkkor.arabicborno.reverse().map((letter,i)=>
                    <motion.div
                        key={i}
                        layoutId={i}
                        onClick={()=>{
                            setView(!view)
                            setSelectedId(i)
                            setLetter(letter)
                        }}
                        className="p-4 space-y-3 bg-white rounded-2xl shadow-md cursor-pointer"
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
                        
                    </motion.div>
                )
            }
            {view &&
                <WordDetails {...{id: selectedId,letter,view,setView}}/>
            }
        </div>
    );
};

export default Home;