import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { socket } from "../sockets/socketClient";
const Ctx = createContext(null);
export function SocketProvider({ children }) {
  const [connected, setConnected] = useState(socket.connected);
  useEffect(() => {
    const yes = () => setConnected(true), no = () => setConnected(false);
    socket.on("connect", yes); socket.on("disconnect", no);
    return () => { socket.off("connect", yes); socket.off("disconnect", no); };
  }, []);
  return <Ctx.Provider value={useMemo(() => ({ socket, connected }), [connected])}>{children}</Ctx.Provider>;
}
export const useSocketContext = () => useContext(Ctx);
