import { Text, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./styles";

export default function Perfil() {
  const { user } = useAuth();

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
      </View>
    </View>
  );
}