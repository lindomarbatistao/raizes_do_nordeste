import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useAuth } from "../../../contexts/AuthContext";
import styles from "./styles";

export default function Login({ navigation }) {
  const { signIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (loading) return;

    if (!username.trim() || !password.trim()) {
      Alert.alert("Atenção", "Preencha usuário e senha.");
      return;
    }

    try {
      setLoading(true);

      const usuarioLogado = await signIn(username.trim(), password);

    } catch (error) {
      console.log("ERRO COMPLETO:", error?.response?.data || error.message);
      Alert.alert("Erro", "Usuário ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Raízes do Nordeste</Text>
      <Text style={styles.subtitle}>Entrar no aplicativo</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        editable={!loading}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
      />

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate("Register")}
        disabled={loading}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#3a2a1a",
            fontWeight: "700",
          }}
        >
          Não tenho cadastro. Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}