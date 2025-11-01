import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [IsLogedIn, setIsLogedIn] = useState(
    !!localStorage.getItem("access_token")
  );

  return (
    <AuthContext.Provider value={{ IsLogedIn, setIsLogedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
