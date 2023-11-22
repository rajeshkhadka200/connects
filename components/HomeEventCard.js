// creat react native expo component
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "../styles/HomeEventCardStyle.js";

export default function HomeEventCard({
  tittle,
  banner,
  profile,
  date,
  location,
  price,
}) {
  return (
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
            <Text style={styles.dec_address}>{tittle}</Text>
            <Text style={styles.dec_price}>$ {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
