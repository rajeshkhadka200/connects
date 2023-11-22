import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/OtherProfStyle.js";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function OthersProfile({ route }) {
  const navigation = useNavigation();

  console.log(route?.params?.store_img);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.cover_bg}></View>
        <View>
          <Image
            style={styles.pp}
            source={{
              uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.15752-9/370151115_1000485177717616_6978694532350152519_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=2-RxQJ8p6K8AX9AoJMy&_nc_ht=scontent.fbhr4-1.fna&oh=03_AdSviCk9-tmgbjgzCNJbo55KoaEPrPLtf5eaK7Q-tTcgUw&oe=6585D9E4",
            }}
          />
          <Pressable style={styles.camera_con}>
            <Entypo name="camera" size={20} color="black" />
          </Pressable>
        </View>
        <Text style={styles.profile_name}>{route?.params?.user_name}</Text>
      </View>
      <View style={styles.bottom_con}>
        <View style={styles.btn_con}>
          <Pressable
            style={styles.btn1}
            onPress={() => navigation.navigate("Create")}
          >
            <FontAwesome5
              name="pen"
              size={16}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text1}>Chat with me </Text>
          </Pressable>
          <Pressable style={styles.btn2}>
            <Text style={styles.text2}>Call</Text>

            <Ionicons
              style={{ marginLeft: 5 }}
              size={18}
              color="#f4b400"
              name="call-outline"
            />
          </Pressable>
        </View>
        <View style={styles.desc_container}>
          <View style={styles.desc_head}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                style={{
                  marginRight: 10,
                }}
                name="home-repair-service"
                size={16}
                color="#f4b400"
              />
              <Text>{route?.params?.service_tittle}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                style={{
                  marginRight: 10,
                }}
                name="address-card"
                size={12}
                color="#f4b400"
              />
              <Text>{route?.params?.service_location}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo
                style={{
                  marginRight: 10,
                }}
                name="price-tag"
                size={15}
                color="#f4b400"
              />
              <Text>{route?.params?.service_charge}</Text>
            </View>
          </View>
        </View>
        <View style={styles.abt_con}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            About Me
          </Text>
          <Text
            style={{
              marginTop: 5,
            }}
          >
            {route?.params?.service_description}
          </Text>
        </View>
        {route?.params?.store_img ? (
          <View
            style={{
              marginTop: 10,
              // backgroundColor: "#E2E5EE",
              padding: 10,
              paddingBottom: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Physical Store
            </Text>
            <Image
              style={styles.store_img}
              source={{
                uri: route?.params?.store_img,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  borderRadius: 10,
                  marginTop: 20,
                  TextAlign: "center",
                  padding: 15,
                  flex: 1,
                  backgroundColor: "#f4b400",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Visit Store
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
}
