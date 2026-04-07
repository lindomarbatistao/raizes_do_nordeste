import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";

export default function AdminProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("produtos/");
        setProdutos(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    carregar();
  }, []);

  return (
    <AdminLayout
      title="Produtos"
      subtitle="Visualize os produtos disponíveis no catálogo."
    >
      <div className="admin-table-card">
        <h3>Lista de produtos</h3>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Ativo</th>
              </tr>
            </thead>
            <tbody>
              {produtos.length > 0 ? (
                produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.categoria_nome || produto.categoria || "-"}</td>
                    <td>R$ {Number(produto.preco).toFixed(2)}</td>
                    <td>
                      <span className={`status-pill status-${String(produto.ativo).toLowerCase()}`}>
                        {produto.ativo ? "Sim" : "Não"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="admin-empty">Nenhum produto encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}