import { useCallback, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../services/api";
import styles from "./styles";

export default function Carrinho({ navigation }) {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function carregarCarrinho() {
        const dados = await AsyncStorage.getItem("carrinho");
        const lista = dados ? JSON.parse(dados) : [];

        console.log("CARRINHO CARREGADO:", lista);

        setItens(lista);
      }

      carregarCarrinho();
    }, [])
  );

  async function salvarCarrinho(novoCarrinho) {
    setItens(novoCarrinho);
    await AsyncStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function aumentar(id) {
    const novo = itens.map((item) =>
      item.id === id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    );

    salvarCarrinho(novo);
  }

  function diminuir(id) {
    const novo = itens
      .map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0);

    salvarCarrinho(novo);
  }

  function remover(id) {
    const novo = itens.filter((item) => item.id !== id);
    salvarCarrinho(novo);
  }

  const total = useMemo(() => {
    return itens.reduce(
      (acc, item) => acc + Number(item.preco) * item.quantidade,
      0
    );
  }, [itens]);

  async function finalizar() {
    if (loading) return;

    if (itens.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione produtos antes de finalizar.");
      return;
    }

    const token = await AsyncStorage.getItem("access");

    if (!token) {
      Alert.alert(
        "Login necessário",
        "Você precisa fazer login para finalizar o pedido.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Fazer login",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        loja: 1,
        canal: "MOBILE",
        itens: itens.map((item) => ({
          produto: item.id,
          quantidade: item.quantidade,
        })),
      };

      await api.post("pedidos/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await AsyncStorage.removeItem("carrinho");
      setItens([]);

      Alert.alert("Sucesso", "Pedido enviado com sucesso.");

      navigation.navigate("Pedido");
    } catch (error) {
      console.log(
        "ERRO AO FINALIZAR:",
        error?.response?.data || error.message
      );

      if (error?.response?.status === 401) {
        Alert.alert(
          "Login necessário",
          "Sua sessão expirou. Faça login novamente.",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Login"),
            },
          ]
        );
        return;
      }

      Alert.alert("Erro", "Não foi possível finalizar o pedido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={styles.info}>Seu carrinho está vazio.</Text>
        }
        ListFooterComponent={
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Resumo</Text>

            <Text style={styles.summaryText}>
              Total: R$ {total.toFixed(2)}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                (loading || itens.length === 0) && { opacity: 0.6 },
              ]}
              onPress={finalizar}
              disabled={loading || itens.length === 0}
            >
              <Text style={styles.buttonText}>
                {loading ? "Finalizando..." : "Finalizar pedido"}
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>

            <Text style={styles.info}>
              R$ {Number(item.preco).toFixed(2)}
            </Text>

            <View style={styles.controls}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => diminuir(item.id)}
              >
                <Text style={styles.qtyButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>{item.quantidade}</Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => aumentar(item.id)}
              >
                <Text style={styles.qtyButtonText}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => remover(item.id)}>
                <Text style={styles.info}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}