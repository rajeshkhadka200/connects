import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "../styles/AllCateGortStyle.js";
import { useNavigation } from "@react-navigation/native";
import Globalstyle from "../styles/Globalstyle.js";
import { ContexStore } from "../context/Context.js";
import ServiceCard from "../components/ServiceCard.js";

const AllCateGoriesProfile = ({ route }) => {
  console.log("route", route);
  const { user, setUser, servicePerson, setservicePerson } =
    React.useContext(ContexStore);

  // filter form the service Person whose service_tittle is equal to route.params.name
  const specificService = servicePerson.filter(
    (item) => item.service_tittle === route.params.name
  );
  console.log("specificService", specificService);
  const navigation = useNavigation();
  return (
    <ScrollView style={Globalstyle.androidSafeArea}>
      <Pressable>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {route.params.name}
            </Text>
          </View>

          {/* render card */}

          <View style={{ marginTop: 10 }}>
            {specificService.map((item) => (
              <ServiceCard
                key={item.id}
                id={item.id}
                user_name={item.user_name}
                service_charge={item.service_charge}
                service_tittle={item.service_tittle}
                service_location={item.service_location}
                store_img={item.store_img}
                store_name={item.store_name}
                user_phone={item.user_phone}
                service_description={item.service_description}
                user_profile={item.user_profile}
              />
            ))}
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default AllCateGoriesProfile;
