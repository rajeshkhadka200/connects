// creat react native expo component
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "../styles/HomeEventCardStyle.js";

export default function HomeEventCard() {
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
            uri: "https://gighub-563e.kxcdn.com/mediafiles/cache/94/a9/94a9ad1bd1bd9515c4a9630ae81b1e8f.webp",
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
                uri: "https://gighub-563e.kxcdn.com/mediafiles/cache/94/a9/94a9ad1bd1bd9515c4a9630ae81b1e8f.webp",
              }}
            />
          </View>
          <View>
            <Text style={styles.dec_address}> Butwal</Text>
            <Text style={styles.dec_price}>Rs.5000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
