import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/HomeStyle.js";
import { FontAwesome } from "@expo/vector-icons";
import HomeCategoryCard from "../components/HomeCategoryCard.js";
import HomeEventCard from "../components/HomeEventCard.js";
import { ContexStore } from "../context/Context.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
export default function Home() {
  // context usecase
  const { user, servicePerson, event } = React.useContext(ContexStore);

  // filter from and give array of an obj service person which have unique service_tittle
  const cate = [
    ...new Map(
      servicePerson.map((item) => [item["service_tittle"], item])
    ).values(),
  ];

  // event card
  // const [event, setEvent] = useState([
  //   {
  //     id: 1,
  //     tittle: "Taylor Swift Live  Concert",
  //     banner: "https://i.ytimg.com/vi/KudedLV0tP0/maxresdefault.jpg",
  //     profile:
  //       "https://media.istockphoto.com/id/1147066751/photo/hispanic-adult-standing-outside-and-smiling.jpg?s=612x612&w=0&k=20&c=5BWiJRFV-eqg7gDFlu8khQ7Eol_dvsip0Ds2p_zDwAo=",
  //     date: "2021-09-12",
  //     location: "Kathmandu",
  //     price: "250",
  //   },
  //   {
  //     id: 2,
  //     tittle: "Arijit Singh Live in Concert",
  //     banner:
  //       "https://media.insider.in/image/upload/c_crop,g_custom/v1651037876/js8fhetpguw6s08cfrg4.jpg",
  //     profile:
  //       "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JXMxwj6-xssAX9D7bfp&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfBQgN7QG3kcqQIgNeFmElBK2F1wewFNPPTrnfQdjOZgGQ&oe=65619CF1",
  //     date: "2021-09-12",
  //     location: "Kathmandu",
  //     price: "Rs.5000",
  //   },
  // ]);

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={Globalstyle.androidSafeArea}>
        <View style={{ paddingHorizontal: 13, paddingBottom: 100 }}>
          <View style={styles.header_con}>
            <View style={styles.left_header}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Lets discover
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Butwal
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Location")}
              style={{
                ...styles.right_header,
                backgroundColor: "#e4e6eb",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Entypo name="location-pin" size={24} color="#f4b400" />
            </TouchableOpacity>
          </View>

          {/* search */}
          <View style={styles.searchBar}>
            <FontAwesome name="search" size={24} color="#f4b400" />
            <TextInput
              style={styles.input}
              placeholder="Search the local business"
            />
          </View>

          {/* categoryyyyy */}
          <View style={styles.cate_con}>
            <View>
              <Text style={styles.cate_heading}>Categories</Text>
            </View>
            <View>
              <Text style={styles.cate_see_all}>See all</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cate.map((item) => (
              <HomeCategoryCard
                key={item.oprn_id}
                id={item.oprn_id}
                cate_image={item.store_img}
                name={item.service_tittle}
                date={item.date}
                user_profile={item.user_profile}
              />
            ))}
          </ScrollView>
          {/* up comming event  */}
          <View style={styles.cate_con}>
            <View>
              <Text style={styles.cate_heading}>Upcomming Events</Text>
            </View>
            <View>
              <Text style={styles.cate_see_all}>See all</Text>
            </View>
          </View>
          {/* events cards */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {event.map((item) => (
              <HomeEventCard
                key={item.timestamp}
                banner={item.thumbnail}
                profile={item.profile}
                tittle={item.evt_tittle}
                date={item.evt_date}
                price={item.evt_price}
                address={item.evt_location}
                user_profile={item.user_profile}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
