import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/User/Home";
import Produtos from "../screens/Produtos"
import Carrinho from "../screens/User/Carrinho";
import Pedidos from "../screens/Admin/Pedidos";
import Fidelidade from "../screens/User/Fidelidade";
import Perfil from "../screens/User/Perfil";

const Stack = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="UserHome"
        component={Home}
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ title: "Produtos" }}
      />

      <Stack.Screen
        name="UserCarrinho"
        component={Carrinho}
        options={{ title: "Carrinho" }}
      />

      <Stack.Screen
        name="UserPedido"
        component={Pedidos}
        options={{ title: "Pedido" }}
      />

      <Stack.Screen
        name="UserFidelidade"
        component={Fidelidade}
        options={{ title: "Fidelidade" }}
      />

      <Stack.Screen
        name="UserPerfil"
        component={Perfil}
        options={{ title: "Perfil" }}
      />
    </Stack.Navigator>
  );
}