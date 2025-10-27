import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tokens"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (tokens) {
      // optionally decode or fetch profile
      api.setAuthToken(tokens.access);
      (async () => {
        try {
          const resp = await api.get("/api/accounts/profile/");
          setUser(resp.data);
        } catch {
          setUser(null);
        }
      })();
    }
  }, [tokens]);

  const login = (tokenPair) => {
    setTokens(tokenPair);
    localStorage.setItem("tokens", JSON.stringify(tokenPair));
    api.setAuthToken(tokenPair.access);
  };

  const logout = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("tokens");
    api.setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, tokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
