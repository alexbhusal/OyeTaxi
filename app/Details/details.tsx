// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import firestore from '@react-native-firebase/firestore';
// import { useRouter } from 'expo-router';

// const Details = ({ route }) => {
//   const { uid } = route.params;
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const router = useRouter();

//   const saveDetails = async () => {
//     try {
//       await firestore().collection("users").doc(uid).set({
//         name,
//         phone
//       });
//       router.push('/(tabs)/Userdashboard');
//     } catch (error) {
//       console.error("Error saving details: ", error);
//       // Optionally show an alert or notification to the user here
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Details</Text>
//       <TextInput 
//         placeholder='Name'
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput 
//         placeholder='Phone'
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType='phone-pad'
//         style={styles.input}
//       />
//       <Button 
//         title="Save Details"
//         onPress={saveDetails}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   }
// });

// export default Details;
