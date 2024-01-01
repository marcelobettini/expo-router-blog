import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
  },

  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "600",
    color: "rebeccapurple",
    marginVertical: 10,
  },
  articleTitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  author: {
    textAlign: "right",
  },
  authorDetailsContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "grey",
    marginBottom: 18,
  },
  authorDetailsText: {
    fontSize: 18,
  },
  commentContainer: {
    marginVertical: 20,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  commentBody: {
    fontStyle: "italic",
  },
  commentEmail: {
    fontStyle: "italic",
    textAlign: "right",
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  footer: {
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },
});
