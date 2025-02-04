import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import OTPTextInput from "react-native-otp-textinput"; 
import { useToast } from "react-native-toast-notifications"; 
import { useLocalSearchParams } from "expo-router"; 

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { phoneNumber } = useLocalSearchParams();

  return (
    <View >
      <View>
        <LottieView
          source={require("../../assets/images/otp.json")}
          autoPlay
          loop
          style={{
            height: 400,
            width: 400,
          }}
        />
      </View>
      <View>
        <Text className="text-2xl text-center m-10 ">
          Enter the received OTP
        </Text>
      </View>
      <View >
        <OTPTextInput
          handleTextChange={(code) => setOtp(code)}
          inputCount={6}
          autoFocus={false}
        />
        <View>
        <TouchableOpacity className="items-center rounded mt-5">
          <Text className="font-bold  text-2xl bg-cyan-500 p-3  text-white">
            Verify
          </Text>
        </TouchableOpacity>
        </View>
        <View className="m-10 justify-center items-center">
          <Text >Not Received yet?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text className="text-green-600">Resend it</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Otp;
