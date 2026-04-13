import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Fidelidade from "../pages/fidelidade";
import Pedidos from "../pages/pedidos";
import Carrinho from "../pages/carrinho";

import AdminRoute from "./AdminRoute";
import AdminDashboard from "../admin/dashboard";
import AdminUsuarios from "../admin/usuarios";
import AdminCategorias from "../admin/categorias";
import Produtos from "../pages/produtos"
import AdminEstoque from "../admin/estoque";
import AdminPedidos from "../admin/pedidos";
import AdminPagamentos from "../admin/pagamentos";
import AdminFidelidades from "../admin/fidelidades";
import AdminLayout from "../admin/components/AdminLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/fidelidade" element={<Fidelidade />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/carrinho" element={<Carrinho />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/usuarios"
          element={
            <AdminRoute>
              <AdminUsuarios />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/categorias"
          element={
            <AdminRoute>
              <AdminCategorias />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/produtos"
          element={
            <AdminRoute>
              <Produtos />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/estoque"
          element={
            <AdminRoute>
              <AdminEstoque />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/pedidos"
          element={
            <AdminRoute>
              <AdminPedidos />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/pagamentos"
          element={
            <AdminRoute>
              <AdminPagamentos />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/fidelidades"
          element={
            <AdminRoute>
              <AdminFidelidades />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}