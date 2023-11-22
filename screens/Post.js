import {
  View,
  Text,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { styles } from "../styles/PostStyle.js";
import Globalstyle from "../styles/Globalstyle.js";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
// db imports
import { db, st } from "../config/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { ContexStore } from "../context/Context.js";

function Post() {
  const navigation = useNavigation();
  // context usecase
  const { user, setUser } = React.useContext(ContexStore);
  console.log(user[0]?.user_profile);
  const [toggleState, setToggleState] = useState(true);
  //  business true
  // event false
  const handleToggle = () => {
    setToggleState(!toggleState);
  };
  // handle image
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

  // sate for event feild
  const [eventData, seteventData] = useState({
    user_name: user[0]?.name,
    user_phone: user[0]?.number,
    user_profile: user[0]?.user_profile,
    evt_tittle: "",
    evt_location: "",
    evt_date: "",
    evt_price: "",
  });

  const postEvent = async () => {
    // check all the feilds
    if (
      eventData.evt_tittle == "" ||
      eventData.evt_location == "" ||
      eventData.evt_date == "" ||
      eventData.evt_price == "" ||
      img == ""
    ) {
      alert("please fill all the feilds");
      return;
    }
    const docRef = await addDoc(collection(db, "events"), {
      ...eventData,
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
    const imageRef = ref(st, `images/${Date.now()}-connects`);
    await uploadBytes(imageRef, blob, metadata).then(async () => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "events", docRef.id), {
        thumbnail: downloadURL,
      });
      if (downloadURL) {
        alert("Event Posted Successfully");
        setImg("");
        return navigation.navigate("Home");
      }
    });
  };
  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <View style={{}}>
        <View style={styles.cont_post_heder}>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {/* Post Event */}
            <Text>Events</Text>
          </Text>
          <Switch
            value={toggleState}
            onValueChange={handleToggle}
            thumbColor={{ false: "#f44336", true: "#ea80ed" }}
            trackColor={{ false: "#f4b400", true: "#f4b400" }}
          />
        </View>
        {/* fild section for Event */}

        <View style={styles.container}>
          <View style={{}}>
            <TextInput
              onChangeText={(text) =>
                seteventData({ ...eventData, evt_tittle: text })
              }
              style={styles.input}
              placeholder="Event Tittle"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              onChangeText={(text) =>
                seteventData({ ...eventData, evt_location: text })
              }
              style={styles.input}
              placeholder="Event Location"
            />
          </View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <TextInput
              onChangeText={(text) =>
                seteventData({ ...eventData, evt_date: text })
              }
              style={{ ...styles.input, flex: 1, marginRight: 10 }}
              placeholder="2023 June 23"
            />
            <TextInput
              onChangeText={(text) =>
                seteventData({ ...eventData, evt_price: text })
              }
              style={{ ...styles.input, flex: 1 }}
              placeholder="Premium or Free"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                imageUpload();
              }}
              style={{
                height: 200,
                backgroundColor: "rgba(128, 128, 128, 0.302)",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {img ? (
                <Image
                  source={{ uri: img }}
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              ) : (
                <Feather name="image" size={35} color="grey" />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 200,
            }}
          >
            <TouchableOpacity
              onPress={() => postEvent()}
              style={{
                backgroundColor: "#f4b400",
                paddingVertical: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Post Event
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Post;
