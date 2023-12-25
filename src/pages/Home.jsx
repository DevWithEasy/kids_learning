import { Link } from "react-router-dom";
import Header from "../components/Header";
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            initial = {{
                opacity : 0
            }}
            animate ={{
                opacity : 1
            }}
            transition={{
                duration : 1
            }}
            className="h-screen flex justify-center items-center"
        >
            <Header />
            <div
                className="flex flex-col items-center space-y-2"
            >
                <h2
                    className="text-6xl font-bold text-teal-500"
                >
                    ShopX online shop
                </h2>
                <p
                    className="text-gray-500"
                >
                    Buy al thing from here
                </p>
                <motion.buttton
                    whileHover ={{
                        scale : 1.1
                    }}
                    transition = {{
                        duration : 0.2,
                        boxShadow : '5px 5px red'
                    }}
                    className="p-4 py-2 bg-teal-500 text-white rounded-md"
                >
                    Continue
                </motion.buttton>
            </div>
        </motion.div>
    );
};

export default Home;