import React, { useState, useEffect } from "react";
import { Portal, Provider } from "react-native-paper";
import axios from "axios";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Platform,
    FlatList,
    ScrollView,
    TextInput,
    ImageBackground,
    Image,
    SafeAreaView,
    Pressable, Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addUser, userLogin } from "../../store/features/userSlice";

import MainButton from "../../components/MainButton";
import {CallApi} from "./api/Api";

export const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [pin, setPin] = useState("");


    const onPress = () => {
        if(name === ""){
            Alert.alert('Validation', 'Please enter your full nam', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }else if(mobile === ""){
            Alert.alert('Validation', 'Please enter your mobile number', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }else if(pin === ""){
            Alert.alert('Validation', 'Please enter your pin number', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }else{
            Registration(name,mobile,pin);
        }
    };

    const Registration = (name,mobile,pin) => {
        CallApi.register(name,mobile,pin).then(async (result)  => {
                if(result.success){
                    console.log(result.result)
                    Alert.alert('Success', 'Registration Successfully ', [
                        { text: 'OK', onPress: () => navigation.navigate("LoginScreen",{result: result.result}) },
                    ]);
                }else{
                    Alert.alert('Error', result.message, [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);
                    // console.log("error", result.error);
                }
            },(error) => {
                console.log("=====",error)
                alert("Invalid data.");
            }
        );
    }


    return (
        <Provider>
            <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, width: "100%", height: "100%", position: "relative" }}
                source={require("../../../assets/image_4.png")}
            >
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        opacity: 0.4,
                    }}
                ></View>
                <SafeAreaView style={{ width: "100%", height: "100%" }}>
                    <View style={{ flex: 1, width: "100%" }}>
                        <View style={{ flex: 2, width: "100%", alignItems: "center" }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: "50%", height: "100%" }}
                                source={require("../../../assets/t20_logo.png")}
                            />
                        </View>
                        <View
                            style={{
                                flex: 3,
                                width: "80%",
                                alignSelf: "center",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TextInput
                                onChangeText={setName}
                                value={name}
                                style={styles.inputDesign}
                                placeholder="Enter Full Name"
                            />
                            <TextInput
                                onChangeText={setMobile}
                                value={mobile}
                                style={styles.inputDesign}
                                placeholder="Enter Mobile Number"
                            />
                            <TextInput
                                onChangeText={setPin}
                                value={pin}
                                style={styles.inputDesign}
                                placeholder="Enter Pin Code"
                            />

                            <MainButton onPress={onPress} style={{ marginTop: 10 }}>
                                Registration
                            </MainButton>

                            <Text style={{ marginTop: 20, color: "white", fontSize: 12 }}>
                                Do you'be an account?
                            </Text>
                            <Pressable
                                onPress={() => navigation.navigate("LoginScreen")}
                                style={{
                                    backgroundColor: "white",
                                    paddingVertical: 2,
                                    paddingHorizontal: 10,
                                    marginTop: 5,
                                }}
                            >
                                <Text>Got login</Text>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "90%",
        alignSelf: "center",
    },
    inputDesign: {
        color: "black",
        backgroundColor: "white",
        width: "100%",
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginTop: 10,
    },
});
