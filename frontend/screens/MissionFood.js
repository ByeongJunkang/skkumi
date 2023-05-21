import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProfileImg = styled.Image`
  width: 140px;
  height: 140px;
`;


export default function Mission({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#F5F5F5",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<TouchableOpacity>
				<ProfileImg source={require("../assets/image/missionFood.png")} />
			</TouchableOpacity>
			<Text style={{
				marginTop: 30,
				fontSize: 16
			}}>오늘은 "<Text style={{fontSize: 18, fontWeight: "bold"}}>해오름 식당</Text>"" 학식 인증 미션입니다!</Text>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					borderColor: "blcak",
					borderWidth: 2,
					width: 170,
					height: 50,
					borderRadius: 10,
					marginTop: 50
				}}
				onPress={()=>navigation.navigate("TakePhoto")}
			>
				<Text>인증하기</Text>
			</TouchableOpacity>
   	 	</View>
  	);
}
