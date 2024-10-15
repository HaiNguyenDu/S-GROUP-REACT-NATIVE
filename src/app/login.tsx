import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export default function LoginScreen()
{
    const signUpHeight = useRef(new Animated.Value(90)).current
    const signUpFontSize = useRef(new Animated.Value(30)).current
    const loginFontSize = useRef(new Animated.Value(45)).current
    const loginOpacity = useRef(new Animated.Value(1)).current    
    function signUpAnimated() {
        Animated.timing(
            signUpHeight,
            {
                toValue:560,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            signUpFontSize,
            {
                toValue:45,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            loginFontSize,
            {
                toValue:30,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            loginOpacity,
            {
                toValue:0,
                duration:500,
                useNativeDriver:false
            }
        ).start()
    }
    function loginAnimated() {
        Animated.timing(
            loginOpacity,
            {
                toValue:1,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            loginFontSize,
            {
                toValue:45,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            signUpFontSize,
            {
                toValue:30,
                duration:500,
                useNativeDriver:false
            }
        ).start()
        Animated.timing(
            signUpHeight,
            {
                toValue:90,
                duration:500,
                useNativeDriver:false
            }
        ).start()
    }
    return(     
            <View style={styles.container}>
                <ImageBackground 
                source={{uri:"https://wallpaper.forfun.com/fetch/63/63394f125731682d266847a6099ae6e8.jpeg?h=900&r=0.5"}} 
                resizeMode="cover"
                style={styles.imgBackground}
                >
                    <View style={styles.login}>
                        <TouchableOpacity
                        onPress={loginAnimated}
                        >
                            <Animated.Text style={{fontSize:loginFontSize,color:Colors.white,fontWeight:600,marginTop:20}}>Login</Animated.Text>
                        </TouchableOpacity>
                        <Animated.View style={[styles.body,{opacity:loginOpacity,backgroundColor:"rgba(0,0,0,0.5)",}]}>
                                <TextInput style={styles.textInput}
                                placeholder="UserName"
                                placeholderTextColor={"black"}
                                ></TextInput>
                                <TextInput style={styles.textInput}
                                placeholder="Password"
                                placeholderTextColor={"black"}
                                ></TextInput>
                                <TouchableOpacity>
                                    <View style={styles.button}>
                                        <Text style={{color:Colors.white,fontSize:18}}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                        </Animated.View>
                    </View>
                    <Animated.View style={[styles.signUp,{height:signUpHeight}]}>
                        <TouchableOpacity
                        onPress={signUpAnimated}
                        >
                             <Animated.Text style={{fontSize:signUpFontSize,color:"#473C8B",fontWeight:600}}>SignUp</Animated.Text>
                        </TouchableOpacity>
                        <View style={styles.body1}>
                                <TextInput style={styles.textInput1}
                                placeholder="UserName"
                                placeholderTextColor={"black"}
                                ></TextInput>
                                <TextInput style={styles.textInput1}
                                placeholder="Password"
                                placeholderTextColor={"black"}
                                ></TextInput>
                                <TextInput style={styles.textInput1}
                                placeholder="Confirm Password"
                                placeholderTextColor={"black"}
                                ></TextInput>
                                <TouchableOpacity>
                                    <View style={styles.button}>
                                        <Text style={{color:Colors.white,fontSize:18}}>SignUp</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                    </Animated.View>
                </ImageBackground>
            </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgBackground:{
        flex:1,
    },
    body:{
        width:"90%",
        height:350,
        alignItems:"center",
        margin:"auto",
        borderRadius:20
    },
    body1:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        margin:"auto",
        justifyContent:"flex-start",
    },
    login:{
        width:"100%",
        height:450,
        alignItems:"center",
        marginTop:180,
        margin:"auto"
    },
    textInput:{
        marginTop:50,
        width:"70%",
        height:60,
        color:'black',
        borderWidth:1,
        borderColor:Colors.white, 
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        fontWeight:"400"
  
    },
    button:{
        width:200,
        height:50,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#473C8B",
      
    },
    signUp:{
        position:"absolute",
        width:"100%",
        backgroundColor:"white",
        padding:20,
        alignItems:"center",
        borderTopStartRadius:50,
        borderTopRightRadius:50,
        bottom:0,
        gap:40
    },
    textInput1:{
        marginBottom:30,
        width:"70%",
        height:60,
        color:'black',
        borderWidth:1,
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        fontWeight:"400",
        borderColor:"#473C8B",
        elevation: 10, 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        shadowColor:"#473C8B"
    }
})

