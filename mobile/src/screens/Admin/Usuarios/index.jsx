import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("usuarios/");
        setUsuarios(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.first_name || item.username}</Text>
            <Text style={styles.info}>Usuário: {item.username}</Text>
            <Text style={styles.info}>Email: {item.email || "-"}</Text>
            <Text style={styles.info}>Tipo: {item.tipo || "-"}</Text>
            <Text style={styles.info}>Ativo: {item.is_active ? "Sim" : "Não"}</Text>
          </View>
        )}
      />
    </View>
  );
}