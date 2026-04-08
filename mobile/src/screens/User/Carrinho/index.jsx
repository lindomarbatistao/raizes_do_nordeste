import { useMemo, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Carrinho({ navigation }) {
  const [itens, setItens] = useState([
    { id: 1, nome: "Cuscuz Recheado", preco: 18.9, quantidade: 1 },
    { id: 2, nome: "Suco de Caju", preco: 8.5, quantidade: 2 },
  ]);

  function aumentar(id) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function diminuir(id) {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  const total = useMemo(() => {
    return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }, [itens]);

  function finalizar() {
    Alert.alert("Pedido", "Pedido enviado com sucesso.");
    navigation.navigate("Pedido");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Resumo</Text>
            <Text style={styles.summaryText}>Total: R$ {total.toFixed(2)}</Text>

            <TouchableOpacity style={styles.button} onPress={finalizar}>
              <Text style={styles.buttonText}>Finalizar pedido</Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>R$ {item.preco.toFixed(2)}</Text>

            <View style={styles.controls}>
              <TouchableOpacity style={styles.qtyButton} onPress={() => diminuir(item.id)}>
                <Text style={styles.qtyButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>{item.quantidade}</Text>

              <TouchableOpacity style={styles.qtyButton} onPress={() => aumentar(item.id)}>
                <Text style={styles.qtyButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}