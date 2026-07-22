export const isValidServerAddress = value => /^([a-zA-Z0-9.-]+|\d{1,3}(?:\.\d{1,3}){3})(:\d{1,5})?$/.test(value.trim());
export const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
