import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Home() {
  const [usuario, setUsuario] = useState(null);
  const [fidelidade, setFidelidade] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarDados() {
      try {
        const [usuarioResponse, fidelidadeResponse, pedidosResponse] =
          await Promise.all([
            api.get("usuarios/me/"),
            api.get("fidelidade/"),
            api.get("pedidos/"),
          ]);

        setUsuario(usuarioResponse.data);

        if (Array.isArray(fidelidadeResponse.data) && fidelidadeResponse.data.length > 0) {
          setFidelidade(fidelidadeResponse.data[0]);
        }

        if (Array.isArray(pedidosResponse.data)) {
          setPedidos(pedidosResponse.data.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
      }
    }

    carregarDados();
  }, []);

  function handleLogout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <span className="home-badge">Restaurante</span>

          <h1 className="restaurant-name">
            🌽 Raízes do Nordeste
          </h1>

          <h2 className="home-title">
            Bem-vindo ao sabor da tradição nordestina.
          </h2>

          <p className="home-subtitle">
            Faça seus pedidos, acompanhe o preparo, consulte seus pontos de fidelidade
            e aproveite a melhor experiência gastronômica da nossa rede.
          </p>
        </div>

        <section className="home-hero-card">
          <span className="home-dot"></span>

          <div className="hero-left">
            <h2>
              {usuario ? `Bem-vindo, ${usuario.first_name} ${usuario.last_name}` : "Bem-vindo"}
            </h2>
            <p>
              Sua experiência com a Raízes do Nordeste começa aqui. Navegue pelo cardápio,
              acompanhe seus pedidos em tempo real e aproveite seus benefícios.
            </p>

            <div className="hero-actions">
              <button className="btn-main" onClick={() => navigate("/produtos")}>
                Ver produtos
              </button>
              <button className="btn-outline" onClick={() => navigate("/fidelidade")}>
                Minha fidelidade
              </button>
              <button className="btn-outline danger" onClick={handleLogout}>
                Sair
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="mini-card">
              <h3>Pedidos</h3>
              <p>{pedidos.length} recentes</p>
            </div>

            <div className="mini-card yellow">
              <h3>Pontos</h3>
              <p>{fidelidade ? fidelidade.pontos : 0}</p>
            </div>
          </div>
        </section>

        <section className="home-grid">
          <div className="feature-card" onClick={() => navigate("/produtos")}>
            <div className="feature-icon">🍽️</div>
            <h3>Cardápio</h3>
            <p>Consulte os produtos disponíveis e explore as opções da unidade.</p>
          </div>

          <div className="feature-card" onClick={() => navigate("/pedidos")}>
            <div className="feature-icon">📦</div>
            <h3>Pedidos</h3>
            <p>Veja o andamento dos seus pedidos e acompanhe o status da entrega.</p>
          </div>

          <div className="feature-card" onClick={() => navigate("/fidelidade")}>
            <div className="feature-icon">⭐</div>
            <h3>Fidelidade</h3>
            <p>Confira seus pontos e aproveite vantagens acumuladas no programa.</p>
          </div>
        </section>

        <section className="home-dashboard">
          <div className="dashboard-card">
            <h3>Resumo da Conta</h3>
            <div className="dashboard-list">
              <div className="dashboard-item">
                <span>Usuário</span>
                <strong>{usuario?.username || "Carregando..."}</strong>
              </div>
              <div className="dashboard-item">
                <span>Email</span>
                <strong>{usuario?.email || "-"}</strong>
              </div>
              <div className="dashboard-item">
                <span>Pontos</span>
                <strong>{fidelidade?.pontos ?? 0}</strong>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Últimos Pedidos</h3>

            {pedidos.length > 0 ? (
              <div className="dashboard-orders">
                {pedidos.map((pedido) => (
                  <div key={pedido.id} className="order-item">
                    <div>
                      <strong>Pedido #{pedido.id}</strong>
                      <p>{pedido.loja_nome || "Loja"}</p>
                    </div>

                    <div className="order-right">
                      <span className={`status-badge status-${pedido.status?.toLowerCase()}`}>
                        {pedido.status}
                      </span>
                      <strong>R$ {pedido.valor_total}</strong>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-text">Nenhum pedido encontrado.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}