import React, { createContext, useContext, useState, useEffect } from "react";

interface UpvoteContextProps {
  upvotes: boolean[][];
  addUpvote: (listIndex: number) => void;
  removeUpvote: (listIndex: number) => void;
  toggleUpvote: (listIndex: number, upvoteIndex: number) => void;
}

const UpvoteContext = createContext<UpvoteContextProps | null>(null);

export const UpvoteProvider: React.FC<{ children: React.ReactNode } > = ({ children }) => {
  
  // Initial state is an empty array || the value from localStorage
  const [upvotes, setUpvotes] = useState<boolean[][]>(JSON.parse(localStorage.getItem('upvotes') || '[]'));

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('upvotes', JSON.stringify(upvotes));
  }, [upvotes]);

  // Add a new upvote
  const addUpvote = (listIndex: number) => {
    const newUpvotes = [...upvotes];
    if (!newUpvotes[listIndex]) {
      newUpvotes[listIndex] = [];
    }
    newUpvotes[listIndex].push(false);
    setUpvotes(newUpvotes);
  };

  // Remove an upvote
  const removeUpvote = (listIndex: number) => {
    const updated = [...upvotes];
    if (!updated[listIndex]) {
      updated[listIndex] = [];
    }
    updated[listIndex].pop();
    setUpvotes(updated);
  };

  // Toggle an upvote
  const toggleUpvote = (listIndex: number, upvoteIndex: number) => {
    const newUpvotes = [...upvotes];
    newUpvotes[listIndex][upvoteIndex] = !newUpvotes[listIndex][upvoteIndex];
    setUpvotes(newUpvotes);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote, removeUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};


// Custom hook to use the UpvoteContext
export const useUpvote = () => {
  const context = useContext(UpvoteContext);
  if (!context) {
    throw new Error('useUpvote must be used within a UpvoteProvider');
  }
  return context;
};