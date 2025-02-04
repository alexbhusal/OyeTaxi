import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const UserLogin = async () => {
    try {
      const isLogged = await signInWithEmailAndPassword(auth, email, password);
      if (isLogged.user.emailVerified) {
        alert("user Logged in");
        const docRef = doc(db, "users", isLogged?.user?.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        router.push({
          pathname: "/(tabs)/Userdashboard",
          params: {
            email: isLogged.user.email,
            uid: isLogged.user.uid,
            FullName: userData?.fullname,
            Phone: userData?.phone,
          },
        });
      } else {
        router.push("/EmailVerify/verify");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View>
        <Text className="text-3xl font-bold text-center mt-5">Login</Text>
      </View>
      <View className="justify-center align-center w-full">
        <LottieView
          source={require("../../assets/images/login.json")}
          autoPlay
          loop
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
      <View className="flex items-center mx-4 space-y-4">
        <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
          <TextInput
            value={email}
            onChangeText={(txt) => setEmail(txt)}
            placeholder="Email"
            placeholderTextColor={"red"}
            autoCapitalize="none"
          />
        </View>
        <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
          <TextInput
            value={password}
            onChangeText={(txt) => setPassword(txt)}
            placeholder="Password"
            placeholderTextColor={"red"}
            secureTextEntry
          />
        </View>
        <View className="w-full items-end">
          <TouchableOpacity
            onPress={() => {
              router.push("/Forget/forget");
            }}
          >
            <Text className="text-blue-500 mb-5 ">Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View className="w-2/4">
          <TouchableOpacity
            className="w-full bg-yellow-500 p-3 rounded-3xl mb-3"
            onPress={UserLogin}
          >
            <Text className="text-white text-xl font-bold text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/Register/register");
            }}
          >
            <Text className="mx-1 text-green-600">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
