import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import api from "../../services/api";
import "./styles.css";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [pagamentos, setPagamentos] = useState([]);
  const [fidelidades, setFidelidades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregar() {
      try {
        const [
          dashboardResponse,
          usuariosResponse,
          produtosResponse,
          pedidosResponse,
          pagamentosResponse,
          fidelidadesResponse,
        ] = await Promise.all([
          api.get("admin-dashboard/"),
          api.get("usuarios/"),
          api.get("produtos/"),
          api.get("pedidos/"),
          api.get("pagamentos/"),
          api.get("fidelidade/"),
        ]);

        setDashboard(dashboardResponse.data);
        setUsuarios(usuariosResponse.data || []);
        setProdutos(produtosResponse.data || []);
        setPedidos(pedidosResponse.data || []);
        setPagamentos(pagamentosResponse.data || []);
        setFidelidades(fidelidadesResponse.data || []);
      } catch (error) {
        console.error("Erro ao carregar dashboard admin:", error);
      }
    }

    carregar();
  }, []);

  function handleLogout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  }

  const resumoCards = useMemo(() => {
    const totalUsuarios = dashboard?.total_usuarios ?? usuarios.length;
    const totalPedidos = dashboard?.total_pedidos ?? pedidos.length;
    const totalProdutos = produtos.length;
    const totalPagamentos = pagamentos.length;
    const totalFidelidades = fidelidades.length;

    return [
      { titulo: "Usuários", valor: totalUsuarios, icone: "👥" },
      { titulo: "Pedidos", valor: totalPedidos, icone: "📦" },
      { titulo: "Produtos", valor: totalProdutos, icone: "🍽️" },
      { titulo: "Pagamentos", valor: totalPagamentos, icone: "💳" },
      { titulo: "Fidelidades", valor: totalFidelidades, icone: "⭐" },
    ];
  }, [dashboard, usuarios, pedidos, produtos, pagamentos, fidelidades]);

  const dadosBarra = useMemo(() => {
    return resumoCards.map((item) => ({
      name: item.titulo,
      total: item.valor,
    }));
  }, [resumoCards]);

  const dadosStatusPedidos = useMemo(() => {
    const mapa = {
      CRIADO: 0,
      PAGO: 0,
      EM_PREPARO: 0,
      PRONTO: 0,
      ENTREGUE: 0,
      CANCELADO: 0,
    };

    pedidos.forEach((pedido) => {
      if (mapa[pedido.status] !== undefined) {
        mapa[pedido.status] += 1;
      }
    });

    return [
      { name: "Criado", value: mapa.CRIADO },
      { name: "Pago", value: mapa.PAGO },
      { name: "Em preparo", value: mapa.EM_PREPARO },
      { name: "Pronto", value: mapa.PRONTO },
      { name: "Entregue", value: mapa.ENTREGUE },
      { name: "Cancelado", value: mapa.CANCELADO },
    ].filter((item) => item.value > 0);
  }, [pedidos]);

  const pedidosRecentes = useMemo(() => {
    return [...pedidos].slice(0, 5);
  }, [pedidos]);

  const coresPizza = ["#00bb00", "#0327f3", "#ff0000", "#e900dd", "#c5c503", "#94f001"];

  return (
    <div className="admin-dashboard-page">
      <div className="admin-dashboard-container">
        <header className="admin-dashboard-header">
          <div className="admin-dashboard-top">
            <div>
              <span className="admin-dashboard-badge">Painel Administrativo</span>
              <h1 className="admin-dashboard-title">Visão geral do negócio</h1>
              <p className="admin-dashboard-subtitle">
                Acompanhe os principais indicadores da operação e navegue pelas áreas administrativas.
              </p>
            </div>

            <button className="admin-dashboard-logout" onClick={handleLogout}>
              Sair
            </button>
          </div>

          <nav className="admin-dashboard-nav">
            <NavLink to="/admin" end>
              Dashboard
            </NavLink>
            <NavLink to="/admin/usuarios">Usuários</NavLink>
            <NavLink to="/admin/categorias">Categorias</NavLink>
            <NavLink to="/admin/produtos">Produtos</NavLink>
            <NavLink to="/admin/estoque">Estoque</NavLink>
            <NavLink to="/admin/pedidos">Pedidos</NavLink>
            <NavLink to="/admin/pagamentos">Pagamentos</NavLink>
            <NavLink to="/admin/fidelidades">Fidelidades</NavLink>
          </nav>
        </header>

        <section className="admin-dashboard-cards">
          {resumoCards.map((item) => (
            <div className="admin-dashboard-card" key={item.titulo}>
              <div className="admin-dashboard-card-icon">{item.icone}</div>
              <div>
                <h3>{item.titulo}</h3>
                <p>{item.valor}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="admin-dashboard-charts">
          <div className="admin-dashboard-chart-card">
            <h3>Resumo geral</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={dadosBarra}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="total" radius={[8, 8, 0, 0]} fill="#f4d54d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="admin-dashboard-chart-card">
            <h3>Status dos pedidos</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={dadosStatusPedidos}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    innerRadius={55}
                    paddingAngle={4}
                  >
                    {dadosStatusPedidos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={coresPizza[index % coresPizza.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="admin-dashboard-bottom">
          <div className="admin-dashboard-table-card">
            <h3>Pedidos recentes</h3>

            <div className="admin-dashboard-table-wrapper">
              <table className="admin-dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Loja</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidosRecentes.length > 0 ? (
                    pedidosRecentes.map((pedido) => (
                      <tr key={pedido.id}>
                        <td>#{pedido.id}</td>
                        <td>{pedido.cliente_username || pedido.cliente || "-"}</td>
                        <td>{pedido.loja_nome || pedido.loja || "-"}</td>
                        <td>
                          <span className={`admin-status-pill admin-status-${pedido.status?.toLowerCase()}`}>
                            {pedido.status}
                          </span>
                        </td>
                        <td>R$ {Number(pedido.valor_total).toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="admin-empty">
                        Nenhum pedido encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="admin-dashboard-info-card">
            <h3>Destaques</h3>

            <div className="admin-highlight-list">
              <div className="admin-highlight-item">
                <span>Usuários ativos no sistema</span>
                <strong>{usuarios.filter((u) => u.is_active).length}</strong>
              </div>

              <div className="admin-highlight-item">
                <span>Produtos ativos</span>
                <strong>{produtos.filter((p) => p.ativo).length}</strong>
              </div>

              <div className="admin-highlight-item">
                <span>Pagamentos aprovados</span>
                <strong>
                  {pagamentos.filter((p) => p.status === "APROVADO").length}
                </strong>
              </div>

              <div className="admin-highlight-item">
                <span>Pedidos entregues</span>
                <strong>
                  {pedidos.filter((p) => p.status === "ENTREGUE").length}
                </strong>
              </div>

              <div className="admin-highlight-item">
                <span>Total de pontos distribuídos</span>
                <strong>
                  {fidelidades.reduce((acc, item) => acc + (item.pontos || 0), 0)}
                </strong>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p><strong>Desenvolvido por:</strong> Lindomar José Batistão</p>
        <p><strong>RU:</strong> 4427651</p>
        <p>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - UNINTER</p>
      </footer>
    </div>
  );
}