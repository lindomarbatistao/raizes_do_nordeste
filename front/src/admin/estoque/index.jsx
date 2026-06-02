import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminEstoque() {
  const [estoque, setEstoque] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("estoque-loja/");
        setEstoque(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-stock-page">
      <AdminLayout
        title="Estoque por Loja"
        subtitle="Acompanhe disponibilidade e quantidades por unidade."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Estoque</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Loja</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Disponível</th>
                  </tr>
                </thead>

                <tbody>
                  {estoque.length > 0 ? (
                    estoque.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.loja_nome || item.loja || "-"}</td>
                        <td>{item.produto_nome || item.produto || "-"}</td>
                        <td>{item.quantidade}</td>
                        <td>
                          <span
                            className={`status-pill status-${String(
                              item.disponivel
                            ).toLowerCase()}`}
                          >
                            {item.disponivel ? "Sim" : "Não"}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="admin-empty">
                        Nenhum item de estoque encontrado.
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