import { useEffect } from "react";
import {motion} from 'framer-motion'
import correct from '../../assets/correct.png'
import wrong from '../../assets/wrong.png'
import correctAudio from '../../assets/correct.mp3'
import wrongAudio from '../../assets/wrong.mp3'

const AnsAlert = ({type,ansView,setAnsView}) => {
    useEffect(()=>{
        const audio = new Audio(type === 'yes' ? correctAudio : wrongAudio)
        audio.play()
        setTimeout(()=>{
            setAnsView(!ansView)
        },3000)
    })
    return (
        <motion.div
            initial = {{
                scale : 0,
                opacity : 0
            }}
            animate = {{
                scale : 1,
                opacity : 1
            }}
            transition={{
                duration : 0.1
            }}
            className={`fixed top-0 left-0 h-screen w-full flex justify-center items-center ${type === 'yes' ? 'bg-blue-500/50' : 'bg-red-500/50'}`}
        >
            <div
                className="bg-white p-4 rounded-md shadow-md"
            >
                <img
                    src={type === 'yes' ? correct : wrong}
                    className="h-[200px]"
                />
                
            </div>
        </motion.div>
    );
};

export default AnsAlert;