import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
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
};

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
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='init'
      animate='ani'
      exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.2, color: '#f8e112', originX: 0}}
              transition={{type: 'spring', stiffness:200}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;