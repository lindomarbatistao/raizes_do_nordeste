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
          <span className="orders-badge">Meus Pedidos</span>

          <h1 className="restaurant-name">
            🌽 Raízes do Nordeste
          </h1>

          <h2 className="orders-title">
            Histórico de Pedidos
          </h2>

          <p className="orders-subtitle">
            Consulte todos os pedidos realizados, acompanhe o status de preparo e visualize
            as informações de cada compra efetuada em nossas unidades.
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
                  <p>Cliente: {pedido.cliente_nome || "Não informada"}</p>
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
      <footer className="footer">
        <p><strong>Desenvolvido por:</strong> Lindomar José Batistão</p>
        <p><strong>RU:</strong> 4427651</p>
        <p>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - UNINTER</p>
      </footer>
    </div>
  );
}