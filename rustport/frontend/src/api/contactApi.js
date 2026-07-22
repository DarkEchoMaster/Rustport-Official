import api from "./apiClient";
export const submitContact = data => api.post("/contact", data, { headers: { "Content-Type": "multipart/form-data" } }).then(r => r.data);
