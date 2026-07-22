import api from "./apiClient";
export const getCurrentUser = () => api.get("/auth/me").then(r => r.data);
export const logout = () => api.post("/auth/logout").then(r => r.data);
export const steamLoginUrl = `${import.meta.env.VITE_API_URL || "/api"}/auth/steam`;
