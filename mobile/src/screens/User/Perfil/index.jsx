import { Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";
import styles from "./styles";

export default function Perfil() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.name}>
          {user?.first_name || user?.username || "Usuário"}
        </Text>

        <Text style={styles.info}>Usuário: {user?.username || "-"}</Text>
        <Text style={styles.info}>Email: {user?.email || "-"}</Text>
        <Text style={styles.info}>Telefone: {user?.telefone || "-"}</Text>
        <Text style={styles.info}>CPF: {user?.cpf || "-"}</Text>
        <Text style={styles.info}>Tipo: {user?.tipo || "-"}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#8B0000",
            padding: 12,
            borderRadius: 8,
            marginTop: 20,
          }}
          onPress={signOut}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}