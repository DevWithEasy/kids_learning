import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import correct from '../../../assets/correct0.png'
import wrong from '../../../assets/wrong0.png'
import correctAudio from '../../../assets/correct.mp3'
import wrongAudio from '../../../assets/wrong.mp3'

const AnsAlert = ({ type, ansView, setAnsView }) => {
    const viewVarirnts={
        hidden: {
            scale: 0,
            opacity: 0,
            y: 500
        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition:{
                duration: 0.5
            }
        }
    }

    useEffect(() => {
        const audio = new Audio(type === 'yes' ? correctAudio : wrongAudio)
        audio.play()
    })

    const handleView = () => {
        setAnsView(!ansView)
    }

    return (
        <motion.div
            variants={viewVarirnts}
            initial='hidden'
            animate='visible'
            className={`fixed bottom-0 left-0 w-full flex ${type === 'yes' ? 'bg-[#b4ff7b]' : 'bg-red-200'} z-50`}
        >
            <div
                className={`w-11/12 mx-auto h-[200px] flex p-4 ${type === 'yes' ? 'bg-[#b4ff7b]' : 'bg-red-200'}`}
            >
                <motion.img
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    animate={{
                        scale: 3,
                        opacity: 1,
                        y: -100,
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    src={type === 'yes' ? correct : wrong}
                    className="h-[100px]"
                >

                </motion.img>
                <div
                    className="w-full flex justify-center"
                >
                    <div
                        className="space-y-3"
                    >
                        <p
                            className={`text-3xl ${type === 'yes' ? 'text-[#61E002]' : 'text-red-500'}`}
                        >
                            {type === 'yes' ? 'সঠিক হয়েছে ✔' : 'ভুল হয়েছে ✖'}
                        </p>
                        <button
                            onClick={handleView}
                            className={`px-6 py-2 rounded-lg shadow-md  text-white ${type === 'yes' ? 'bg-[#61E002]' : 'bg-red-500'}`}
                        >
                            {type === 'yes' ? 'চালিয়ে যাও' : 'পুনরায় চেষ্টা কর'}
                        </button>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default AnsAlert;