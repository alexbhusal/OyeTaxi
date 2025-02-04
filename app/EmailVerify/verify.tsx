import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useRouter } from 'expo-router'

const verify = () => {
    const router = useRouter();
  return (
    <View>
        <View>
            <Text className='text-center text-3xl font-bold m-5'>Please Verify Your Email</Text>
        </View>
        <View>
        <LottieView
          source={require("../../assets/images/emailverify.json")}
          autoPlay
          loop
          style={{
            width: 400,
            height: 400,
          }}
        />
        </View>
        <View className='flex-row items-center justify-center mt-20'>
            <Text className='text-2xl'>If verifed</Text>
            <TouchableOpacity 
            onPress={() => {
                router.push("/Login/login");
              }}
            >
                <Text className='text-2xl mx-4 text-blue-500'>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default verify