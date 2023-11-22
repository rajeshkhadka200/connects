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
import React, { useState } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/FeedStyle.js";
import { FontAwesome } from "@expo/vector-icons";
import { ContexStore } from "../context/Context.js";
import * as ImagePicker from "expo-image-picker";
import { db, st } from "../config/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();

  const { user, setUser } = React.useContext(ContexStore);
  console.log("user", user);
  const [toPostFeed, settoPostFeed] = React.useState({
    user_name: user[0]?.name,
    auth_token: user[0]?.auth_token,
    post: "",
  });

  const [img, setImg] = useState("");
  const imageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.photo,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.8,
    });
    setImg(result?.assets[0]?.uri);
  };

  const PostFeed = async () => {
    if (toPostFeed.post == "" || img == "") {
      alert("Post at least one image and text");
      return;
    }
    const docRef = await addDoc(collection(db, "feed"), {
      ...toPostFeed,
      timestamp: Date.now(),
    });
    if (!docRef.id) {
      return alert("Error while uploading");
    }

    const metadata = {
      contentType: "image/jpeg",
    };
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", img, true);
      xhr.send(null);
    });

    const imageRef = ref(st, `images/${Date.now()}-connectsfeed`);
    await uploadBytes(imageRef, blob, metadata).then(async () => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "feed", docRef.id), {
        feed_thumbnail: downloadURL,
      });
      if (downloadURL) {
        alert("Posted Successfully");
        setImg("");
        settoPostFeed({
          user_name: user[0]?.name,
          auth_token: user[0]?.auth_token,
          post: "",
        });
        return navigation.navigate("Home");
      }
    });
  };

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
            flex: 1,
          }}
        >
          <TextInput
            onChangeText={(text) =>
              settoPostFeed({ ...toPostFeed, post: text })
            }
            placeholder="What's on your mind?"
            multiline={true}
            style={{
              fontSize: 18,
            }}
          />
          {img && (
            <Image
              style={{
                marginTop: 20,
                height: 200,
                width: "100%",
                borderRadius: 10,
                resizeMode: "cover",
              }}
              source={{
                uri: img,
              }}
            />
          )}
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
            onPress={() => {
              imageUpload();
            }}
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
          onPress={() => {
            PostFeed();
          }}
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
