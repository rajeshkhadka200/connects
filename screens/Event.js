import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import { ContexStore } from "../context/Context.js";
import HomeEventCard from "../components/HomeEventCard";
import Globalstyle from "../styles/Globalstyle.js";

const Events = ({}) => {
  const { user, servicePerson, event } = React.useContext(ContexStore);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Globalstyle.androidSafeArea}
      >
        <View
          style={{
            marginBottom: 100,
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          {event.map((item) => (
            <HomeEventCard
              key={item.timestamp}
              banner={item.thumbnail}
              profile={item.profile}
              tittle={item.evt_tittle}
              date={item.evt_date}
              price={item.evt_price}
              address={item.evt_location}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Events;
