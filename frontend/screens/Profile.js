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

export default function Profile({navigation}){
    return(
        <View style={{
            flex: 1,
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            justifyContent: "center"
        }}> 
            <TouchableOpacity>
                <ProfileImg source={require("../assets/image/profile.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                marginLeft: 9
            }}>
                <Nickname>Lv.3 성균관대 고양이</Nickname>
                <Image 
                    source={require("../assets/image/write.png")} 
                    style={{
                        width: 15,
                        height: 15,
                        marginTop: 5,
                        marginLeft: 3
                    }}
                />
            </TouchableOpacity>
            <View style={{width: "90%", marginTop: 40}}>
                <Text style={{fontWeight: "bold"}}>오늘 기록</Text>
                <View style={{
                    width: "100%",
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    marginTop: 15,
                }}>
                    <Shadow
                        distance={5}
                        offset={[3,3]}
                    >
                        <View style={{
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            height: 40,
                            paddingStart: 10,
                            paddingEnd: 10,
                            borderRadius: 10
                        }}>
                            <Text>움직인 거리  1.1km</Text>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={5}
                        offset={[3,3]}
                    >
                        <View style={{
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            height: 40,
                            paddingStart: 10,
                            paddingEnd: 10,
                            borderRadius: 10
                        }}>
                            <Text>방문한 장소  3</Text>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={5}
                        offset={[3,3]}
                    >
                        <View style={{
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            height: 40,
                            paddingStart: 10,
                            paddingEnd: 10,
                            borderRadius: 10
                        }}>
                            <Text>오늘의 미션</Text>
                        </View>
                    </Shadow>
                </View>
            </View>
            <View style={{width: "90%", marginTop: 40}}>
                <Text style={{fontWeight: "bold"}}>뱃지</Text>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    marginTop: 15,
                }}>
                    <View style={{alignItems: "center", justifyContent: "center", marginRight: -7}}>
                        <BadgeImg source={require("../assets/image/badge.png")}/>
                        <Text style={{marginTop: 10}}>10km 마라토너</Text>
                    </View>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <BadgeImg source={require("../assets/image/badge.png")}/>
                        <Text style={{marginTop: 10}}>미션 올클리어</Text>
                    </View>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <BadgeImg source={require("../assets/image/badge.png")}/>
                        <Text style={{marginTop: 10}}>학식 러버</Text>
                    </View>
                </View>
            </View>
            <View style={{width: "90%", marginTop: 40}}>
                <Text style={{fontWeight: "bold"}}>오늘 기록</Text>
                <View style={{
                    width: "75%",
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    marginTop: 15,
                    alignSelf: "center"
                }}>
                    <Shadow
                        distance={5}
                        offset={[3,3]}
                    >
                        <TouchableOpacity style={{
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            height: 40,
                            width: 120,
                            paddingStart: 10,
                            paddingEnd: 10,
                            borderRadius: 10
                        }}>
                            <Text>내가 생성한 핀</Text>
                        </TouchableOpacity>
                    </Shadow>
                    <Shadow
                        distance={5}
                        offset={[3,3]}
                    >
                        <TouchableOpacity style={{
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            height: 40,
                            width: 120,
                            paddingStart: 10,
                            paddingEnd: 10,
                            borderRadius: 10
                        }}>
                            <Text>공감한 핀</Text>
                        </TouchableOpacity>
                    </Shadow>
                </View>
            </View>
        </View>
    )
}