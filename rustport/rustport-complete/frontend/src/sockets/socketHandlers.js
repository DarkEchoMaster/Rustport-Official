export const bindServerStats = (socket, handler) => {
  socket.on("server:stats", handler);
  return () => socket.off("server:stats", handler);
};
