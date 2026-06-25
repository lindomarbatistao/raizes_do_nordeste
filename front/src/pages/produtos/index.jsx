import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("produtos/");
        setProdutos(response.data);

      } catch (error) {
        console.error(error);
      }
    }

    carregarProdutos();
  }, []);

  function adicionarAoCarrinho(produto) {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];

    const itemExistente = carrinhoAtual.find((item) => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinhoAtual.push({
        id: produto.id,
        nome: produto.nome,
        preco: Number(produto.preco),
        quantidade: 1,
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    alert("Produto adicionado ao carrinho!");
  }

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="user-icon-container">
          <FaUserCircle
            className="user-icon"
            onClick={() => navigate("/login")}
          />
        </div>
        <div className="products-header">
          <span className="products-badge">Cardápio</span>

          <h1 className="restaurant-name">
            🌽 Raízes do Nordeste
          </h1>

          <h2 className="products-title">
            Escolha seu pedido
          </h2>

          <p className="products-subtitle">
            Explore os sabores da tradição nordestina e monte sua experiência.
          </p>
        </div>

        <div className="products-actions">
          <button className="btn-outline" onClick={() => navigate("/home")}>
            Voltar
          </button>
          <button className="btn-main" onClick={() => navigate("/carrinho")}>
            Ver carrinho
          </button>
        </div>

        <div className="products-grid">
          {produtos.map((produto) => (
            <div className="product-card" key={produto.id}>
              <span className="product-dot"></span>

              <h3>{produto.nome}</h3>
              <p>{produto.descricao || "Produto disponível na unidade."}</p>

              <div className="product-footer">
                <strong>R$ {Number(produto.preco).toFixed(2)}</strong>
                <button
                  className="btn-main small"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
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