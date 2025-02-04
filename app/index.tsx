import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
export default function HomePage() {
  return (
    //
    <View>
      <View>
        <Text className="text-4xl font-bold mt-5 text-center">Oye Taxi</Text>
      </View>
      <View>
        <LottieView
          source={require("../assets/images/taxi.json")}
          autoPlay
          loop
          style={{
            height: 400,
            width: 400,
          }}
        />
      </View>

      <View className="">
        <Link href="/Login/login" asChild>
          <Button title="Login"></Button>
        </Link>
      </View>
      {/* <View>
        <Link href="/Support/Support" asChild>
          <Button title="Support"></Button>
        </Link>
      </View> */}
      {/* <View className="">
        <Link href="/Chat/Chat" asChild>
          <Button title="Chat"></Button>
        </Link>
      </View> */}
      {/* <View className="">
        <Link href="/Maps/Maps" asChild>
          <Button title="Map"></Button>
        </Link>
      </View> */}
      {/* <View className="">
        <Link href="/Register/register" asChild>
          <Button title="Gat Started"></Button>
        </Link>
      </View> */}
      {/* <View className="">
        <Link href="/UploadID/upload" asChild>
          <Button title="Upload"></Button>
        </Link>
      </View> */}
      {/* <View className="">
      <Link href="/Confirm/confirm" asChild>
          <Button title="Confirm"></Button>
        </Link>
      </View> */}
      {/* <View className="">
        <Link href="/Details/details" asChild>
          <Button title="Gat Started"></Button>
        </Link>
      </View>  */}
      {/* <View className="">
        <Link href="/EmailVerify/verify" asChild>
          <Button title="Gat Started"></Button>
        </Link>
      </View>   */}

      {/* <View className="">
        <Link href="/BookRide/booking" asChild>
          <Button title="Book Ride"></Button>
        </Link>
      </View> */}

      {/* <View className="">
        <Link href="/OTP/otp" asChild>
          <Button title="Verify"></Button>
        </Link>
      </View> */}
      {/* <View>
      <Link href="/Location/location" asChild>
          <Button title="Location"></Button>
        </Link>
      </View> */}
      {/* <View>
        <Link href="/(tabs)/home" asChild>
          <Button title="Open tab one"></Button>
        </Link>
      </View> */}
      {/* <View>
        <Link href="/NoInternet/Nointernet" asChild>
          <Button title="No Internet"></Button>
        </Link>
      </View> */}
      
    </View>
  );
}
