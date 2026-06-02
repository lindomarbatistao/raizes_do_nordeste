import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../components/AdminLayout";
import "./styles.css";

export default function AdminCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("categorias/");
        setCategorias(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    carregar();
  }, []);

  return (
    <div className="admin-categories-page">
      <AdminLayout
        title="Categorias"
        subtitle="Visualize as categorias de produtos cadastradas."
      >
        <div className="admin-grid">
          <div className="admin-table-card">
            <h3>Lista de categorias</h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                  </tr>
                </thead>

                <tbody>
                  {categorias.length > 0 ? (
                    categorias.map((categoria) => (
                      <tr key={categoria.id}>
                        <td>{categoria.id}</td>
                        <td>{categoria.nome}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="admin-empty">
                        Nenhuma categoria encontrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
      <footer className="footer">
        <p><strong>Desenvolvido por:</strong> Lindomar José Batistão</p>
        <p><strong>RU:</strong> 4427651</p>
        <p>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - UNINTER</p>
      </footer>
    </div>
  );
}