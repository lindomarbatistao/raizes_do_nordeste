import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

export default function AdminLayout({ title, subtitle, children }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  }

  return (
    <div className="admin-layout-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Admin</h2>
          <p>Raízes do Nordeste</p>
        </div>

        <nav className="admin-menu">
          <NavLink to="/admin" end>Dashboard</NavLink>
          <NavLink to="/admin/usuarios">Usuários</NavLink>
          <NavLink to="/admin/categorias">Categorias</NavLink>
          <NavLink to="/admin/produtos">Produtos</NavLink>
          <NavLink to="/admin/estoque">Estoque</NavLink>
          <NavLink to="/admin/pedidos">Pedidos</NavLink>
          <NavLink to="/admin/pagamentos">Pagamentos</NavLink>
          <NavLink to="/admin/fidelidades">Fidelidades</NavLink>
        </nav>

        <button className="admin-logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <span className="admin-badge">Painel Administrativo</span>
          <h1 className="admin-main-title">{title}</h1>
          {subtitle && <p className="admin-main-subtitle">{subtitle}</p>}
        </div>

        {children}
      </main>
    </div>
  );
}