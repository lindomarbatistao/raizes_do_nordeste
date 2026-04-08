import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

export default function Routes() {
  const { signed, loading, isAdmin } = useAuth();

  if (loading) return null;

  return (
    <NavigationContainer>
      {!signed ? <AuthRoutes /> : isAdmin ? <AdminRoutes /> : <UserRoutes />}
    </NavigationContainer>
  );
}