import React from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'

const backdrop = {
    init: {
        opacity:0,
    },
    ani: {
        opacity:1,
    }
}
const modal = {
    init: {
        y: '-110vh',
        opacity:0,
    },
    ani: {
        y: '200px',
        opacity: 1,
        transition: {
            delay:0.5,
        }
    }
}
const Modal = ({showModal, setShowModal}) => {
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal &&(
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial='init'
                    animate='ani'
                    exit='init'
                >
                    <motion.div className="modal"
                        variants={modal}
                    >
                        <p>Wanna make another pizza?</p>
                        <Link to="/">
                            <button >Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;