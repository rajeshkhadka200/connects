import { Text, Platform, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Home, Feed, Event, Profile, Post, Register, Login } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Context, { ContexStore } from "./context/Context.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
function Tabs() {
  const [isLogin, setisLogin] = useState();
  useEffect(() => {
    const token = AsyncStorage.getItem("auth_token");
    setisLogin(token);
  }, []);

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)"}
                />
                <Text
                  style={{
                    fonSize: 12,
                    color: focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="wallet"
                  size={24}
                  color={focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)"}
                />
                <Text
                  style={{
                    fonSize: 12,
                    color: focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Feed
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f4b400",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                }}
              >
                <Entypo name="plus" size={24} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="event"
                  size={24}
                  color={focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)"}
                />
                <Text
                  style={{
                    fonSize: 12,
                    color: focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Event
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={isLogin ? "Profile" : "Register"}
        component={isLogin ? Profile : Register}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)"}
                />
                <Text
                  style={{
                    fonSize: 12,
                    color: focused ? "#f4b400" : "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {isLogin ? "Profile" : "User"}
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Connects"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
