import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header_con: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  header_text: {
    // font milauna xa
    fontSize: 25,
    fontWeight: "bold",
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  //   search
  searchBar: {
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "rgba(128, 128, 128, 0.302)",
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  // category heading style
  cate_con: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  cate_heading: {
    fontSize: 18,
  },
  cate_see_all: {
    fontSize: 18,
    color: "#f4b400",
  },
});
