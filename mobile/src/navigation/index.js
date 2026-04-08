import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

export default function Routes() {
  const { signed, loading, user } = useAuth();

  if (loading) return null;

  const isAdmin = user?.is_staff || user?.is_superuser;

  return (
    <NavigationContainer>
      {!signed ? <AuthRoutes /> : isAdmin ? <AdminRoutes /> : <UserRoutes />}
    </NavigationContainer>
  );
}