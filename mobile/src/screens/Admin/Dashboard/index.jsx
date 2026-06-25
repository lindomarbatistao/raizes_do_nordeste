import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";
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

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminUsuarios")}>
          <Text style={styles.menuButtonText}>Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminCategorias")}>
          <Text style={styles.menuButtonText}>Categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Produtos")}>
          <Text style={styles.menuButtonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminEstoque")}>
          <Text style={styles.menuButtonText}>Estoque</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminPedidos")}>
          <Text style={styles.menuButtonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminPagamentos")}>
          <Text style={styles.menuButtonText}>Pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("AdminFidelidades")}>
          <Text style={styles.menuButtonText}>Fidelidades</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}