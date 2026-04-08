import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f4",
    padding: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },
  smallButton: {
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff7cf",
  },
  smallButtonText: {
    fontWeight: "700",
    color: "#111",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },
  button: {
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 12,
    backgroundColor: "#e8d04f",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#111",
  },
});