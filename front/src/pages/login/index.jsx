import { useState } from "react";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("token/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      const responseUser = await api.get("usuarios/me/");

      if (responseUser.data.is_staff || responseUser.data.is_superuser) {
        navigate("/admin");
      } else {
        navigate("/produtos");
      }
    } catch (error) {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <span className="login-dot"></span>

          <h1 className="login-title">Raízes do Nordeste</h1>
          <p className="login-subtitle">Acesse sua conta para continuar</p>

          <form onSubmit={handleLogin} className="login-form">
            <input
              className="input"
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn" type="submit">
              Entrar
            </button>
          </form>

          <p className="login-link-text">
            Não tem conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}