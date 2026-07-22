import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeContext = createContext(null);
const themes = ["green", "yellow", "orange", "red", "purple"];

export function ThemeProvider({ children }) {
  const [theme] = useState(() => {
    const saved = localStorage.getItem("rustport-theme");
    if (themes.includes(saved)) return saved;
    const picked = themes[Math.floor(Math.random() * themes.length)];
    localStorage.setItem("rustport-theme", picked);
    return picked;
  });
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  return <ThemeContext.Provider value={useMemo(() => ({ theme }), [theme])}>{children}</ThemeContext.Provider>;
}
export const useThemeContext = () => useContext(ThemeContext);
