import { View } from 'react-native';
import React, { useEffect,useCallback, useLayoutEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { auth, db } from '../../firebaseConfig';
import { addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chat');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, snapshot => {
            const messages = snapshot.docs.map(doc => ({
                _id: doc.id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }));
            setMessages(messages);
        });

        return () => unsubscribe(); 
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const { _id,createdAt, text, user } = messages[0]; 
        addDoc(collection(db, 'chat'), {
            _id,
            createdAt,
            text,
            user,
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: auth.currentUser?.email, 
                }}
                messagesContainerStyle={{
                    backgroundColor: '#fff',
                }}
            />
        </View>
    );
};

export default Chat;


// import React, { useEffect, useState } from 'react';
// import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { collection, addDoc, onSnapshot } from 'firebase/firestore';

// interface Message {
//     id: string;
//     text: string;
// }

// const App: React.FC = () => {
//     const [message, setMessage] = useState<string>('');
//     const [messages, setMessages] = useState<Message[]>([]);

//     useEffect(() => {
//         const messagesCollection = collection(db, 'messages');
//         const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
//             const messagesArray: Message[] = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 text: doc.data().text,
//             }));
//             setMessages(messagesArray);
//         });

//         return () => unsubscribe(); // Clean up the subscription
//     }, []);

//     const sendMessage = async () => {
//         if (message.trim()) {
//             await addDoc(collection(db, 'messages'), { text: message });
//             setMessage('');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={messages}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
//             />
//             <TextInput
//                 value={message}
//                 onChangeText={setMessage}
//                 placeholder="Type a message"
//                 style={styles.input}
//             />
//             <Button title="Send" onPress={sendMessage} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     input: {
//         borderWidth: 1,
//         marginBottom: 10,
//         padding: 10,
//         borderColor: '#ccc',
//     },
//     message: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         marginHorizontal:10
//     },
// });

// export default App;
