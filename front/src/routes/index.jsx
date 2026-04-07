import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Produtos from "../pages/produtos";
import Fidelidade from "../pages/fidelidade";
import Pedidos from "../pages/pedidos";
import Carrinho from "../pages/carrinho";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/fidelidade" element={<Fidelidade />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}