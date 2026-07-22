import api from "./apiClient";
export const createListingCheckout = payload => api.post("/payments/listing-checkout", payload).then(r => r.data);
export const cancelRenewal = serverId => api.post(`/payments/${serverId}/cancel-renewal`).then(r => r.data);
