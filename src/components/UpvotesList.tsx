import React from "react";
import Upvote from "./Upvote";
import { useUpvote } from "../context/UpvoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface UpvotesListProps {
  listIndex: number;
}

const UpvotesList: React.FC<UpvotesListProps> = ({ listIndex }) => {
  // Get the related data and functions from the context
  const { upvotes, toggleUpvote, manipulateUpvotes } = useUpvote();

  // Get the upvotes for the current list
  const upvotesList = upvotes[listIndex];

  // Add an upvote
  const handleAddUpvote = () => {
    manipulateUpvotes(listIndex, "add");
  };

  // Remove an upvote
  const handleRemoveVote = () => {
    manipulateUpvotes(listIndex, "remove");
  };

  return (
    <div className="flex flex-wrap md:justify-between justify-center mx-auto w-full max-w-[650px] mx-auto gap-3">
      <div className="flex w-full max-w-[510px] min-h-[76px] p-3 gap-3 border rounded-xl flex-wrap">
        {upvotesList &&
          upvotesList.upvotesCount &&
          Array.from({ length: upvotesList.upvotesCount }).map((_, index) => (
            <Upvote
              key={`${upvotesList.id}-${index}`}
              onClick={() => toggleUpvote(listIndex)}
              isSelected={upvotesList.state}
            />
          ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-[50px] h-[50px] rounded-xl bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
          onClick={handleAddUpvote}
          data-testid="add-upvote-button"
        >
          <FontAwesomeIcon className="text-2xl" icon={faPlus} />
          <span className="sr-only">Add</span>
        </button>
        <button
          type="button"
          className="w-[50px] h-[50px] rounded-xl bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
          onClick={handleRemoveVote}
          data-testid="remove-upvote-button"
        >
          <FontAwesomeIcon className="text-2xl" icon={faMinus} />
          <span className="sr-only">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default UpvotesList;
