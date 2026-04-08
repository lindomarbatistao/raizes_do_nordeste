import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f4",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginBottom: 18,
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
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    color: "#666",
    marginBottom: 12,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  qtyButton: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7cf",
  },
  qtyButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  summaryCard: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 22,
    padding: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 14,
  },
  button: {
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 14,
    backgroundColor: "#e8d04f",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#111",
    fontSize: 16,
  },
});