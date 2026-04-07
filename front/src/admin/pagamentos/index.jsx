import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminPagamentos() {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("pagamentos/");
        setPagamentos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-payments-page">
      <AdminLayout
        title="Pagamentos"
        subtitle="Visualize os pagamentos e seus respectivos status."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Lista de pagamentos</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Pedido</th>
                    <th>Método</th>
                    <th>Status</th>
                    <th>Valor</th>
                    <th>Transação</th>
                  </tr>
                </thead>

                <tbody>
                  {pagamentos.length > 0 ? (
                    pagamentos.map((pagamento) => (
                      <tr key={pagamento.id}>
                        <td>{pagamento.id}</td>
                        <td>{pagamento.pedido}</td>
                        <td>{pagamento.metodo}</td>
                        <td>
                          <span className={`status-pill status-${pagamento.status?.toLowerCase()}`}>
                            {pagamento.status}
                          </span>
                        </td>
                        <td>R$ {Number(pagamento.valor).toFixed(2)}</td>
                        <td>{pagamento.transacao_id || "-"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="admin-empty">
                        Nenhum pagamento encontrado.
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