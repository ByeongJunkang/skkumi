import React from "react";
import styled from "styled-components/native";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Background = styled.View`
    flex: 1;
    background-color: #3ADF00;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

const Button = styled.TouchableOpacity`
    background-color: black;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 50px;
    margin-top: 12px;
    border-radius: 15px;
`;

export default function Start({navigation}){
    return(
        <Background>
            <Image source={require("../assets/image/vector.png")} />
            <Title style={{marginTop: 10}}>SKKU</Title>
            <Title>MAPPIN</Title>
            <View style={{
                alignItems: "center",
                position: "absolute",
                width: "100%",
                bottom: 50
            }}>
                <Text style={{color: "gray"}}>맵핀이 처음이신가요?</Text>
                <Button onPress={()=>navigation.navigate("Home")}>
                    <Text style={{color: "white", fontSize: 15}}>회원가입</Text>
                </Button>
                <Button onPress={()=>navigation.navigate("Home")}>
                    <Text style={{color: "white", fontSize: 15}}>로그인</Text>
                </Button>
            </View>
        </Background>
    )
}