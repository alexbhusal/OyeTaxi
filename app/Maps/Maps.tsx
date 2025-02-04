import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocalSearchParams } from "expo-router";

const Maps = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const [mapRegion, setMapRegion] = useState({
    latitude: 27.686386,
    longitude: 83.432426,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (typeof latitude === "string" && typeof longitude === "string") {
      const lat = parseFloat(latitude);
      const lon = parseFloat(longitude);
      
      if (!isNaN(lat) && !isNaN(lon)) {
        setMapRegion({
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        console.log(lat, lon);
      }
    }
  }, [latitude, longitude]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={mapRegion}
        style={{
          width: "100%",
          height: "60%",
        }}
        showsUserLocation={true} 
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
};

export default Maps;
