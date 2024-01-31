import React from "react";
import Upvote from "./Upvote";

interface UpvotesListProps {
  listIndex: number;
}

const UpvotesList: React.FC<UpvotesListProps> = ({ listIndex }) => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div>
      {listIndex}
      <Upvote onClick={handleClick}/>
    </div>
  );
}

export default UpvotesList;
