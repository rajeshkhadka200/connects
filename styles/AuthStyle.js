import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main_ontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  brand_name: {
    textAlign: "center",
    // fontFamily: "600",
    // fontFamily: "888",
    fontSize: 40,
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
    marginTop: 20,
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
});
