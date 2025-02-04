import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import * as Location from 'expo-location';
import { useRouter } from "expo-router";


const LocationComponent = () => {
  const router=useRouter();
  const handleEnablePress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      router.push({
        pathname:'/Maps/Maps',
        params:{
          latitude: (location.coords.latitude),
          longitude: location.coords.longitude,
        }
      }
      );
    } catch (error) {
      alert('Failed to fetch location');
    }
  };

  return (
    <View>
      <View className="mt-10">
        <Text className="text-3xl text-center font-bold">
          Please Enable the location
        </Text>
      </View>
      <View>
        <LottieView
          source={require("../../assets/images/location.json")}
          autoPlay
          loop
          style={{
            height: 600,
            width: 400,
          }}
        />
      </View>
      <View className="w-full items-center justify-center">
        <TouchableOpacity className="w-full bg-sky-400 p-4 rounded-3xl"
        onPress={handleEnablePress}>
          <Text className="text-white text-center text-2xl ">Enable</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationComponent;
