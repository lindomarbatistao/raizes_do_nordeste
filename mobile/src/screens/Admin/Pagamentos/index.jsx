import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Pagamentos() {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("pagamentos/");
        setPagamentos(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamentos</Text>

      <FlatList
        data={pagamentos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Pagamento #{item.id}</Text>
            <Text style={styles.info}>Pedido: {item.pedido}</Text>
            <Text style={styles.info}>Método: {item.metodo}</Text>
            <Text style={styles.info}>Status: {item.status}</Text>
            <Text style={styles.info}>Valor: R$ {Number(item.valor).toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}