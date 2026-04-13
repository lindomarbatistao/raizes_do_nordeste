import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import { View, ActivityIndicator } from "react-native";

export default function Routes() {
  const { user, loadingAuth } = useAuth();

  if (loadingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#d4a017" />
      </View>
    );
  }

  console.log("PublicRoutes:", PublicRoutes);
  console.log("AdminRoutes:", AdminRoutes);
  console.log("UserRoutes:", UserRoutes);
  return (
    <NavigationContainer>
      {!user ? (
        <PublicRoutes />
      ) : user.is_staff || user.is_superuser ? (
        <AdminRoutes />
      ) : (
        <UserRoutes />
      )}
    </NavigationContainer>
  );
}