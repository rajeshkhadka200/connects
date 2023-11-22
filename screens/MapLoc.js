import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Marker from "react-native-maps";

const MapLoc = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 27.7,
        longitude: 83.45,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default MapLoc;
