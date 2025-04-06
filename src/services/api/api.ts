import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

if (import.meta.env.DEV && !import.meta.env.VITE_API_URL) {
  console.warn("⚠️ VITE_API_URL não foi definida. Usando localhost.");
}

export const api = axios.create({ baseURL });
