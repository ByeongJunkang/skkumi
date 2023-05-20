import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, Text, Image, ScrollView, FlatList } from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  MarkerAnimated,
} from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";
import { Shadow } from "react-native-shadow-2";
import { info } from "../info";
import { post } from "../post";
import * as Location from "expo-location";
import haversine from "haversine";

const Container = styled.View`
	flex: 1;
	align-items: center;
`;

const PlaceText = styled.Text`
	font-size: 16px;
	font-weight: bold;
`;

export default function Home({ navigation, route }) {
	const [isMap, setIsMap] = useState(true)
	const [isBoard, setIsBoard] = useState(false);
	const [infoVisible, setInfoVisible] = useState(false);
	const [place, setPlace] = useState(null);
	const [desc, setDesc] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [fac, setFac] = useState(null);
	

	const [location, setLocation] = useState({
		latitude: 37.293787,
		longitude: 126.974317,
		longitudeDelta: 0.002,
		latitudeDelta: 0.002,
	});
	function selectInfo(id) {
		setInfoVisible(!infoVisible);
		setPlace(info[id]?.place);
		setDesc(info[id]?.desc);
		setPhoto(info[id]?.photo);
		setFac(info[id]?.fac)
	}
	const renderPost = ({ item: post }) => {
		return(
			<TouchableOpacity 
				style={{
					alignSelf: "center",
					width: "85%",
					height: 60,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					borderBottomColor: "gray",
					borderBottomWidth: 1
				}}
			>
				<Text>{post.title}</Text>
				<Text>{post.time}</Text>
			</TouchableOpacity>
		)
	}

	const { startActivated } = route?.params || {}; // MissionMarthon 페이지에서 넘어온 startActivated params
	console.log("startActivated from Mission Marathon :", startActivated);
	//   console.log(
	//     "Route Length",
	//     distanceStates.routeCoordinates.length,
	//     "Last Route :",
	//     distanceStates.routeCoordinates[distanceStates.routeCoordinates.length - 1]
	//   );

	const [locationSubscription, setLocationSubscription] = useState(null);
	const [distanceStates, setDistanceStates] = useState({
		routeCoordinates: [],
		distanceTravelled: 0,
		prevLatLng: {},
		coordinate: new AnimatedRegion({
		latitude: 37.293787,
		longitude: 126.974317,
		}),
	});

	async function getCurrentLocation() {
		console.log("Getting location...");
		try {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			console.log("Location permission denied");
			return;
		}

		console.log("Permission granted...");
		const subscription = await Location.watchPositionAsync(
			{
			accuracy: Location.Accuracy.High,
			timeInterval: 300, // update every 0.3 seconds, 버벅거리면 5 sec으로 변경
			},
			(location) => {
			const { latitude, longitude } = location.coords;
			const newCoordinate = {
				latitude,
				longitude,
			};
			setLocation({
				latitude,
				longitude,
				latitudeDelta: 0.002,
				longitudeDelta: 0.002,
			});
			setDistanceStates({
				routeCoordinates: distanceStates.routeCoordinates.concat([
				newCoordinate,
				]),
				distanceTravelled:
				distanceStates.distanceTravelled + calcDistance(newCoordinate),
				prevLatLng: newCoordinate,
			});

			console.log(
				"prevLatLng : ",
				distanceStates.prevLatLng,
				" newCoord : ",
				newCoordinate
			);
			// if Mission Marthon has Started => activate markUserRoute()
			}
		);

		setLocationSubscription(subscription);
		} catch (err) {
		console.warn(err);
		}
	}

	//거리 계산
	function calcDistance(newLatLng) {
		const { prevLatLng } = distanceStates;
		console.log("Haversine Calculating,,, ");
		return haversine(prevLatLng, newLatLng) || 0;
	}

	useEffect(() => {
		console.log("Calling getCurrentLocation from useEffect...");
		getCurrentLocation();
		return () => {
			if (locationSubscription) {
				locationSubscription.remove();
			}
		};
	}, []);

	if (!location) {
		return <View />;
	}

	return (
		<Container>
			{
				isMap ? 
				(
					<MapView
						style={{ width: "100%", height: "100%" }}
						region={location}
						provider={PROVIDER_GOOGLE}
						showsUserLocation
						followsUserLocation
						loadingEnabled
					>
						{/* routeCoordinates array를 통해 Polyline을 그립니다 */}
						<Polyline
						coordinates={distanceStates.routeCoordinates}
						strokeWidth={10}
						/>
						{/* <Marker.Animated
						ref={(marker) => {
							this.marker = marker;
						}}
						coordinate={{
							latitude: location.latitude,
							longitude: location.longitude,
						}}
						/> */}

						{/* {location && (
						<Marker
							coordinate={{
							latitude: location.latitude,
							longitude: location.longitude,
							}}
							title="Current Location"
						>
							<Image
							source={require("../assets/image/currentLocation.png")}
							style={{ height: 35, width: 35 }}
							/>
						</Marker>
						)} */}
					</MapView>
				):(	
					<MapView
						style={{ width: "100%", height: "100%" }}
						region={location}
						provider={PROVIDER_GOOGLE}
					>
						<Marker //디도
							coordinate={{
								latitude: 37.293948,
								longitude: 126.974881,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(0)
								setIsBoard(false)
							}}
						/>
						<Marker //제2공
							coordinate={{
								latitude: 37.295126,
								longitude: 126.976885,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(1)
								setIsBoard(false)
							}}
						/>
						<Marker //반관
							coordinate={{
								latitude: 37.291716,
								longitude: 126.977728,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(2)
								setIsBoard(false)
							}}
						/>
						<Marker //제1공
							coordinate={{
								latitude: 37.293644,
								longitude: 126.976389,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(3)
								setIsBoard(false)
							}}
						/>
						<Marker //산학관
							coordinate={{
								latitude: 37.296008,
								longitude: 126.975870,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(4)
								setIsBoard(false)
							}}
						/>
						<Marker //생명공학관
							coordinate={{
								latitude: 37.295805,
								longitude: 126.973812,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(5)
								setIsBoard(false)
							}}
						/>
						<Marker //의학관
							coordinate={{
								latitude: 37.292201,
								longitude: 126.973289,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(6)
								setIsBoard(false)
							}}
						/>
						<Marker //N센터
							coordinate={{
								latitude: 37.291709,
								longitude: 126.975564,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(7)
								setIsBoard(false)
							}}
						/>
						<Marker //약학관
							coordinate={{
								latitude: 37.291964,
								longitude: 126.976615,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(8)
								setIsBoard(false)
							}}
						/>
						<Marker //학생회관
							coordinate={{
								latitude: 37.294160,
								longitude: 126.973594,
							}}
							pinColor="black"
							onPress={() => {
								selectInfo(9)
								setIsBoard(false)
							}}
						/>
					</MapView>
				)
			}
			
			<View
				style={{
				position: "absolute",
				width: "90%",
				top: "3%",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				}}
			>
				<Shadow distance={5} offset={[3, 3]}>
				<TouchableOpacity
					style={{
					backgroundColor: "white",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					width: 90,
					height: 45,
					borderRadius: 15,
					}}
					onPress={()=>{
						setIsMap(!isMap)
						setInfoVisible(false)
						setIsBoard(false)
						setLocation({
							latitude: 37.293787,
							longitude: 126.974317,
							longitudeDelta: 0.002,
							latitudeDelta: 0.002
						})
					}}
				>	
					{
						isMap ? 
						(
							<Text>맵 모드</Text>
						):(
							<Text>핀 모드</Text>
						)
					}
					
					<Image
					source={require("../assets/image/map.png")}
					style={{
						width: 20,
						height: 20,
						marginLeft: 10,
					}}
					/>
				</TouchableOpacity>
				</Shadow>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Profile")}
				>
					<Image
						source={require("../assets/image/profile.png")}
						style={{
						width: 40,
						height: 40,
						}}
					/>
				</TouchableOpacity>
			</View>
			{infoVisible ? (
				<View
					style={{
						position: "absolute",
						width: "100%",
						height: "60%",
						bottom: "0%",
					}}
				>
					<Shadow
						distance={8}
						offset={[0, -2]}
						style={{
						width: "100%",
						height: "100%",
						}}
					>	
						{
							!isBoard ? 
							(
								<ScrollView
									style={{
										width: "100%",
										height: "100%",
										backgroundColor: "white",
										borderTopStartRadius: 20,
										borderTopEndRadius: 20,
									}}
								>	
									<View
										style={{
											width: "100%",
											height: "100%",
											alignItems: "center",
										}}
									>
										<View
											style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-between",
											width: "90%",
											marginTop: 20,
											}}
										>
											<PlaceText>{place}</PlaceText>
											<TouchableOpacity
												style={{
													alignItems: "center",
													justifyContent: "center",
													backgroundColor: isBoard ? "white":"lightgray",
													paddingStart: 15,
													paddingEnd: 15,
													paddingTop: 5,
													paddingBottom: 5,
													borderRadius: 10,
												}}
												onPress={()=>setIsBoard(!isBoard)}
											>
												<Image
													source={require("../assets/image/vector.png")}
													style={{
													width: 18,
													height: 25,
													}}
												/>
											</TouchableOpacity>
										</View>	
										<Text style={{ width: "80%", marginTop: 15 }}>{desc}</Text>
										<Image 
											source={{uri: photo}}
											style={{
												width: 300,
												height: 180,
												borderRadius: 15,
												marginTop: 20
											}}
										/>
										<View style={{width: "90%", marginTop: 30, marginBottom: 15}}>
											<PlaceText style={{marginBottom: 15}}>편의 시설 정보</PlaceText>
											<Text>{fac}</Text>
										</View>
									</View>
								</ScrollView>
							):(
								<View
									style={{
										width: "100%",
										height: "100%",
										alignItems: "center",
										backgroundColor: "white",
										borderTopStartRadius: 20,
										borderTopEndRadius: 20,
									}}
								>	
									<View
										style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										width: "90%",
										marginTop: 20,
										}}
									>
										<PlaceText>{place}</PlaceText>
										<TouchableOpacity
											style={{
												alignItems: "center",
												justifyContent: "center",
												backgroundColor: isBoard ? "white":"lightgray",
												paddingStart: 15,
												paddingEnd: 15,
												paddingTop: 5,
												paddingBottom: 5,
												borderRadius: 10,
											}}
											onPress={()=>setIsBoard(!isBoard)}
										>
											<Image
												source={require("../assets/image/vector.png")}
												style={{
												width: 18,
												height: 25,
												}}
											/>
										</TouchableOpacity>
									</View>	
									<FlatList
										showsVerticalScrollIndicator={false}
										data={post}
										renderItem={renderPost}
										style={{
											marginTop: 20,
											width: "100%"
										}}
									/>
									<TouchableOpacity
										style={{
											position: "absolute",
											bottom: 10,
											right: 10,
											backgroundColor: "black",
											borderRadius: 100,
											width: 50,
											height: 50,
											alignItems: "center",
											justifyContent: "center"
										}}
									>
										<Text style={{color: "white", fontSize: 40, marginTop: -5}}>+</Text>
									</TouchableOpacity>
								</View>
							)
						}
					</Shadow>
				</View>
			) : (
				<View
				style={{
					position: "absolute",
					width: "90%",
					bottom: "3%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
				>
				<Shadow distance={5} offset={[3, 3]}>
					<TouchableOpacity
					style={{
						backgroundColor: "white",
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: 15,
						paddingStart: 10,
						paddingEnd: 10,
					}}
					>
					<Text>움직인 거리 0.1km</Text>
					</TouchableOpacity>
				</Shadow>
				<Shadow distance={5} offset={[3, 3]}>
					<TouchableOpacity
					style={{
						backgroundColor: "white",
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: 15,
						paddingStart: 10,
						paddingEnd: 10,
					}}
					>
					<Text>방문한 장소</Text>
					</TouchableOpacity>
				</Shadow>
				<Shadow distance={5} offset={[3, 3]}>
					<TouchableOpacity
					style={{
						backgroundColor: "white",
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: 15,
						paddingStart: 10,
						paddingEnd: 10,
					}}
					onPress={() => navigation.navigate("Mission")}
					>
					<Text>오늘의 미션</Text>
					</TouchableOpacity>
				</Shadow>
				</View>
			)}
			{
				isMap ? (
					null
				):(
					<View
						style={{
							position: "absolute",
							bottom: 80,
							right: 20,
						}}
					>	
						<Text style={{textAlign: "center", marginBottom: 4}}>핀 추가</Text>
						<TouchableOpacity
							style={{
								backgroundColor: "black",
								borderRadius: 100,
								width: 50,
								height: 50,
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<Text style={{color: "white", fontSize: 40, marginTop: -5}}>+</Text>
						</TouchableOpacity>
					</View>
					
				)
			}
		</Container>
	);
}
