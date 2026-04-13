import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const token = await AsyncStorage.getItem("access");

        if (!token) {
          setUser(null);
          return;
        }

        const response = await api.get("usuarios/me/");
        setUser(response.data);
      } catch (error) {
        await AsyncStorage.removeItem("access");
        await AsyncStorage.removeItem("refresh");
        setUser(null);
      } finally {
        setLoadingAuth(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(username, password) {
    const response = await api.post("token/", {
      username,
      password,
    });

    await AsyncStorage.setItem("access", response.data.access);
    await AsyncStorage.setItem("refresh", response.data.refresh);

    const responseUser = await api.get("usuarios/me/");
    setUser(responseUser.data);
  }

  async function signOut() {
    await AsyncStorage.removeItem("access");
    await AsyncStorage.removeItem("refresh");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
        signIn,
        signOut,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}