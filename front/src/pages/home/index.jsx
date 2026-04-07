import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const response = await api.get("usuarios/me/");
        setUsuario(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregarUsuario();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {usuario && <p>Bem-vindo, {usuario.username}</p>}
    </div>
  );
}