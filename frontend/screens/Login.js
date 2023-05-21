import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from "react-native"

const InfoInput = styled.TextInput`
    width: 230px;
    height: 50px;
    border-color: black;
    border-width: 2px;
    border-radius: 10px;
`;

export default function Login({navigation}){
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setTimeout(()=>{
            navigation.navigate("Home")
        }, 2000)
    },[loading])
    return(
        <View 
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}    
        >   
            <Text 
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginBottom: 30
                }}
            >SKKUMI</Text>
            <View>
                <Text>학번</Text>
                <InfoInput />
            </View>
            <View>
                <Text>비밀번호</Text>
                <InfoInput />
            </View>
            {
                loading ?
                <ActivityIndicator 
                    size= "large"
                    color="green"
                    style={{
                        marginTop: 50
                    }}
                /> 
                :
                <TouchableOpacity
                    style={{
                        backgroundColor:"black",
                        width: 200,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 50,
                        borderRadius: 20
                    }}
                    onPress={()=>setLoading(true)}
                >
                    <Text style={{color: "white"}}>로그인</Text>
                </TouchableOpacity>
            }
            
        </View>
    )
}