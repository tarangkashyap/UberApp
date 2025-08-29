import { createContext, useState, useContext } from "react";

// Create the context
export const CaptainDataContext = createContext();

// Provider component
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null); // store captain data
  const [isLoading, setIsLoading] = useState(false); // for API calls
  const [error, setError] = useState(null); // for errors

  // update captain state (login, profile update, etc.)
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
