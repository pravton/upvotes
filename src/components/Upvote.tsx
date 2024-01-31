import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface UpvoteProps {
  isSelected: boolean;
  onClick: () => void;
}

const Upvote: React.FC<UpvoteProps> = ({ onClick, isSelected }) => {

  // class to update the arrow color and background
  const arrowClass = isSelected ? 'selected-arrow' : 'default-arrow';


  return (
    <button
    data-testid="upvote-component"
    title="Upvote"
    type="button"
    className={`${arrowClass} flex items-center justify-center py-2 px-2 rounded-xl w-[50px] h-[50px] cursor-pointer`}
    onClick={onClick}
    >
      <FontAwesomeIcon className='w-full max-w-[30px] text-xl' icon={faArrowUp} />
    </button>
  );
}

export default Upvote;
