import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtos from "../screens/Produtos/index.jsx";
import Carrinho from "../screens/User/Carrinho/index.jsx";
import Login from "../screens/Auth/Login/index.jsx";
import Register from "../screens/Auth/Register/index.jsx";
import Pedido from "../screens/Admin/Pedidos/index.jsx";

const Stack = createNativeStackNavigator();

console.log("Produtos:", Produtos);
console.log("Carrinho:", Carrinho);
console.log("Login:", Login);
console.log("Register:", Register);

export default function PublicRoutes() {
  return (
    <Stack.Navigator initialRouteName="Produtos">
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ title: "Carrinho" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Cadastro" }}
      />
      <Stack.Screen
        name="Pedido"
        component={Pedido}
        options={{ title: "Pedido" }}
      />
    </Stack.Navigator>
  );
}