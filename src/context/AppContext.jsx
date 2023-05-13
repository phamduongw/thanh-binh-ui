import { createContext } from 'react';
import useScreenSize from '../hooks/useScreenSize';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const screenSize = useScreenSize();
  return (
    <AppContext.Provider value={{ screenSize }}>{children}</AppContext.Provider>
  );
};
