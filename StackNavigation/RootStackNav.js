import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from "../src/components/Welcome"
import FirstScreen from "../src/components/FirstScreen"
import SecondScreen from "../src/components/SecondScreen"
import ThirdScreen from "../src/components/ThirdScreen"
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function TabNav() {
    return (
        <Tab.Navigator>        
        <Tab.Screen 
        name="SPD" 
        component={FirstScreen}
        options={{
          tabBarLabel: "SPD",          
          tabBarIcon: ({color,size}) =>(
            <Icon name="circle" size={25} color="#900" />
          ),
        }}/>

        <Tab.Screen 
        name="Dino Thunder" 
        component={SecondScreen}
        options={{
          tabBarLabel: "Dino",          
          tabBarIcon: ({color,size}) =>(
            <Icon name="circle" size={25} color="green" />
          ),
        }}/>

        <Tab.Screen 
        name="RPM" 
        component={ThirdScreen}
        options={{
          tabBarLabel: "RPM",          
          tabBarIcon: ({color,size}) =>(
            <Icon name="circle" size={25} color="blue" />
          ),
        }}/>

      </Tab.Navigator>
    );
  }

// function DrawerNav() {
//     return (
//     <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={HomeScreen} />
//             <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         </Drawer.Navigator>
//     </NavigationContainer>
//     );
// }


export default function RootStackNav(){
    return(
    <Stack.Navigator>
        <Stack.Screen name=" " component={WelcomeScreen}/>
        <Stack.Screen name="Power Rangers" component={TabNav}/>
     </Stack.Navigator>
    )
}


