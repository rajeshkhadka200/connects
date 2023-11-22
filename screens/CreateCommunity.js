import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles/CreateCommunityStyle.js";
import Globalstyle from "../styles/Globalstyle.js";
import { useNavigation } from "@react-navigation/native";
import { db, st } from "../config/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

import { ContexStore } from "../context/Context.js";

export default function CreateCommunity() {
  const { user, setUser } = React.useContext(ContexStore);
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };
  const [businessData, setbusinessData] = useState({
    user_name: user[0]?.name,
    user_phone: user[0]?.number,
    user_profile: user[0]?.user_profile,
    service_tittle: "",
    service_location: "",
    service_charge: "",
    service_description: "",
  });
  const [physicalStore, setphysicalStore] = useState({
    store_name: "",
    store_img: "",
  });
  const { store_name, store_img } = physicalStore;
  const navigation = useNavigation();
  //   handle image
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

  const Create = async () => {
    if (
      businessData.service_tittle == "" ||
      businessData.service_location == "" ||
      businessData.service_charge == "" ||
      businessData.service_description == ""
    ) {
      return alert("Please fill all the feilds");
    }
    if (toggleState) {
      if (physicalStore.store_name == "" || img == "") {
        return alert("Please fill all the feilds");
      }
    }

    //  add to db
    const docRef = await addDoc(collection(db, "service_person"), {
      ...businessData,
      store_name,
      store_img,
      timestamp: Date.now(),
    });
    if (!docRef.id) {
      return alert("Error while uploading");
    }
    const metadata = {
      contentType: "image/jpeg",
    };
    if (!img) {
      return alert("Your service added succesfully");
    }
    if (img) {
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

      const imageRef = ref(st, `images/${Date.now()}-business_store`);
      await uploadBytes(imageRef, blob, metadata).then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "service_person", docRef.id), {
          store_img: downloadURL,
        });
        if (downloadURL) {
          alert("Service and Store added Successfully");
          setImg("");
          return navigation.navigate("Home");
        }
      });
    }
  };
  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        {/* fild section for Business */}

        <View style={styles.container}>
          <View style={{}}>
            <TextInput
              onChangeText={(text) =>
                setbusinessData({ ...businessData, service_tittle: text })
              }
              style={styles.input}
              placeholder="What service do you provide ..."
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              onChangeText={(text) =>
                setbusinessData({ ...businessData, service_location: text })
              }
              style={styles.input}
              placeholder="Your Location ..."
            />
          </View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <TextInput
              onChangeText={(text) =>
                setbusinessData({ ...businessData, service_charge: text })
              }
              style={{ ...styles.input, flex: 1 }}
              placeholder="Hourly Charge for service ..."
            />
          </View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <TextInput
              onChangeText={(text) =>
                setbusinessData({ ...businessData, service_description: text })
              }
              placeholder="Sercice  Description"
              multiline={true}
              style={{
                ...styles.input,
                flex: 1,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.cont_post_heder,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "grey",
            marginLeft: 20,
          }}
        >
          <Text>Physical Business</Text>
        </Text>
        <Switch
          value={toggleState}
          onValueChange={handleToggle}
          trackColor={{
            true: "#f4b400",
            false: "grey",
          }}
        />
      </View>

      {toggleState && (
        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                setphysicalStore({ ...physicalStore, store_name: text })
              }
              placeholder="Store Name"
              multiline={true}
              style={{
                ...styles.input,
                flex: 1,
              }}
            />
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
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
        </View>
      )}

      <View
        style={{
          marginTop: 20,
          marginBottom: 100,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => Create()}
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
            Add Service
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
