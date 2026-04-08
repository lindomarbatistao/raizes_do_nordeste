import { AuthProvider } from "./src/contexts/AuthContext";
import Routes from "./src/navigation";
import Login from "./src/screens/Auth/Login";

export default function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}