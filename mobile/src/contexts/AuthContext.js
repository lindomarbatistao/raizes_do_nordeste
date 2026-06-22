import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    carregarUsuarioLogado();
  }, []);

  async function carregarUsuarioLogado() {
    try {
      setLoadingAuth(true);

      const token = await AsyncStorage.getItem("access");

      console.log("TOKEN SALVO:", token);

      if (!token) {
        setUser(null);
        return;
      }

      const response = await api.get("usuarios/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.log(
        "ERRO AO CARREGAR USUÁRIO:",
        error?.response?.data || error.message
      );

      await AsyncStorage.removeItem("access");
      await AsyncStorage.removeItem("refresh");
      setUser(null);
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signIn(username, password) {
    const response = await api.post("token/", {
      username,
      password,
    });

    const { access, refresh } = response.data;

    await AsyncStorage.setItem("access", access);
    await AsyncStorage.setItem("refresh", refresh);

    const responseUser = await api.get("usuarios/me/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });

    setUser(responseUser.data);

    return responseUser.data;
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
        carregarUsuarioLogado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}