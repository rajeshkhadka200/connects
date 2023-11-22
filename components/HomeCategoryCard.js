// creat react native expo component
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/HomeCategoryCardStyle.js";
import { useNavigation } from "@react-navigation/native";

export default function HomeCategoryCard({ id, cate_image, name }) {
  const navigation = useNavigation();
  const redirecttoCategory = () => {
    navigation.navigate("Service", {
      name: name,
    });
  };
  return (
    <TouchableOpacity onPress={() => redirecttoCategory()}>
      <View style={styles.container}>
        <Image
          source={{
            uri: cate_image,
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
