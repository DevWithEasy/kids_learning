import { motion } from 'framer-motion';
import { useState } from "react";

const Bangla = () => {
    const [view,setView] = useState(false)
    const [selectedId,setSelectedId] = useState(false)
    const [letter,setLetter] = useState({})
    return (
        <div
            className={`font-kalpurush bg-gradient-to-r from-pink-500 to-pink-300 p-4 grid grid-cols-4 md:grid-cols-5 gap-4 }`}
        >
            
        </div>
    );
};

export default Bangla;