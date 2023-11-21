import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    // backgroundColor: "#ffffff94",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
