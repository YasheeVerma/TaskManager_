import axios from "axios";

export const API = axios.create({
  baseURL: "https://taskmanager-jndi.onrender.com/api/tasks"
});
