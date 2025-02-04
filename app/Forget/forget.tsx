import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const forget = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter();
  const handleResetPassword = async () => {
    if (!email) {
      alert(`Error', 'Please enter an email address.`);
      return;
    }

    try {
      await sendPasswordResetEmail(auth,email);
      alert(`Reset Your password then Login`);
      console.log(`Success', 'Password reset email sent!`);
      router.push("/Login/login");

    } catch (error) {
      alert(error);
    }
  };
  return (
    <View>
      <View>
        <Text className="font-bold text-center mt-5 text-3xl ">
          Forget Password
        </Text>
      </View>
      <View>
        <LottieView
          source={require("../../assets/images/forget.json")}
          autoPlay
          loop
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
      <View className="flex items-center mx-4 space-y-4">
      <View className="mt-10 my-5  bg-black/5 p-5 rounded-2xl w-full">
        <TextInput
          placeholder="Enter Your Email Address"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          placeholderTextColor={"red"}
          autoCapitalize="none"
        />
      </View>
      </View>
      
      <View className="items-center rounded-2xl">
        <TouchableOpacity className="bg-green-500 p-3 rounded-2xl"
        onPress={handleResetPassword}>
          <Text className="text-center text-xl text-white font-bold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default forget;
