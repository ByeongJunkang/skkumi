import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screens/Start";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Mission from "../screens/Mission";
import MissionMarathon from "../screens/MissionMarathon";
import MissionSpace from "../screens/MissionSpace";
import MissionFood from "../screens/MissionFood";
import TakePhoto from "../screens/TakePhoto";
import Success from "../screens/Success";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MissionMarathon"
        component={MissionMarathon}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MissionSpace"
        component={MissionSpace}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MissionFood"
        component={MissionFood}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
