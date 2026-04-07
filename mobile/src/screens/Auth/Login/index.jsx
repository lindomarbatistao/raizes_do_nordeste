import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./styles";

export default function Login() {
  const { signIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await signIn(username, password);
    } catch (error) {
      console.log(error?.response?.data || error);
      Alert.alert("Erro", "Usuário ou senha inválidos");
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
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}