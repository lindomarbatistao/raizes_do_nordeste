import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "../screens/Produtos";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Produtos" component={Produtos} />
    </Stack.Navigator>
  );
}