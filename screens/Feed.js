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
import React, { useEffect, useState } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/FeedStyle.js";
import { FontAwesome } from "@expo/vector-icons";
import { ContexStore } from "../context/Context.js";
import * as ImagePicker from "expo-image-picker";
import { db, st } from "../config/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();

  const { user, setUser } = React.useContext(ContexStore);
  console.log("user", user);
  const [toPostFeed, settoPostFeed] = React.useState({
    user_name: user[0]?.name,
    auth_token: user[0]?.auth_token,
    post: "",
    user_profile: user[0]?.user_profile,
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
  //  fetch the events
  const [feeddb, setfeedDb] = useState([]);
  useEffect(() => {
    const getFeed = async () => {
      try {
        onSnapshot(collection(db, "feed"), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            oprn_id: doc.id,
          }));
          setfeedDb(data);
        });
      } catch (error) {
        console.log("err while geting data", error);
        alert("err while geting data", error);
      }
    };
    getFeed();
  }, []);

  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <View style={{ ...styles.feed_header }}>
        <View style={{ ...styles.left_photo }}>
          <Image
            style={styles.avatar}
            source={{
              uri: user[0]?.user_profile,
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
            PostFeed;
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
      <View
        style={{
          marginTop: 10,
        }}
      >
        {feeddb?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.feed_con,
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            {/* left */}
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={{
                uri: item?.user_profile,
              }}
            />
            <View
              style={{
                flex: 1,
                fontSize: 15,
              }}
            >
              <Text>{item?.user_name}</Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                }}
              >
                {item?.timestamp}
              </Text>

              <Text
                style={{
                  marginTop: 10,
                }}
              >
                {item?.post}
              </Text>
              <Image
                style={{
                  marginTop: 20,
                  height: 200,
                  width: "100%",
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
                source={{
                  uri: item?.feed_thumbnail,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
