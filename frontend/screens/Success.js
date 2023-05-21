import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native"

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

const Text1 = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export default function Success({navigation}){
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        setTimeout(()=> {
            setLoading(false)
        }, 3000)
    },[])
    if(loading){
        <Container>
            <ActivityIndicator
                size= "large"
                color= "green"
            />
        </Container>
    }
    return(
        <Container>
            <Text1>축하합니다!</Text1>
            <Text1>오늘의 미션을 완료하셨어요!</Text1>
            <TouchableOpacity 
                style={{
                    width: 120,
                    height: 45,
                    marginTop: 80,
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: "center"
                }}
                onPress={()=>navigation.navigate("Home")}
            >
                <Text style={{fontSize: 20}}>홈으로</Text>
            </TouchableOpacity>
        </Container>
    )
}