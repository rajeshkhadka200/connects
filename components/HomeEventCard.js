// creat react native expo component
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { styles } from "../styles/HomeEventCardStyle.js";
import { useNavigation } from "@react-navigation/native";

export default function HomeEventCard({
  tittle,
  banner,
  profile,
  date,
  price,
}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", {
          tittle,
          banner,
          price,
        });
      }}
    >
      <View
        style={{
          width: 350,
          height: 210,
          marginRight: 20,
          marginVertical: 10,
        }}
      >
        <TouchableWithoutFeedback>
          <Image
            source={{
              uri: banner,
            }}
            style={styles.img}
          />
        </TouchableWithoutFeedback>
        <View style={styles.img_des}>
          <View style={styles.left}>
            <View style={styles.avatar_con}>
              <Image
                style={styles.avatar}
                source={{
                  uri: profile,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.dec_address}>{tittle}</Text>
                <Text style={{ ...styles.dec_address, marginLeft: 35 }}>
                  {date}
                </Text>
              </View>
              <Text style={styles.dec_price}>
                {price.toLowerCase() === "free" ? "" : "$"} {price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
