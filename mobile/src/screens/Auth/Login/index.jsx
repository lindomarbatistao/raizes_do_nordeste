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

export default function Login() {
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

      await signIn(username.trim(), password);

      console.log("Login realizado com sucesso");
    } catch (error) {
      console.log("ERRO COMPLETO:", error);
      console.log("RESPONSE DATA:", error?.response?.data);
      console.log("RESPONSE STATUS:", error?.response?.status);
      console.log("MESSAGE:", error?.message);

      let mensagemErro = "Usuário ou senha inválidos";

      if (error?.response?.data) {
        mensagemErro = JSON.stringify(error.response.data);
      } else if (error?.message) {
        mensagemErro = error.message;
      }

      Alert.alert("Erro", mensagemErro);
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
    </View>
  );
}