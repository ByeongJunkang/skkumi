import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, Text, Image } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";
import { Shadow } from "react-native-shadow-2";

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export default function Home({navigation}){
    return(
        <Container>
            <MapView
                style={{width: "100%", height: "100%"}}
                initialRegion={{
                    latitude: 37.293787,
                    longitude: 126.974317,
                    longitudeDelta: 0.002,
                    latitudeDelta: 0.002
                }}
                provider={PROVIDER_GOOGLE}
            />
            <View style={{
                position: "absolute", 
                width: "90%",
                top: "3%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}> 
                <Shadow
                        distance={5}
                        offset={[3,3]}
                >
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "white",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 90,
                            height: 45,
                            borderRadius: 15
                        }}>
                        <Text>맵 모드</Text>
                        <Image 
                            source={require("../assets/image/map.png")} 
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 10
                            }}
                        />
                    </TouchableOpacity>
                </Shadow>
                <TouchableOpacity 
                    style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={()=>navigation.navigate("Profile")}
                >
                    <Image 
                        source={require("../assets/image/profile.png")} 
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                position: "absolute", 
                width: "90%",
                bottom: "3%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Shadow
                    distance={5}
                    offset={[3,3]}
                >
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 40,
                            borderRadius: 15,
                            paddingStart: 10,
                            paddingEnd: 10,
                        }}>
                        <Text>움직인 거리  1.1km</Text>
                    </TouchableOpacity>
                </Shadow>
                <Shadow
                    distance={5}
                    offset={[3,3]}
                >
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 40,
                            borderRadius: 15,
                            paddingStart: 10,
                            paddingEnd: 10,
                        }}>
                        <Text>방문한 장소</Text>
                    </TouchableOpacity>
                </Shadow>
                <Shadow
                    distance={5}
                    offset={[3,3]}
                >
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 40,
                            borderRadius: 15,
                            paddingStart: 10,
                            paddingEnd: 10,
                        }}>
                        <Text>오늘의 미션</Text>
                    </TouchableOpacity>
                </Shadow>
            </View>
        </Container>
    );
}