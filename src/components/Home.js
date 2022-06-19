import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Loader from './Loader';
const buttonVariants = {
    hover: {
      scale: 1.1, 
      transition: {
        yoyo: Infinity // cho phép keyframes lặp đi lặp lại bao nhiêu lần từ giá trị này đến giá trị kia
      },
      textShadow: '0px 0px 8px rgba(255,255,255)', 
      boxShadow: '0px 0px 8px rgba(255,255,255)',
    }
};

const containerVariants = {
  init: {
    opacity:0
  },
  ani: {
    opacity: 1,
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
}
const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial='init'
      animate='ani'
      exit='exit'
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader></Loader>
    </motion.div>
  )
}

export default Home;