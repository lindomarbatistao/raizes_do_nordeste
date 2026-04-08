import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./styles";

export default function Home({ navigation }) {
  const { user, signOut } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Portal do Cliente</Text>
      </View>

      <Text style={styles.title}>
        Bem-vindo, {user?.first_name || user?.username || "Cliente"}
      </Text>

      <Text style={styles.subtitle}>
        Explore produtos, acompanhe pedidos e consulte sua fidelidade.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Acesso rápido</Text>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Produtos")}
        >
          <Text style={styles.menuButtonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.menuButtonText}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Pedido")}
        >
          <Text style={styles.menuButtonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Fidelidade")}
        >
          <Text style={styles.menuButtonText}>Fidelidade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.menuButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}