import {motion} from 'framer-motion'

const Header = () => {
    return (
        <motion.div
            className="fixed w-full py-4 px-2 top-0 left- shadow"
        >
            <motion.h2
                initial={{x : '-100vw'}}
                animate ={{x : 0}}
                transition={{
                    type : 'tween',
                    duration : .5
                }}
                className="text-2xl"
            >
            ShopX
            </motion.h2>
        </motion.div>
    );
};

export default Header;