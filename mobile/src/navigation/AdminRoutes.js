import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Admin/Dashboard";
import Usuarios from "../screens/Admin/Usuarios";
import Categorias from "../screens/Admin/Categorias";
import Produtos from "../screens/Admin/Produtos";
import Estoque from "../screens/Admin/Estoque";
import Pedidos from "../screens/Admin/Pedidos";
import Pagamentos from "../screens/Admin/Pagamentos";
import Fidelidades from "../screens/Admin/Fidelidades";

const Stack = createNativeStackNavigator();

export default function AdminRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Usuarios" component={Usuarios} />
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="ProdutosAdmin" component={Produtos} options={{ title: "Produtos" }} />
      <Stack.Screen name="Estoque" component={Estoque} />
      <Stack.Screen name="PedidosAdmin" component={Pedidos} options={{ title: "Pedidos" }} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} />
      <Stack.Screen name="Fidelidades" component={Fidelidades} />
    </Stack.Navigator>
  );
}