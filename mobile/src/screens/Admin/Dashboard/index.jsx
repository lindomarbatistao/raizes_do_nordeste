import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./styles";

export default function Dashboard({ navigation }) {
  const { signOut, user } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Painel Administrativo</Text>
      </View>

      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>
        Bem-vindo, {user?.first_name || user?.username || "Administrador"}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Acesso rápido</Text>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Usuarios")}>
          <Text style={styles.menuButtonText}>Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Categorias")}>
          <Text style={styles.menuButtonText}>Categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("ProdutosAdmin")}>
          <Text style={styles.menuButtonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Estoque")}>
          <Text style={styles.menuButtonText}>Estoque</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("PedidosAdmin")}>
          <Text style={styles.menuButtonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Pagamentos")}>
          <Text style={styles.menuButtonText}>Pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Fidelidades")}>
          <Text style={styles.menuButtonText}>Fidelidades</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}