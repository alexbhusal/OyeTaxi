import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const upload = () => {
  return (
    <View>
      <View>
        <Text className="text-3xl font-bold mt-3 text-center">Upload Documnet</Text>
      </View>
      <View className="justify-center align-center w-full">
        <LottieView
          source={require("../../assets/images/uploadID.json")}
          autoPlay
          loop
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
    </View>
  );
};

export default upload;
