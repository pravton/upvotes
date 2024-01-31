import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface UpvoteProps {
  isSelected: boolean;
  onClick: () => void;
}

const Upvote: React.FC<UpvoteProps> = ({ onClick, isSelected }) => {

  // class to update the arrow color and background
  const arrowClass = isSelected ? 'selected-arrow' : 'default-arrow';

  const animation = {
    hidden: { scale: 0, opacity: 0, y: -40 },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        speed: 0.1
      }
    }
  };


  return (
    <motion.button
    data-testid="upvote-component"
    title="Upvote"
    type="button"
    className={`${arrowClass} flex items-center justify-center py-2 px-2 rounded-xl w-[50px] h-[50px] cursor-pointer`}
    onClick={onClick}
    initial='hidden'
    animate='visible'
    exit='exit'
    variants={animation}
    >
      <FontAwesomeIcon className='w-full max-w-[30px] text-xl' icon={faArrowUp} />
    </motion.button>
  );
}

export default Upvote;
