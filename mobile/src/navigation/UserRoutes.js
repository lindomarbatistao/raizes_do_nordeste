import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/User/Home";
import Produtos from "../screens/Produtos";
import Carrinho from "../screens/User/Carrinho";
import Pedido from "../screens/Admin/Pedidos";
import Fidelidade from "../screens/User/Fidelidade";
import Perfil from "../screens/User/Perfil";

const Stack = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ title: "Produtos" }}
      />

      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ title: "Carrinho" }}
      />

      <Stack.Screen
        name="Pedido"
        component={Pedido}
        options={{ title: "Pedidos" }}
      />

      <Stack.Screen
        name="Fidelidade"
        component={Fidelidade}
        options={{ title: "Fidelidade" }}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Perfil" }}
      />
    </Stack.Navigator>
  );
}