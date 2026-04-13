import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import styles from "./styles";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function carregarProdutos() {
      try {
        await AsyncStorage.removeItem("access");
        await AsyncStorage.removeItem("refresh");

        const response = await api.get("produtos/");
        const lista = Array.isArray(response.data)
          ? response.data
          : response.data?.results || [];

        console.log("RESPOSTA COMPLETA:", response.data);
        console.log("LISTA FINAL:", lista);
        console.log("TOTAL:", lista.length);

        setProdutos(lista);
      } catch (error) {
        console.log("ERRO AO CARREGAR PRODUTOS:");
        console.log(error?.response?.data || error.message || error);
        setProdutos([]);
      }
    }

    carregarProdutos();
  }, []);

  async function adicionarAoCarrinho(produto) {
    try {
      const carrinhoSalvo = await AsyncStorage.getItem("carrinho");
      const carrinhoAtual = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];

      const itemExistente = carrinhoAtual.find((item) => item.id === produto.id);

      if (itemExistente) {
        itemExistente.quantidade += 1;
      } else {
        carrinhoAtual.push({
          id: produto.id,
          nome: produto.nome,
          preco: Number(produto.preco),
          quantidade: 1,
        });
      }

      await AsyncStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
      Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar ao carrinho.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.secondaryButtonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.mainButtonText}>Ver carrinho</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginBottom: 10 }}>
        Quantidade de produtos: {produtos.length}
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name} numberOfLines={2}>
              {item.nome}
            </Text>

            <Text style={styles.info}>
              Preço: R$ {Number(item.preco).toFixed(2)}
            </Text>

            <Text style={styles.info} numberOfLines={1}>
              Categoria: {item.categoria_nome || "-"}
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
        }
      />
    </View>
  );
}