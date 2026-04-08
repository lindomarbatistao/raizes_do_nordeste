import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("produtos/");
        setProdutos(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>Preço: R$ {Number(item.preco).toFixed(2)}</Text>
            <Text style={styles.info}>Ativo: {item.ativo ? "Sim" : "Não"}</Text>
            <Text style={styles.info}>Categoria: {item.categoria_nome || item.categoria || "-"}</Text>
          </View>
        )}
      />
    </View>
  );
}