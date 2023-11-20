// creat react native expo component
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/HomeCategoryCardStyle.js";

export default function HomeCategoryCard({ id, image, name }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}