import React from "react";

interface UpvoteProps {
  onClick: () => void;
}

const Upvote: React.FC<UpvoteProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
      >Click</button>
    </div>
  );
}

export default Upvote;
