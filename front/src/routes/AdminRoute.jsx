import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await api.get("usuarios/me/");
        const user = response.data;

        if (user.is_staff || user.is_superuser) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    checkAdmin();
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (!isAdmin) return <Navigate to="/home" />;

  return children;
}