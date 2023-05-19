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
        <ProfileImg source={require("../assets/image/mission.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 9,
        }}
      >
        <Nickname>Mission Page WIP</Nickname>
        <Image
          source={require("../assets/image/write.png")}
          style={{
            width: 15,
            height: 15,
            marginTop: 5,
            marginLeft: 3,
          }}
        />
      </TouchableOpacity>
      <View style={{ width: "90%", marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>미션을 선택하세요</Text>
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
              onPress={() => navigation.navigate("MissionMarathon")}
            >
              <Text>학교 마라톤</Text>
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
              onPress={() => navigation.navigate("MissionSpace")}
            >
              <Text>공간 방문 인증</Text>
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
              onPress={() => navigation.navigate("MissionFood")}
            >
              <Text>친구와 학식 한끼</Text>
            </TouchableOpacity>
          </Shadow>
        </View>
      </View>
      <View style={{ width: "90%", marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>뱃지</Text>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: -7,
            }}
          >
            <BadgeImg source={require("../assets/image/badge.png")} />
            <Text style={{ marginTop: 10 }}>10km 마라토너</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <BadgeImg source={require("../assets/image/badge.png")} />
            <Text style={{ marginTop: 10 }}>미션 올클리어</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <BadgeImg source={require("../assets/image/badge.png")} />
            <Text style={{ marginTop: 10 }}>학식 러버</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
