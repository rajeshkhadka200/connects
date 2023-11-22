import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/FeedStyle.js";
import { FontAwesome } from "@expo/vector-icons";
export default function Portfolio() {
  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <View style={{ ...styles.feed_header }}>
        <View style={{ ...styles.left_photo }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OqRWN0Mim8QAX_oouO4&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAnBHYwOrJfkcsBOC52GvcT08HEA2ysNB4adXbOn5n-iw&oe=65619CF1",
            }}
          />
        </View>
        <View
          style={{
            // backgroundColor: "blue",
            flex: 1,
          }}
        >
          <TextInput
            placeholder="What's on your mind?"
            multiline={true}
            style={{
              fontSize: 18,
              // height: 100,
            }}
          />
        </View>
      </View>
      <View style={styles.header_button_sec}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 60,
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 5,
              padding: 10,
              backgroundColor: "#e4e6eb",
              borderRadius: 20,
            }}
          >
            <Feather name="image" size={13} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              padding: 10,
              backgroundColor: "#e4e6eb",
              borderRadius: 20,
            }}
          >
            <FontAwesome name="smile-o" size={13} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              padding: 10,
              backgroundColor: "#e4e6eb",
              borderRadius: 20,
            }}
          >
            <Entypo name="location-pin" size={13} color="grey" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#f4b400",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
