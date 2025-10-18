import type { User } from "../utils/types";
import api from "./apiClient";

export const getUsers = () => api.get("/users");
export const getUserById = (id: string) => api.get(`/userDetails/${id}`);

export const changeStatus = (id: string, data: User) =>
  api.put(`/users/${id}`, data);
