import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main_ontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  brand_name: {
    textAlign: "center",
    // fontFamily: "600",
    // fontFamily: "888",
    fontSize: 35,
    marginBottom: 40,
    color: "#000",
    marginTop: 20,
  },
  btn: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  login_text: {
    marginLeft: 22,
    textAlign: "left",
    // fontFamily: "400",
    fontSize: 16,
  },
  terms: {
    marginTop: 10,

    // fontFamily: "400",
    alignSelf: "center",
  },
  contitions_link: {
    fontFamily: "400",
    color: "#3A6FD7",
    textAlign: "center",
  },
  btn_img: {
    height: 30,
    width: 30,
  },
  //   search
  searchBar: {
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: "rgba(128, 128, 128, 0.302)",
    paddingHorizontal: 25,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },

  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
});
