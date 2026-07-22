export const readStorage = (key, fallback=null) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
export const writeStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
