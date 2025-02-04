import { View, Text, Button } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerTitle: "History",
          tabBarLabel: "History",
        }}
      />
      <Tabs.Screen
        name="Userdashboard"
        options={{
          headerTitle: "USER~DASHBOARD",
          tabBarLabel: "Dashboard",
          headerRight: () => (
            <Button
              title="Support"
              onPress={() => {
                router.push("/Support/Support");
              }}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="posts"
        options={{
          headerTitle: "posts",
          tabBarLabel: "posts",
          headerShown: false,
        }}
      /> */}

    </Tabs>
  );
}
