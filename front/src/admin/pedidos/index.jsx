import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("pedidos/");
        setPedidos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-orders-page">
      <AdminLayout
        title="Pedidos"
        subtitle="Acompanhe os pedidos realizados pelos clientes."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Lista de pedidos</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Loja</th>
                    <th>Canal</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                      <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                        <td>{pedido.cliente_username || pedido.cliente || "-"}</td>
                        <td>{pedido.loja_nome || pedido.loja || "-"}</td>
                        <td>{pedido.canal}</td>
                        <td>
                          <span className={`status-pill status-${pedido.status?.toLowerCase()}`}>
                            {pedido.status}
                          </span>
                        </td>
                        <td>R$ {Number(pedido.valor_total).toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="admin-empty">
                        Nenhum pedido encontrado.
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