import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f7f7f4",
    padding: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#fff7cf",
    borderWidth: 3,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  badgeText: {
    fontWeight: "700",
    color: "#111",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#111",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },
  menuButton: {
    borderWidth: 3,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  menuButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  logoutButton: {
    borderWidth: 3,
    borderColor: "#111",
    borderRadius: 18,
    paddingVertical: 14,
    backgroundColor: "#fff1f1",
  },
  logoutButtonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#111",
  },
});