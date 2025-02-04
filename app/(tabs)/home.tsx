import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
const router = useRouter();
const home = () => {
  return (
    <View>
      <View>
        <View>
          <LottieView
            source={require("../../assets/images/home.json")}
            autoPlay
            // loop
            style={{
              height: 400,
              width: 400,
            }}
          />
        </View>
        <View>
        <TouchableOpacity 
        onPress={() => router.replace('/Location/location')} 
        className="w-full bg-red-400 p-3 rounded-3xl mb-3
        ">
          <Text className="text-white text-xl font-bold text-center">
            Book a Taxi
          </Text>
        </TouchableOpacity>
        </View>
        {/* <Button title="chat" onPress={()=>router.push('/Chat/Chat')}/> */}
      </View>
    </View>
  );
};

export default home;
