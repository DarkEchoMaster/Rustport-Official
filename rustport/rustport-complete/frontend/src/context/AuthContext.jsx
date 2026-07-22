import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser, logout as logoutRequest } from "../api/authApi";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCurrentUser().then(d => setUser(d.user || null)).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);
  const logout = async () => { await logoutRequest(); setUser(null); location.assign("/"); };
  return <AuthContext.Provider value={useMemo(() => ({
    user, loading, isAdmin: user?.role === "admin", logout
  }), [user, loading])}>{children}</AuthContext.Provider>;
}
export const useAuthContext = () => useContext(AuthContext);
