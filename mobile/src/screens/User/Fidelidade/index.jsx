import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Fidelidade() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("fidelidade/");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setDados(response.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  const pontos = dados?.pontos || 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fidelidade</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Seus pontos</Text>
        <Text style={styles.points}>{pontos}</Text>
        <Text style={styles.info}>
          Continue comprando para acumular mais vantagens.
        </Text>
      </View>
    </View>
  );
}