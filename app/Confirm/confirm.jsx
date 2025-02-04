// import React, { useState } from "react";
// import { auth } from "../../firebaseConfig";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";
// import OTPTextInput from "react-native-otp-textinput";
// import { TextInput } from "react-native-gesture-handler";
// import { signInWithPhoneNumber } from "firebase/auth";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const ConfirmOpt = () => {
//   const [phone, setPhone] = useState('');
//   const [code, setCode] = useState('');
//   const [confirm, setConfirm] = useState(null);

//   const Otp = async () => {
//     try {
//       const confirmation = await signInWithPhoneNumber(auth, phone);
//       setConfirm(confirmation);
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const ConfirmCode = async () => {
//     if (confirm) {
//       try {
//         await confirm.confirm(code);
//       } catch (error) {
//         console.error("Error confirming code:", error);
//       }
//     } else {
//       console.log("Confirmation object is undefined");
//     }
//   };

//   const resendOtp = () => {
//     setConfirm(null);
//     Otp();
//   };

//   return (
//     <GestureHandlerRootView>
//       <View>
//         {!confirm ? (
//           <>
//             <TextInput
//               value={phone}
//               onChangeText={setPhone}
//               placeholder="Mobile Number"
//             />
//             <TouchableOpacity onPress={Otp}>
//               <Text>Send OTP</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <View>
//               <LottieView
//                 source={require("../../assets/images/otp.json")}
//                 autoPlay
//                 loop
//                 style={{
//                   height: 400,
//                   width: 400,
//                 }}
//               />
//               <Text className="text-2xl text-center m-10">
//                 Enter the received OTP
//               </Text>
//               <OTPTextInput
//                 value={code}
//                 handleTextChange={setCode}
//                 inputCount={6}
//                 autoFocus={false}
//               />
//               <TouchableOpacity
//                 className="items-center rounded mt-5"
//                 onPress={ConfirmCode}
//               >
//                 <Text className="font-bold text-2xl bg-cyan-500 p-3 text-white">
//                   Confirm
//                 </Text>
//               </TouchableOpacity>
//               <View className="m-10 justify-center items-center">
//                 <Text>Not Received yet?</Text>
//                 <TouchableOpacity onPress={resendOtp}>
//                   <Text className="text-green-600">Resend it</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </>
//         )}
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default ConfirmOpt;
