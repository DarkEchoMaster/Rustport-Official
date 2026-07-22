import api from "./apiClient";
export const getAdminDashboard = () => api.get("/admin/dashboard").then(r => r.data);
export const getContactMessages = params => api.get("/admin/contacts", { params }).then(r => r.data);
