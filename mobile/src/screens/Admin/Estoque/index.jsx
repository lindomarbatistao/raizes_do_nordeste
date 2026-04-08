import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Estoque() {
  const [estoque, setEstoque] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("estoque-loja/");
        setEstoque(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>

      <FlatList
        data={estoque}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.produto_nome || item.produto || "Produto"}</Text>
            <Text style={styles.info}>Loja: {item.loja_nome || item.loja || "-"}</Text>
            <Text style={styles.info}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.info}>Disponível: {item.disponivel ? "Sim" : "Não"}</Text>
          </View>
        )}
      />
    </View>
  );
}