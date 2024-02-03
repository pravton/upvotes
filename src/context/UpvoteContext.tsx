import React, { createContext, useContext, useState, useEffect } from "react";

interface upvotesList {
  id: number;
  state: boolean;
  upvotesCount: number;
}

interface UpvoteContextProps {
  upvotes: upvotesList[];
  manipulateUpvotes: (id: number, operation: 'add' | 'remove') => void;
  toggleUpvote: (id: number) => void;
}

const UpvoteContext = createContext<UpvoteContextProps | null>(null);

export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initial state is an empty array || the value from localStorage
  const initialState = JSON.parse(localStorage.getItem('upvotesList') || '[]');
  const [upvotes, setUpvotes] = useState(initialState);

  // Save upvotes to localStorage
  useEffect(() => {
    localStorage.setItem('upvotesList', JSON.stringify(upvotes));
  }, [upvotes]);
  

  // Manipulate upvotes
  const manipulateUpvotes = (id: number, operation: 'add' | 'remove') => {
    const newUpvotes = upvotes.map((upvote: upvotesList) => {
      if (upvote.id === id) {
        return {
          ...upvote,
          upvotesCount: operation === 'add' 
              ? upvote.upvotesCount + 1 
              : Math.max(0, upvote.upvotesCount - 1)
      };
      
      }
      return upvote;
    });
    
    // In case of 'add' operation, if the upvote is not found, add a new upvote
    if (operation === 'add' && !newUpvotes.find((upvote: upvotesList) => upvote.id === id)) {
      setUpvotes([...newUpvotes, { id: id, state: false, upvotesCount: 1 }]);
      return;
    }

    setUpvotes(newUpvotes);
  };

  // Toggle upvote
  const toggleUpvote = (id: number) => {
    const newUpvotes = upvotes.map((upvote:upvotesList) => 
      upvote.id === id ? { ...upvote, state: !upvote.state } : upvote
    );
    setUpvotes(newUpvotes);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, manipulateUpvotes, toggleUpvote }}>
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
