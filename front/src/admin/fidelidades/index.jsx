import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminFidelidades() {
  const [fidelidades, setFidelidades] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("fidelidade/");
        setFidelidades(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-loyalty-page">
      <AdminLayout
        title="Fidelidades"
        subtitle="Consulte a pontuação dos clientes no programa de fidelidade."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Lista de fidelidades</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Pontos</th>
                  </tr>
                </thead>

                <tbody>
                  {fidelidades.length > 0 ? (
                    fidelidades.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.cliente_username || item.cliente || "-"}</td>
                        <td>{item.pontos}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="admin-empty">
                        Nenhum registro encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
      <footer className="footer">
        <p><strong>Desenvolvido por:</strong> Lindomar José Batistão</p>
        <p><strong>RU:</strong> 4427651</p>
        <p>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - UNINTER</p>
      </footer>
    </div>
  );
}