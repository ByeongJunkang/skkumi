import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screens/Start";
import Profile from "../screens/Profile";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function MainNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Start"
                component={Start}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}