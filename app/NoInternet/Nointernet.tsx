import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Nointernet = () => {
  return (
    <View>
      <View>
      <Text className=' text-red-700 text-3xl font-bold text-center mt-5'>Opps No Internet Connection</Text>
      </View>
      <View>
        <LottieView
        source={require("../../assets/images/nointernet.json")}
        autoPlay
        style={{
          height:400,
          width:400
        }
        }
         />
      </View>
      <View>
        <Text className='text-2xl text-center'>
          Please Check Your internet Connection !!!!
        </Text>
      </View>
    </View>
  )
}

export default Nointernet