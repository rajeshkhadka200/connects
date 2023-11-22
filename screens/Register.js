import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/AuthStyle.js";
import { Entypo } from "@expo/vector-icons";
import { ContexStore } from "../context/Context";
import { FontAwesome5 } from "@expo/vector-icons";
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

export default function Register() {
  // context usecase
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

  // handle registration
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleRegister = async () => {
    try {
      if (!user) {
        alert("please fill all the fields");
        return;
      }
      // check if user already exists
      let existing = [];
      const q = query(collection(db, "users"), where("phone", "==", phone));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        existing.push(doc.data());
      });
      if (existing.length > 0) {
        try {
          await AsyncStorage.setItem("auth_token", phone);
          alert("You are already registred, Please Login");
          navigation.navigate("Login");
          return;
          // manage Login
          fetchUser();
        } catch (err) {
          console.log("err while register  ", err);
        }
      }

      // add user data to databse
      await addDoc(collection(db, "users"), {
        auth_token: phone,
        name: name,
        number: phone,
      });
      try {
        await AsyncStorage.setItem("auth_token", phone);
        // clear all feilds
        setPhone("");
        setName("");
        fetchUser();
        alert("You are successfully registred");
        navigation.navigate("Home");
      } catch (error) {
        console.log("err while seting reg", err);
      }
    } catch (error) {
      console.log("mann err  ", err);
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
            <Text style={styles.brand_name}>Create Account </Text>
          </View>
          <View style={styles.footer_con}>
            <View style={styles.searchBar}>
              <FontAwesome5 name="user-alt" size={22} color="grey" />
              <TextInput
                style={styles.input}
                placeholder="Full name"
                value={name}
                onChangeText={(name) => setName(name)}
              />
            </View>
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
              onPress={handleRegister}
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
                <Text style={{ fontSize: 16 }}>Register</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.terms}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text>Have an account ? Sign in</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
