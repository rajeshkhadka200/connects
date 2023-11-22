import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useCo } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/AuthStyle.js";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// firebase database
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContexStore } from "../context/Context.js";

export default function Login() {
  const { user, setUser } = React.useContext(ContexStore);
  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      const q = query(
        collection(db, "users"),
        where("auth_token", "==", token)
      );
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser([{ ...doc.data(), oprn_id: doc.id }]);
        });
      });
    } catch (error) {
      console.log("err while geting data", error);
    }
  };
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const handleLogin = async () => {
    try {
      if (!phone) {
        alert("please fill all the fields");
        return;
      }
      const q = query(collection(db, "users"), where("number", "==", phone));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert("User not found");
        return;
      }
      querySnapshot.forEach((doc) => {
        AsyncStorage.setItem("auth_token", doc.data().auth_token);
        alert("Login success");
        navigation.navigate("Home");
        fetchUser();
      });
    } catch (error) {
      console.log("err while geting data", error);
    }
  };
  return (
    <ScrollView>
      <View style={Globalstyle.androidSafeArea}>
        <View style={styles.main_ontainer}>
          <View style={styles.brand_con}>
            <Image
              style={{
                height: 160,
                width: 160,
                borderRadius: 500,
                alignSelf: "center",
              }}
              source={{
                uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.15752-9/377222134_729012925855738_7410746691822664284_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=mFc_3wYUxRsAX9eaxni&_nc_ht=scontent.fbhr4-1.fna&oh=03_AdRB9sGmjO_HGXgLb3x90ZWWbUI9FN0wBbTY5l8U3eVk3Q&oe=65834C19",
              }}
            />
            <Text style={styles.brand_name}>Login </Text>
          </View>
          <View style={styles.footer_con}>
            <View style={styles.searchBar}>
              <Entypo name="phone" size={24} color="grey" />

              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Phone number"
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              style={{
                flexDirection: "row",
                width: "90%",
                backgroundColor: "#f4b400",
                marginTop: 20,
                paddingHorizontal: 25,
                paddingVertical: 18,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
