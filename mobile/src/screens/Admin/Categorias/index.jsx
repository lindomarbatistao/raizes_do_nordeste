import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("categorias/");
        setCategorias(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={categorias}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>ID: {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
}