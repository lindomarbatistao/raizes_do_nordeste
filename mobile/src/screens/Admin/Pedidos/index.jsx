import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("pedidos/");
        setPedidos(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Pedido #{item.id}</Text>
            <Text style={styles.info}>Cliente: {item.cliente_username || "-"}</Text>
            <Text style={styles.info}>Loja: {item.loja_nome || "-"}</Text>
            <Text style={styles.info}>Status: {item.status}</Text>
            <Text style={styles.info}>Total: R$ {Number(item.valor_total).toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}