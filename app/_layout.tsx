import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import "../global.css";

export default function _layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Start",
        }}
      />
      <Stack.Screen
        name="Register/register"
        options={{
          title: "Register",
        }}
      />
      <Stack.Screen
        name="Login/login"
        options={{
          title: "Login Page",
          headerRight: () => (
            <Button
              title="Register"
              onPress={() => {
                router.push("/Register/register");
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EmailVerify/verify"
        options={{
          title: "Login Page",
        }}
      />
      <Stack.Screen
        name="Maps/Maps"
        options={{
          title: "MAP",
        }}
      />
      <Stack.Screen
        name="Support/Support"
        options={{
          title: "Supports",
        }}
      />
      <Stack.Screen
        name="Chat/chat"
        options={{
          title: "ChatRoom",
        }}
      />
      <Stack.Screen
        name="Forget/forget"
        options={{
          title: "Forget Password",
        }}
      />
      <Stack.Screen
        name="OTP/otp"
        options={{
          title: "Verify",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Details/details"
        options={{
          title: "Details",
        }}
      />
      <Stack.Screen
        name="UploadID/upload"
        options={{
          title: "Upload Document",
        }}
      />
      <Stack.Screen
        name="Confirm/confirm"
        options={{
          title: "Confirm",
        }}
      />
      <Stack.Screen
        name="Location/location"
        options={{
          title: "Enable~Location",
          // presentation:"modal"
        }}
      />
      <Stack.Screen
        name="BookRide/booking"
        options={{
          title: "Book Ride",
        }}
      />
      <Stack.Screen
        name="NoInternet/Nointernet"
        options={{
          title: "No Internet",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="404/[missing]"
        options={{
          title: "404",
        }}
      />
    </Stack>
  );
}
