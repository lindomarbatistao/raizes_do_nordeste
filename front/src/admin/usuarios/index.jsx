import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("usuarios/");
        setUsuarios(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-users-page">
      <AdminLayout
        title="Usuários"
        subtitle="Gerencie os usuários cadastrados no sistema."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Lista de usuários</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Ativo</th>
                    <th>Staff</th>
                  </tr>
                </thead>

                <tbody>
                  {usuarios.length > 0 ? (
                    usuarios.map((usuario) => (
                      <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.username}</td>
                        <td>
                          {`${usuario.first_name || ""} ${usuario.last_name || ""}`.trim() || "-"}
                        </td>
                        <td>{usuario.email || "-"}</td>
                        <td>{usuario.tipo || "-"}</td>
                        <td>
                          <span
                            className={`status-pill status-${String(
                              usuario.is_active
                            ).toLowerCase()}`}
                          >
                            {usuario.is_active ? "Sim" : "Não"}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`status-pill status-${String(
                              usuario.is_staff
                            ).toLowerCase()}`}
                          >
                            {usuario.is_staff ? "Sim" : "Não"}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="admin-empty">
                        Nenhum usuário encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}