import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/ServiceCardStyle.js";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ServiceCard({
  id,
  user_name,
  service_charge,
  service_tittle,
  service_location,
  user_phone,
  store_name,
  store_img,
  service_description,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card_service}>
      <View style={styles.left_service}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OqRWN0Mim8QAX_oouO4&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAnBHYwOrJfkcsBOC52GvcT08HEA2ysNB4adXbOn5n-iw&oe=65619CF1",
          }}
        />
      </View>
      <View style={styles.right_service}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingBottom: 10,
            }}
          >
            {user_name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            style={{
              marginRight: 5,
            }}
            name="home-repair-service"
            size={16}
            color="#f4b400"
          />
          <Text>{service_tittle}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            style={{
              marginRight: 5,
            }}
            name="address-card"
            size={12}
            color="#f4b400"
          />
          <Text>{service_location}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo
            style={{
              marginRight: 5,
            }}
            name="price-tag"
            size={15}
            color="#f4b400"
          />
          <Text>{service_charge}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Hire", {
                id,
                user_name,
                service_charge,
                service_tittle,
                service_location,
                user_phone,
                store_name,
                store_img,
                service_description,
              });
            }}
            style={{
              backgroundColor: "#f4b400",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              View Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
