import api from "./apiClient";
export const getPosts = params => api.get("/blog", { params }).then(r => r.data);
export const getPost = slug => api.get(`/blog/${slug}`).then(r => r.data);
export const createPost = data => api.post("/blog", data, { headers: { "Content-Type": "multipart/form-data" } }).then(r => r.data);
export const deletePost = id => api.delete(`/blog/${id}`).then(r => r.data);
