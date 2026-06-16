import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL =
  Platform.OS === "android"
    ? "http://10.0.2.2:8000/api/"
    : "http://192.168.15.6:8000/api/";

const api = axios.create({
  baseURL,
  timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  const publicRoutes = ["produtos/", "categorias/", "lojas/"];
  const isPublicRoute = publicRoutes.some((route) =>
    config.url?.includes(route)
  );

  if (!isPublicRoute) {
    const token = await AsyncStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;