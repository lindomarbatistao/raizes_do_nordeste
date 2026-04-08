import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import api from "../../../services/api";
import styles from "./styles";

export default function Produtos({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("produtos/");
        setProdutos(response.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    carregarProdutos();
  }, []);

  function adicionarAoCarrinho(produto) {
    Alert.alert("Carrinho", `${produto.nome} adicionado ao carrinho.`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>Produtos</Text>

        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.smallButtonText}>Carrinho</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.description}>
              {item.descricao || "Produto disponível no cardápio."}
            </Text>
            <Text style={styles.price}>
              R$ {Number(item.preco).toFixed(2)}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}