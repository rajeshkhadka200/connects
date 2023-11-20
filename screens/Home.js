import { Text, SafeAreaView, View, Image, Icon, TextInput } from "react-native";
import React from "react";
import SafeViewAndroid from "../styles/Globalstyle.js";
import { styles } from "../styles/HomeStyle.js";
import { FontAwesome } from "@expo/vector-icons";
export default function Home() {
  return (
    // <View style={SafeViewAndroid.AndroidSafeArea}>
    <SafeAreaView style={{ paddingHorizontal: 13 }}>
      <View style={styles.header_con}>
        <Text style={styles.header_text}>Let's Discover</Text>
        <View style={styles.img_con}>
          <Image style={styles.img} source={require("../assets/avatar.png")} />
        </View>
      </View>

      {/* search */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={24} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Search the local business"
        />
      </View>
    </SafeAreaView>
    // </View>
  );
}
