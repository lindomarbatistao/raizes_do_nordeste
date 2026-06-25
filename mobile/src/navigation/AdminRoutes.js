import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Admin/Dashboard";
import Usuarios from "../screens/Admin/Usuarios";
import Categorias from "../screens/Admin/Categorias";
import Produtos from "../screens/Produtos";
import Estoque from "../screens/Admin/Estoque"
import Pedidos from "../screens/Admin/Pedidos";
import Pagamentos from "../screens/Admin/Pagamentos";
import Fidelidades from "../screens/Admin/Fidelidades";
import Perfil from "../screens/User/Perfil";
console.log("Dashboard:", Dashboard);
console.log("Usuarios:", Usuarios);
console.log("Categorias:", Categorias);
console.log("Produtos:", Produtos);
console.log("Estoque:", Estoque);
console.log("Pedidos:", Pedidos);
console.log("Pagamentos:", Pagamentos);
console.log("Fidelidades:", Fidelidades);
console.log("Perfil:", Perfil);

const Stack = createNativeStackNavigator();

export default function AdminRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="AdminDashboard"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AdminDashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />

      <Stack.Screen
        name="AdminUsuarios"
        component={Usuarios}
        options={{ title: "Usuários" }}
      />

      <Stack.Screen
        name="AdminCategorias"
        component={Categorias}
        options={{ title: "Categorias" }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ title: "Produtos" }}
      />

      <Stack.Screen
        name="AdminEstoque"
        component={Estoque}
        options={{ title: "Estoque" }}
      />

      <Stack.Screen
        name="AdminPedidos"
        component={Pedidos}
        options={{ title: "Pedidos" }}
      />

      <Stack.Screen
        name="AdminPagamentos"
        component={Pagamentos}
        options={{ title: "Pagamentos" }}
      />

      <Stack.Screen
        name="AdminFidelidades"
        component={Fidelidades}
        options={{ title: "Fidelidades" }}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Perfil" }}
      />
    </Stack.Navigator>
  );
}