import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/OtherProfStyle.js";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
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
              uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OqRWN0Mim8QAX_oouO4&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAnBHYwOrJfkcsBOC52GvcT08HEA2ysNB4adXbOn5n-iw&oe=65619CF1",
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

            <Entypo
              style={{ marginLeft: 5 }}
              name="chat"
              size={18}
              color="#f4b400"
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
