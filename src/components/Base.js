import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVarients = {
  init: { //initial
    opacity:0,
    x : '100vw',
  },
  ani: { //animated
    opacity: 1,
    x: 0,
    transition: {
      type:'spring',  
      stiffness: 40,
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
}

const nextVariants = {
  init: {
    x: '-100vw'
  },
  ani: {
    x: 0,
    transition: {
      type: 'spring', 
      stiffness: 50,
    }
  },

}

const buttonVariants = {
  hover: {
    scale: 1.1, 
    transition: {
      yoyo: Infinity // cho phép keyframes lặp đi lặp lại bao nhiêu lần từ giá trị này đến giá trị kia
    },
    textShadow: '0px 0px 8px rgba(255,255,255)', 
    boxShadow: '0px 0px 8px rgba(255,255,255)',
  }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVarients}
      initial="init"
      animate="ani"
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.2, color: '#f8e112', originX: 0}}
              transition={{type: 'spring', stiffness:200}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base ? (
        <motion.div className="next"
          variants={nextVariants}
          // initial='init'
          // animate='ani'
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      ) : ''}

    </motion.div>
  )
}

export default Base;