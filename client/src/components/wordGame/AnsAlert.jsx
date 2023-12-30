import { useEffect } from "react";
import {motion} from 'framer-motion'
import correct from '../../assets/correct.png'
import wrong from '../../assets/wrong.png'

const AnsAlert = ({type,ansView,setAnsView}) => {
    useEffect(()=>{
        setTimeout(()=>{
            setAnsView(!ansView)
        },2000)
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
                className="bg-white p-4"
            >
                <img
                    src={type === 'yes' ? correct : wrong}
                    className=""
                />
                
            </div>
        </motion.div>
    );
};

export default AnsAlert;