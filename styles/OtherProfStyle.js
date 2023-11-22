import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
  },
  cover_bg: {
    backgroundColor: "#EFF2F7",
    width: "100%",
    height: 200,
  },
  pp: {
    marginTop: -100,
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: "#f4b400",
    borderRadius: 500,
  },
  camera_con: {
    backgroundColor: "#E2E5EE",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 7,
    bottom: 5,
  },
  profile_name: {
    // fontFamily: "600",
    fontSize: 23,
    marginTop: 15,
  },
  bottom_con: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 20,
    marginBottom: 60,
  },

  box: {
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  num: {
    // fontFamily: "600",
    fontSize: 22,
  },
  label: {
    // fontFamily: "500",

    fontSize: 13,
    color: "rgba(0, 0, 0, 0.79)",
  },
  btn_con: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // height: 37,
    // backgroundColor: "red",
  },
  btn1: {
    backgroundColor: "#f4b400",
    flex: 1 / 1.6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text1: {
    color: "#fff",
    // fontFamily: "500",
    lineHeight: 37,
  },
  btn2: {
    backgroundColor: "#E2E5EE",
    flex: 1 / 3,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text2: {
    // fontFamily: "500",
    lineHeight: 37,
  },
  lower_header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fav_logo: {
    fontFamily: "500",
    fontSize: 18,
  },
  love_icon: {
    marginHorizontal: 5,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#757575",
    borderRadius: 5,
  },
  desc_container: {
    marginTop: 20,
  },
  desc_head: {
    padding: 10,
    backgroundColor: "#E2E5EE",
    width: "100%",
    borderRadius: 10,
  },
  abt_con: {
    padding: 10,
    backgroundColor: "#E2E5EE",
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
  },
  store_img: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
