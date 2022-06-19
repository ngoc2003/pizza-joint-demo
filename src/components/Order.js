import React, {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVarients = {
  init: {
    opacity: 0,
    x: '100vw',
  },
  ani: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // stiffness: 40,
      mass: 0.4,  // sự dao đông cửa vật, càng cao dao động càng nhiều
      damping:14, // độ nặng của opposite force(lực hút lại), default=10=> bằng 0, vật thẻ sẽ thành lò xo vĩnh cửu
      when: "beforeChildren",
      staggerChildren: 1 // khoảng thời gian xuất hiện giữa children 1 -> 2 -> 3...
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
};

const childVariants = {
  init: {
    opacity: 0,
  },
  ani: {
    opacity: 1,
  },
};
const Order = ({ pizza , setShowModal}) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000);
      return () => clearTimeout(timer);
    }, [setShowModal]);
  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="init"
      animate="ani"
      exit = "exit"
    >
      {/* <AnimatePresence>
        {showTitle? 
          <motion.h2
            exit={{opacity:0}}
          >Thank you for your order :)</motion.h2> : ''}
      </AnimatePresence> */}
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
