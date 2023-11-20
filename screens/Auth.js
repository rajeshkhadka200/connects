import { Text, View, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import Globalstyle from "../styles/Globalstyle.js";
import { styles } from "../styles/AuthStyle.js";

export default function Home() {
  const googleAuth = () => {};
  return (
    <ScrollView>
      <View style={Globalstyle.androidSafeArea}>
        <View style={styles.main_ontainer}>
          <View style={styles.brand_con}>
            <Image
              style={{
                height: 160,
                width: 160,
                borderRadius: 500,
                alignSelf: "center",
              }}
              source={{
                uri: "https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.15752-9/377222134_729012925855738_7410746691822664284_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=mFc_3wYUxRsAX9eaxni&_nc_ht=scontent.fbhr4-1.fna&oh=03_AdRB9sGmjO_HGXgLb3x90ZWWbUI9FN0wBbTY5l8U3eVk3Q&oe=65834C19",
              }}
            />
            <Text style={styles.brand_name}>Connects</Text>
          </View>
          <View style={styles.footer_con}>
            <Pressable onPress={googleAuth} style={styles.btn}>
              <Image
                style={styles.btn_img}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
                }}
              />
              <Text style={styles.login_text}>Continue with Google</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Image
                style={styles.btn_img}
                source={{
                  uri: "https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png",
                }}
              />
              <Text style={styles.login_text}>Continue with Facebook</Text>
            </Pressable>
            <View style={styles.terms}>
              <Text>By continuing you aggree our</Text>
              <Text Text style={styles.contitions_link}>
                Terms and condition
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
