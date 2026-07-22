import { createContext, useContext, useMemo, useState } from "react";
import Toast from "../components/ui/Toast";
const Ctx = createContext(null);
export function NotificationProvider({ children }) {
  const [notice, setNotice] = useState(null);
  const notify = (message, type = "info") => {
    setNotice({ message, type });
    setTimeout(() => setNotice(null), 3500);
  };
  return <Ctx.Provider value={useMemo(() => ({ notify }), [])}>
    {children}
    {notice && <Toast {...notice} onClose={() => setNotice(null)} />}
  </Ctx.Provider>;
}
export const useNotifications = () => useContext(Ctx);
