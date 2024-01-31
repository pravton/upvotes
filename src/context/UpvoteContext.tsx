import React from "react";

interface UpvoteContextProps {
  children: React.ReactNode;
}

const UpvoteContext = React.createContext<UpvoteContextProps | null>(null);

export const UpvoteProvider: React.FC<UpvoteContextProps> = ({ children }) => {
  return (
    <UpvoteContext.Provider value={{ children }}>
      {children}
    </UpvoteContext.Provider>
  );
};