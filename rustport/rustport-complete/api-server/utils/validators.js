export const validAddress=value=>/^([a-zA-Z0-9.-]+|\d{1,3}(?:\.\d{1,3}){3})(:\d{1,5})?$/.test(String(value||""));
