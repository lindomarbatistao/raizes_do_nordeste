import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 44) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5edd0",
    padding: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#3a2a1a",
    paddingTop: 70
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#6b5b4b",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  secondaryButtonText: {
    fontWeight: "700",
    color: "#3a2a1a",
    fontSize: 13,
  },

  mainButton: {
    flex: 1,
    backgroundColor: "#f2b705",
    borderWidth: 2,
    borderColor: "#6b5b4b",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  mainButtonText: {
    fontWeight: "700",
    color: "#3a2a1a",
    fontSize: 13,
  },

  listContent: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#6b5b4b",
    borderRadius: 12,
    padding: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#3a2a1a",
    marginBottom: 6,
    minHeight: 38,
  },

  info: {
    fontSize: 12,
    color: "#4f4f4f",
    marginBottom: 3,
  },

  addButton: {
    marginTop: 8,
    backgroundColor: "#d6aa26",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },

  addButtonText: {
    fontWeight: "700",
    color: "#3a2a1a",
    fontSize: 12,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});