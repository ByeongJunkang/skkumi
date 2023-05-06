import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";
import { Shadow } from "react-native-shadow-2";
import { info } from "../info";

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

const PlaceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export default function Home({navigation}){
    const [infoVisible, setInfoVisible] = useState(false);
    const [place, setPlace] = useState(null);
    const [desc, setDesc] = useState(null);

    function SelectInfo(id){
        setInfoVisible(!infoVisible);
        setPlace(info[id].place);
        setDesc(info[id].desc);
    }

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
            >
                    <Marker
                        coordinate={{
                            latitude: 37.293948,
                            longitude: 126.974881
                        }}
                        pinColor="black"
                        onPress={()=>SelectInfo(0)}
                    />
            </MapView>
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
            {
                infoVisible ? 
                    <View style={{
                        position: "absolute", 
                        width: "100%",
                        height: "20%",
                        bottom: "0%",
                    }}>
                        <Shadow
                            distance={8}
                            offset={[0,-2]}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            <View style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "white",
                                borderTopStartRadius: 20,
                                borderTopEndRadius: 20,
                                alignItems: "center"
                            }}>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "90%",
                                    marginTop: 20
                                }}>
                                    <PlaceText>{place}</PlaceText>
                                    <TouchableOpacity style={{
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        backgroundColor: "lightgray",
                                        paddingStart: 15,
                                        paddingEnd: 15,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        borderRadius: 10
                                    }}>
                                        <Image 
                                            source={require("../assets/image/vector.png")}
                                            style={{
                                                width: 18,
                                                height: 25
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{width: "90%", marginTop: 15}}>{desc}</Text>
                            </View>
                        </Shadow>
                    </View>
                    :
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
            }
        </Container>
    );
}