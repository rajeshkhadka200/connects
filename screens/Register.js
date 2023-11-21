import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/AuthStyle.js";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const googleAuth = () => {};
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
              <Entypo name="phone" size={24} color="grey" />

              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Phone number"
              />
            </View>
            <View style={styles.searchBar}>
              <FontAwesome name="lock" size={24} color="grey" />
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Four digit pin"
              />
            </View>

            <Pressable
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
            </Pressable>

            {/* <View style={styles.terms}>
              <Text>By continuing you aggree our</Text>
              <Text Text style={styles.contitions_link}>
                Terms and condition
              </Text>
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
