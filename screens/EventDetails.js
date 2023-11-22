import React, { useContext, useState, Linking } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { styles } from "../styles/EventDetailsStyle.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const EventDetails = ({ route }) => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Pressable onPress={() => navigation.goBack()} style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>

        <Image
          style={{ width: "100%", height: 250 }}
          source={{
            uri: route.params.banner,
          }}
        ></Image>
        <View style={styles.lower_wrapper}>
          {/* description */}
          <View style={styles.header_con}>
            <View style={styles.desc_header}>
              <Text style={styles.header_text}>{route.params.tittle}</Text>
              <Text style={styles.header_status}>
                {route.params.price.toLowerCase() === "free" ? "" : "$"}{" "}
                {route.params.price}
              </Text>
            </View>

            <Text style={styles.desc_para}>
              Selfless volunteers unite, needles gently pierce skin, life's
              crimson essence flows into bags, fostering hope, saving lives.
            </Text>
            {/* render map here */}
            <View style={styles.btn_wrapper}>
              <Pressable
                onPress={() => {
                  Alert.alert(
                    "Sorry!",
                    "This fearure is currently unavailable."
                  );
                }}
                style={styles.btn_apply}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "500",
                  }}
                >
                  Book your Presence
                </Text>
              </Pressable>
              <TouchableOpacity style={styles.btn_left}>
                <Entypo name="phone" size={24} color="#f4b400" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default EventDetails;
