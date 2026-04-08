import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Home() {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Home
      </Text>

      <Text style={{ marginBottom: 20 }}>
        Bem-vindo, {user?.username}
      </Text>

      <TouchableOpacity
        onPress={signOut}
        style={{
          backgroundColor: "#8B0000",
          padding: 14,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}