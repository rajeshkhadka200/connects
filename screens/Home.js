import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Globalstyle from "../styles/Globalstyle.js";
import React from "react";
import { styles } from "../styles/HomeStyle.js";
import { FontAwesome } from "@expo/vector-icons";
import HomeCategoryCard from "../components/HomeCategoryCard.js";
export default function Home() {
  const [category, setcategory] = useState([
    {
      id: 1,
      image:
        "https://bl-i.thgim.com/public/opinion/rgb32v/article28562857.ece/alternates/FREE_1200/BL19THINK2FERTILISER5",
      name: "Agriculture",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
      name: "Resturants",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/84/70/94/847094a5d2df67f4fc7a7a6b77bcfe7b.jpg",
      name: "Travels",
    },
    {
      id: 3,
      image:
        "https://wallpapers.com/images/hd/plumbing-1500-x-700-picture-8xzg8nm0ql3dg9qr.jpg",
      name: "Services",
    },

    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1446229465/photo/red-heart-and-stethoscope-are-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=1-aE7XV24f8qVr8fGnpvypir8fSxYaM9sHZurKoutj8=",
      name: "Health",
    },
  ]);
  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <View style={{ paddingHorizontal: 13 }}>
        <View style={styles.header_con}>
          <Text style={styles.header_text}>Let's Discover</Text>
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
              image={item.image}
              name={item.name}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
