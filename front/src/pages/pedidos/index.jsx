import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

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
    <div className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <span className="orders-badge">Pedidos</span>
          <h1 className="orders-title">Seu histórico de pedidos</h1>
          <p className="orders-subtitle">
            Consulte os pedidos realizados e acompanhe seus status.
          </p>
        </div>

        <div className="orders-actions">
          <button className="btn-outline" onClick={() => navigate("/home")}>
            Voltar
          </button>
        </div>

        <div className="orders-list">
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => (
              <div className="order-card" key={pedido.id}>
                <div className="order-left">
                  <h3>Pedido #{pedido.id}</h3>
                  <p>Loja: {pedido.loja_nome || "Não informada"}</p>
                  <p>Canal: {pedido.canal}</p>
                </div>

                <div className="order-right">
                  <span className={`status-badge status-${pedido.status?.toLowerCase()}`}>
                    {pedido.status}
                  </span>
                  <strong>R$ {Number(pedido.valor_total).toFixed(2)}</strong>
                </div>
              </div>
            ))
          ) : (
            <div className="order-card">
              <p>Nenhum pedido encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}