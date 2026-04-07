import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

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

  return (
    <div>
      <h1>Produtos</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}