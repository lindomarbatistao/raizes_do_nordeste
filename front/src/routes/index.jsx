import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Produtos from "../pages/produtos";
import Fidelidade from "../pages/fidelidade";
import Pedidos from "../pages/pedidos";
import Carrinho from "../pages/carrinho";
import Register from "../pages/register";

// ADMIN
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../admin/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROTAS PÚBLICAS */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USUÁRIO COMUM */}
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/fidelidade" element={<Fidelidade />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/carrinho" element={<Carrinho />} />

        {/* ADMIN (PROTEGIDO) */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}