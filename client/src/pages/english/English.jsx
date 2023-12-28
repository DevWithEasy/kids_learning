import { useState } from "react";
import banglaOkkor from "../../assets/banglaOkkor";
import {motion} from 'framer-motion'
import EnglishWordDetails from "../components/EnglishWordDetails";

const English = () => {
    const [view,setView] = useState(false)
    const [selectedId,setSelectedId] = useState(false)
    const [letter,setLetter] = useState({})
    const [data,setData] = useState([...banglaOkkor.englishborno])
    return (
        <div
            className={`bg-gradient-to-r from-pink-500 to-pink-300 p-4 grid grid-cols-5 gap-4 }`}
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
                        className="p-4 space-y-3 bg-white rounded-2xl shadow-md cursor-pointer"
                    >
                        <p
                            className="font-uthemi text-8xl text-center font-extrabold"
                        >
                            {letter.capital}
                        </p>
                        {/* <p
                            className="font-kalpurush py-2 text-3xl"
                        >
                            {letter.banglaPunctuation}
                        </p> */}
                        
                    </motion.div>
                )
            }
            {view &&
                <EnglishWordDetails {...{id: selectedId,data,letter,view,setView}}/>
            }
        </div>
    );
};

export default English;