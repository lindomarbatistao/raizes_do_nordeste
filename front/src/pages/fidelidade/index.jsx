import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Fidelidade() {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("fidelidade/");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setDados(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  const pontos = dados?.pontos || 0;
  const nivel =
    pontos >= 100 ? "Premium" : pontos >= 50 ? "Intermediário" : "Inicial";

  return (
    <div className="fidelity-page">
      <div className="fidelity-container">
        <div className="fidelity-header">
          <span className="fidelity-badge">Programa de Fidelidade</span>

          <h1 className="restaurant-name">
            🌽 Raízes do Nordeste
          </h1>

          <h2 className="fidelity-title">
            Clube de Fidelidade
          </h2>

          <p className="fidelity-subtitle">
            Acompanhe seus pontos, evolua de categoria e aproveite benefícios exclusivos
            oferecidos pelo Raízes do Nordeste.
          </p>
        </div>

        <div className="fidelity-actions">
          <button className="btn-outline" onClick={() => navigate("/home")}>
            Voltar
          </button>
        </div>

        <div className="fidelity-grid">
          <div className="fidelity-card main">
            <span className="fidelity-dot"></span>
            <h2>Pontos acumulados</h2>
            <div className="big-number">{pontos}</div>
            <p>Continue pedindo para desbloquear novas vantagens.</p>
          </div>

          <div className="fidelity-card">
            <h3>Nível atual</h3>
            <p className="highlight">{nivel}</p>
          </div>

          <div className="fidelity-card">
            <h3>Meta sugerida</h3>
            <p className="highlight">
              {pontos < 50 ? "50 pontos" : pontos < 100 ? "100 pontos" : "Meta máxima"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}