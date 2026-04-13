import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

export default function Routes() {
  const { user } = useAuth();

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