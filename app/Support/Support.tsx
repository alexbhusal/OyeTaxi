import { View, Text, TouchableOpacity, Platform, Linking } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import {openURL} from "expo-linking"

const Support = () => {
  const PhoneCall=()=>{
    if(Platform.OS=='android'){
      Linking.openURL("tel:+9779811064977")
      
    }else{
      Linking.openURL("telpromt:+9779811064977")
    }
  }
  return (
    <View>
        <View>
            <Text className='text-3xl text-center text-green-800 font-bold mt-5 '>Support</Text>
        </View>
      <View>
        <LottieView
        source={require('../../assets/images/support.json')}
        autoPlay
        style={{
            height:400,
            width:400
        }}
        />
      </View>
      <View>
        <TouchableOpacity className='bg-green-600 m-10 p-3 mx-32 rounded-3xl' onPress={PhoneCall}  >
            <Text className='text-center text-3xl text-white font-bold'>CALL </Text>
        </TouchableOpacity>


        <TouchableOpacity className='bg-orange-400  p-3 mx-32 rounded-3xl' onPress={()=>openURL("mailto:alexbhusal@icloud.com")}>
            <Text className='text-center text-3xl text-white font-bold'>MAIL </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Support