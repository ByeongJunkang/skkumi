import React, { useState } from "react";
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
  const [startActivated, setStartActivated] = useState(false);

  const handleStart = () => {
    setStartActivated(true);
    navigation.navigate("Home", { startActivated: true }); // Pass the value as a parameter
  };

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
        <ProfileImg source={require("../assets/image/missionMarathon.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 9,
        }}
      >
        <Text>MARATHON MISSION WIP</Text>
      </TouchableOpacity>
      <View style={{ width: "90%", marginTop: 40 }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Shadow distance={5} offset={[3, 3]}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: 40,
                paddingStart: 10,
                paddingEnd: 10,
                borderRadius: 10,
              }}
              onPress={() => handleStart()}
            >
              <Text>START</Text>
            </TouchableOpacity>
          </Shadow>
          <Shadow distance={5} offset={[3, 3]}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: 40,
                paddingStart: 10,
                paddingEnd: 10,
                borderRadius: 10,
              }}
            >
              <Text>PAUSE</Text>
            </TouchableOpacity>
          </Shadow>
          <Shadow distance={5} offset={[3, 3]}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: 40,
                paddingStart: 10,
                paddingEnd: 10,
                borderRadius: 10,
              }}
            >
              <Text>STOP</Text>
            </TouchableOpacity>
          </Shadow>
        </View>
      </View>
    </View>
  );
}
