// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FirstScreen from "../src/components/FirstScreen"
// import SecondScreen from "../src/components/SecondScreen"
// import WelcomeScreen from "../src/components/Welcome"
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Tab = createBottomTabNavigator();

// export default function TabNav(){
//     return(
//       <Tab.Navigator>        
//         <Tab.Screen 
//         name="SPD" 
//         component={FirstScreen}
//         options={{
//           tabBarLabel: "SPD",          
//           tabBarIcon: ({color,size}) =>(
//             <Icon name="user" size={25} color="#900" />
//           ),
//         }}/>

//         <Tab.Screen 
//         name="Dino Thunder" 
//         component={SecondScreen}
//         options={{
//           tabBarLabel: "Dino",          
//           tabBarIcon: ({color,size}) =>(
//             <Icon name="user" size={25} color="#900" />
//           ),
//         }}/>
//       </Tab.Navigator>
//     )
// }