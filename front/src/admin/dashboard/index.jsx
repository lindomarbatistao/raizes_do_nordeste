import { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function AdminDashboard() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("admin-dashboard/");
        setDados(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1 className="admin-title">Painel Administrativo</h1>

        {dados && (
          <div className="admin-grid">
            <div className="admin-card">
              <h3>Usuários</h3>
              <p>{dados.total_usuarios}</p>
            </div>

            <div className="admin-card">
              <h3>Pedidos</h3>
              <p>{dados.total_pedidos}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}