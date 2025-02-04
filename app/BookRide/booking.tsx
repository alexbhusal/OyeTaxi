import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const booking = () => {
  return (
    <View>
      <View>
        <Text className="text-3xl font-bold text-center m-5">Ride Booking</Text>
      </View>
      <View className="space-y-4 mt-10">
        <View className="bg-sky-300 p-5 rounded-2xl w-full mb-3 ">
          <TextInput
            className="text-xl"
            placeholder="Pickup"
            placeholderTextColor={"black"}
          />
        </View>
        <View className="bg-sky-300 p-5 rounded-2xl w-full mb-3 ">
          <TextInput
            className="text-xl"
            placeholder="Destination"
            placeholderTextColor={"black"}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity className="w-full bg-red-400 p-3 rounded-3xl mb-3">
          <Text className="text-white text-xl font-bold text-center">
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-16">
        <Text className="text-2xl font-bold text-center">Available Rides</Text>
      </View>
    </View>
  );
};

export default booking;
