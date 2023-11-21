import React from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/HomeStyle.js";
import { FontAwesome } from "@expo/vector-icons";
import HomeCategoryCard from "../components/HomeCategoryCard.js";
import HomeEventCard from "../components/HomeEventCard.js";
import { ContexStore } from "../context/Context.js";
export default function Home() {
  // context usecase
  const { user, setUser } = React.useContext(ContexStore);
  console.log(user[0]?.name);
  const [category, setcategory] = useState([
    {
      id: 1,
      cate_image:
        "https://bl-i.thgim.com/public/opinion/rgb32v/article28562857.ece/alternates/FREE_1200/BL19THINK2FERTILISER5",
      name: "Agriculture",
    },
    {
      id: 4,
      cate_image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
      name: "Resturants",
    },
    {
      id: 2,
      cate_image:
        "https://i.pinimg.com/736x/84/70/94/847094a5d2df67f4fc7a7a6b77bcfe7b.jpg",
      name: "Travels",
    },
    {
      id: 3,
      cate_image:
        "https://wallpapers.com/images/hd/plumbing-1500-x-700-picture-8xzg8nm0ql3dg9qr.jpg",
      name: "Services",
    },

    {
      id: 5,
      cate_image:
        "https://media.istockphoto.com/id/1446229465/photo/red-heart-and-stethoscope-are-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=1-aE7XV24f8qVr8fGnpvypir8fSxYaM9sHZurKoutj8=",
      name: "Health",
    },
  ]);

  // event card
  const [event, setEvent] = useState([
    {
      id: 1,
      tittle: "Arijit Singh Live in Concert",
      banner: "https://exclaim.ca/images/honeyjamconcert_editorial.jpg",
      profile:
        "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JXMxwj6-xssAX9D7bfp&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfBQgN7QG3kcqQIgNeFmElBK2F1wewFNPPTrnfQdjOZgGQ&oe=65619CF1",
      date: "2021-09-12",
      location: "Kathmandu",
      price: "Rs.5000",
    },
    {
      id: 2,
      tittle: "Arijit Singh Live in Concert",
      banner:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1651037876/js8fhetpguw6s08cfrg4.jpg",
      profile:
        "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/368234669_1011834293341769_8835376727035243512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JXMxwj6-xssAX9D7bfp&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfBQgN7QG3kcqQIgNeFmElBK2F1wewFNPPTrnfQdjOZgGQ&oe=65619CF1",
      date: "2021-09-12",
      location: "Kathmandu",
      price: "Rs.5000",
    },
  ]);
  return (
    <ScrollView>
      <View style={Globalstyle.androidSafeArea}>
        <View style={{ paddingHorizontal: 13, paddingBottom: 100 }}>
          <View style={styles.header_con}>
            <Text style={styles.header_text}>
              Let's Discover {user[0]?.name}
            </Text>
            <View style={styles.img_con}>
              <Image
                style={styles.img}
                source={require("../assets/avatar.png")}
              />
            </View>
          </View>

          {/* search */}
          <View style={styles.searchBar}>
            <FontAwesome name="search" size={24} color="grey" />
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
            {category.map((item) => (
              <HomeCategoryCard
                key={item.id}
                id={item.id}
                cate_image={item.cate_image}
                name={item.name}
                date={item.date}
              />
            ))}
          </ScrollView>
          {/* up comming event  */}
          <View style={styles.cate_con}>
            <View>
              <Text style={styles.cate_heading}>Upcoming Events</Text>
            </View>
            <View>
              <Text style={styles.cate_see_all}>See all</Text>
            </View>
          </View>
          {/* events cards */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {event.map((item) => (
              <HomeEventCard
                key={item.id}
                id={item.id}
                banner={item.banner}
                profile={item.profile}
                tittle={item.tittle}
                price={item.price}
                address={item.address}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
