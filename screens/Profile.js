import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/ProfileStyle.js";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Transaction() {
  const navigation = useNavigation();
  const { user, setUser } = React.useContext(ContexStore);
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      setUser([]);
      navigation.navigate("Home");
    } catch (error) {
      console.log("err in logout", error);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.cover_bg}></View>
        <View>
          <Image
            style={styles.pp}
            source={{
              uri: user[0]?.user_profile,
            }}
          />
          <Pressable style={styles.camera_con}>
            <Entypo name="camera" size={20} color="black" />
          </Pressable>
        </View>
        <Text style={styles.profile_name}>{user[0]?.name}</Text>
      </View>
      <View style={styles.bottom_con}>
        <View style={styles.btn_con}>
          <Pressable
            style={styles.btn1}
            onPress={() => navigation.navigate("Create")}
          >
            <FontAwesome5
              name="pen"
              size={16}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text1}>Add</Text>
          </Pressable>
          <Pressable onPress={Logout} style={styles.btn2}>
            <Text style={styles.text2}>LogOut</Text>
            <MaterialIcons
              name="logout"
              size={18}
              color="#000"
              style={{ marginLeft: 5 }}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
