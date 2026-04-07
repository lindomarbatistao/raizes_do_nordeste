import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [lojas, setLojas] = useState([]);
  const [lojaSelecionada, setLojaSelecionada] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(dados);

    async function carregarLojas() {
      try {
        const response = await api.get("lojas/");
        setLojas(response.data);
        if (response.data.length > 0) {
          setLojaSelecionada(String(response.data[0].id));
        }
      } catch (error) {
        console.error(error);
      }
    }

    carregarLojas();
  }, []);

  function atualizarCarrinho(novoCarrinho) {
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function aumentarQuantidade(id) {
    const novo = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    atualizarCarrinho(novo);
  }

  function diminuirQuantidade(id) {
    const novo = carrinho
      .map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter((item) => item.quantidade > 0);

    atualizarCarrinho(novo);
  }

  function removerItem(id) {
    const novo = carrinho.filter((item) => item.id !== id);
    atualizarCarrinho(novo);
  }

  async function finalizarPedido() {
    try {
      const payload = {
        loja: Number(lojaSelecionada),
        canal: "WEB",
        itens: carrinho.map((item) => ({
          produto: item.id,
          quantidade: item.quantidade,
        })),
      };

      console.log("Payload enviado:", payload);

      await api.post("pedidos/", payload);

      localStorage.removeItem("carrinho");
      setCarrinho([]);
      alert("Pedido realizado com sucesso!");
      navigate("/pedidos");
    } catch (error) {
      console.error("Erro completo:", error);
      console.error("Resposta do backend:", error.response?.data);
      alert(
        typeof error.response?.data === "string"
          ? error.response.data
          : JSON.stringify(error.response?.data || "Erro ao finalizar pedido.")
      );
    }
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <span className="cart-badge">Carrinho</span>
          <h1 className="cart-title">Revise seu pedido</h1>
          <p className="cart-subtitle">
            Ajuste quantidades, escolha a loja e finalize quando estiver tudo certo.
          </p>
        </div>

        <div className="cart-actions">
          <button className="btn-outline" onClick={() => navigate("/produtos")}>
            Voltar aos produtos
          </button>
        </div>

        <div className="cart-layout">
          <div className="cart-list">
            {carrinho.length > 0 ? (
              carrinho.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <h3>{item.nome}</h3>
                    <p>R$ {Number(item.preco).toFixed(2)}</p>
                  </div>

                  <div className="cart-controls">
                    <button className="qty-btn" onClick={() => diminuirQuantidade(item.id)}>
                      -
                    </button>
                    <span>{item.quantidade}</span>
                    <button className="qty-btn" onClick={() => aumentarQuantidade(item.id)}>
                      +
                    </button>
                    <button className="remove-btn" onClick={() => removerItem(item.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="cart-item">
                <p>Seu carrinho está vazio.</p>
              </div>
            )}
          </div>

          <div className="cart-summary">
            <h3>Resumo</h3>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "700" }}>
                Loja
              </label>
              <select
                className="store-select"
                value={lojaSelecionada}
                onChange={(e) => setLojaSelecionada(e.target.value)}
              >
                {lojas.map((loja) => (
                  <option key={loja.id} value={loja.id}>
                    {loja.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="summary-row">
              <span>Total</span>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>

            <button
              className="btn-main full"
              onClick={finalizarPedido}
              disabled={carrinho.length === 0 || !lojaSelecionada}
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}