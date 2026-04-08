import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/User/Home";
import Produtos from "../screens/User/Produtos";
import Carrinho from "../screens/User/Carrinho";
import Pedido from "../screens/User/Pedido";
import Fidelidade from "../screens/User/Fidelidade";
import Perfil from "../screens/User/Perfil";

const Stack = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen name="Pedido" component={Pedido} />
      <Stack.Screen name="Fidelidade" component={Fidelidade} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}