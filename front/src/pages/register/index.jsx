import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    first_name: "",
    last_name: "",
    telefone: "",
    cpf: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const payload = {
      username: form.username,
      password: form.password,
      email: form.email,
      first_name: form.first_name,
      last_name: form.last_name,
      telefone: form.telefone,
      cpf: form.cpf,
    };

    try {
      await api.post("usuarios/", payload);
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Erro ao cadastrar usuário.");
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <span className="register-dot"></span>

          <h1 className="register-title">Cadastre-se</h1>
          <p className="register-subtitle">
            Crie sua conta para acessar o sistema.
          </p>

          <form onSubmit={handleSubmit} className="register-form">
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Usuário"
              value={form.username}
              onChange={handleChange}
              required
            />

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirmar senha"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="input"
              type="text"
              name="first_name"
              placeholder="Nome"
              value={form.first_name}
              onChange={handleChange}
            />

            <input
              className="input"
              type="text"
              name="last_name"
              placeholder="Sobrenome"
              value={form.last_name}
              onChange={handleChange}
            />

            <input
              className="input"
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
            />

            <input
              className="input"
              type="text"
              name="cpf"
              placeholder="CPF"
              value={form.cpf}
              onChange={handleChange}
            />

            <button className="btn" type="submit">
              Cadastrar
            </button>
          </form>

          <p className="register-link-text">
            Já tem conta? <Link to="/">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}