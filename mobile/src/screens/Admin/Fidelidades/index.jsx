import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Fidelidades() {
  const [fidelidades, setFidelidades] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("fidelidade/");
        setFidelidades(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fidelidades</Text>

      <FlatList
        data={fidelidades}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Cliente: {item.cliente_username || item.cliente || "-"}</Text>
            <Text style={styles.info}>Pontos: {item.pontos}</Text>
          </View>
        )}
      />
    </View>
  );
}