import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [access, setAccess] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log("Username: ", user.username);
  // console.log("Password: ", password);
  

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const storedAccess = await AsyncStorage.getItem("@token");
      const storedRefresh = await AsyncStorage.getItem("@refresh");
      const storedUser = await AsyncStorage.getItem("@user");

      if (storedAccess && storedRefresh && storedUser) {
        setAccess(storedAccess);
        setRefresh(storedRefresh);
        setUser(JSON.parse(storedUser));
        api.defaults.headers.common["Authorization"] = `Bearer ${storedAccess}`;
      }
    } catch (error) {
      console.log("Erro ao carregar dados locais:", error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(username, password) {
    const tokenResponse = await api.post("token/", {
      username,
      password,
    });

    const { access, refresh } = tokenResponse.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    const userResponse = await api.get("usuarios/me/");

    setAccess(access);
    setRefresh(refresh);
    setUser(userResponse.data);

    await AsyncStorage.setItem("@token", access);
    await AsyncStorage.setItem("@refresh", refresh);
    await AsyncStorage.setItem("@user", JSON.stringify(userResponse.data));
  }

  async function signOut() {
    setUser(null);
    setAccess(null);
    setRefresh(null);

    delete api.defaults.headers.common["Authorization"];

    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@refresh");
    await AsyncStorage.removeItem("@user");
  }

  async function refreshUser() {
    try {
      const response = await api.get("usuarios/me/");
      setUser(response.data);
      await AsyncStorage.setItem("@user", JSON.stringify(response.data));
    } catch (error) {
      console.log("Erro ao atualizar usuário:", error);
    }
  }

  const isAdmin = user?.is_staff || user?.is_superuser;

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        access,
        refresh,
        loading,
        isAdmin,
        signIn,
        signOut,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}