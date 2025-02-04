import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
const router = useRouter();
const Userdashboard = () => {
  const { email, uid, FullName, Phone } = useLocalSearchParams();
  console.log(uid);
  
  return (
    <View>
      <View>
        <View>
          <LottieView
            source={require("../../assets/images/dashboard.json")}
            autoPlay
            loop
            style={{
              height: 400,
              width: 400,
            }}
          />
        </View>
        <View className="mx-10">
          <View>
            <Text className=" text-2xl">FullName: {FullName}</Text>
          </View>
          <View className="mt-10">
            <Text className=" text-2xl">Email: {email} </Text>
          </View>
          <View className="mt-10">
            <Text className=" text-2xl">Phone Number: {Phone} </Text>
          </View>
        </View>
        <View className="b-0 mt-16">
          <Button title="Logout" onPress={() => router.replace('/Login/login')} />
        </View>
      </View>
    </View>
  );
};

export default Userdashboard;
