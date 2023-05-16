import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

const ProfileImg = styled.Image`
  width: 140px;
  height: 140px;
`;

const Nickname = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const BadgeImg = styled.Image`
  width: 65px;
  height: 65px;
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
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 9,
        }}
      >
        <Text>FOOD MISSION WIP</Text>
      </TouchableOpacity>
    </View>
  );
}
