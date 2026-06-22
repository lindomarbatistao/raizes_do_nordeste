import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../services/api";
import styles from "./styles";

export default function Pedido() {
  const [pedidos, setPedidos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function carregarPedidos() {
        try {
          const token = await AsyncStorage.getItem("access");

          console.log("TOKEN PEDIDOS:", token);

          if (!token) {
            console.log("SEM TOKEN PARA BUSCAR PEDIDOS");
            setPedidos([]);
            return;
          }

          const response = await api.get("pedidos/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const lista = Array.isArray(response.data)
            ? response.data
            : response.data?.results || [];

          console.log("PEDIDOS CARREGADOS:", lista);

          setPedidos(lista);
        } catch (error) {
          console.log(
            "ERRO AO CARREGAR PEDIDOS:",
            error?.response?.data || error.message
          );
          setPedidos([]);
        }
      }

      carregarPedidos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus pedidos</Text>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={styles.info}>Nenhum pedido encontrado.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Pedido #{item.id}</Text>
            <Text style={styles.info}>Loja: {item.loja_nome || "-"}</Text>
            <Text style={styles.info}>Status: {item.status}</Text>
            <Text style={styles.info}>
              Total: R$ {Number(item.valor_total).toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}