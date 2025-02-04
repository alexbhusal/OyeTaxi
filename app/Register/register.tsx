import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { auth, db } from "../../firebaseConfig";
import {createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import firestore from '@react-native-firebase/firestore';
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const UserRegister = async () => {
    try {
      const isRegistered = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = isRegistered.user;
      await sendEmailVerification(user);
      await signOut(auth);
      router.push("/EmailVerify/verify");
      console.log(isRegistered);
      
      await setDoc(doc(db,"users",isRegistered?.user?.uid),{
        fullname,
        phone,
        email,
        userId:isRegistered?.user?.uid
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <View>
      <View>
        <Text className="text-3xl font-bold text-center mt-5">Register</Text>
      </View>
      <View className="justify-center align-center w-full">
        <LottieView
          source={require("../../assets/images/signup.json")}
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
            value={fullname}
            onChangeText={(txt) => setName(txt)}
            placeholder="Full Name"
            placeholderTextColor={"red"}
            autoCapitalize="words"
          />
        </View>
        <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
          <TextInput
            value={phone}
            onChangeText={(txt) => setPhone(txt)}
            placeholder="Phone Number"
            placeholderTextColor={"red"}
          />
        </View>
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
        <View className="w-2/4">
          <TouchableOpacity
            className="w-full bg-yellow-500 p-3 rounded-3xl mb-3"
            onPress={UserRegister}
          >
            <Text className="text-white text-xl font-bold text-center">
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/Login/login");
            }}
          >
            <Text className="mx-1 text-green-600">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
