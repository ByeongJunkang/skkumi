import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { Image, TouchableOpacity, Text } from "react-native";
import { Camera } from 'expo-camera';

const Container = styled.View`
    flex: 1;
`;

const TakePhotoButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  margin-bottom: 30px;
  right: 13%;
`;

const ImageBox = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

export default function TakePhoto({navigation}){
    const permission = Camera.requestCameraPermissionsAsync();
    const [cameraReady, setCameraReady] = useState(false);
    const [photoUri, setPhotoUri] = useState("");
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    const [zoom, setZoom] = useState(0);
    const camera = useRef();
    const [PhotoURIs, SetPhotoURIs] = useState([]); //선택한 사진 uri 배열
    const onCameraReady = () => setCameraReady(true);

    const takePhoto = async () => {
        if (camera.current && cameraReady) {
            const photo = await camera.current.takePictureAsync({
                quailty: 0.5,
            });
            //console.log("photo : ",photo);
            SetPhotoURIs([...PhotoURIs, photo.uri]); // 배열에 uri 추가
            setPhotoUri(photo.uri);
            console.log("TakePostPhoto photoURIs : ", PhotoURIs);
        }
    };

    return(
        <Container>
            {
                photoUri === "" ? (
                    <Camera
                        type={type}
                        style={{ flex: 1, width: "135%", alignItems: 'center', justifyContent: 'flex-end' }}
                        zoom={zoom}
                        flashMode={flashMode}
                        ref={camera}
                        onCameraReady={onCameraReady}>
                        <TakePhotoButton onPress={async () => await takePhoto()} />
                    </Camera>
                ) : (
                    <ImageBox>
                        <Image source={{ uri: photoUri }} style={{ width: "120%", height: "100%", left: "10%" }} />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                backgroundColor: "white",
                                width: 120,
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center",
                                bottom: 30,
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 10
                            }}
                            onPress={()=>navigation.navigate("Success")}
                        >
                            <Text style={{fontSize: 20}}>인증하기</Text>
                        </TouchableOpacity>
                    </ImageBox>
                )
            }
        </Container>
    )
}