import React from 'react';
import { motion, useCycle } from 'framer-motion'

const loaderVariants = {
    ani_1:{
        x: [-20, 20], 
        y: [0, -30],
        transition: {
            // transition cho 2 animate khác nhau
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    ani_2:{
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration:0.25,
                ease: 'easeOut'
            }
        }
    }
}
const Loader = () => {
    const [animation, cycleAni] = useCycle('ani_1', 'ani_2')
    return (
        <>
            <motion.div className='loader'
                variants={loaderVariants}
                animate={animation}
            >

            </motion.div>
            {/* <div onClick={ () => cycleAni()}>Cycle Loader</div> */}
        </>
    );
};

export default Loader;