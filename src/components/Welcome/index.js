import React from 'react';
import {Alert, Modal, TouchableOpacity, Button, Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator} from 'react-native';

export default function WelcomeScreen({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/usmodernculture/images/2/2c/Power_rangers_logo.jpg/revision/latest?cb=20090202220450' }}
          style={{ width: 300, height: 140, marginLeft:50,paddingTop:20, paddingLeft:100, borderRadius:10}}
         />

         <Text style={styles.text2}>
         Power Rangers is an American entertainment and merchandising franchise built around a live-action superhero television series, based on the Japanese tokusatsu franchise Super Sentai. 
         Produced first by Saban Entertainment, second by BVS Entertainment, later by Saban Brands, and today by SCG Power Rangers LLC and its parent company, Hasbro, the Power Rangers television series takes much of its footage from the Super Sentai television series.
         Despite initial criticism that its action violence targeted child audiences, the franchise has been commercially successful.
         </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=>navigation.navigate("Power Rangers")} style={styles.Button}>
          <Text style={styles.text1}>Explore</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
  },

  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize:28,
    color:"black"
  },

  text1: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize:18,
    color:'white'
  },

  text2: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize:18,
    color:'black',
    textAlign: 'justify',
    padding:35
  },

  Button: {
    borderRadius:20,
    backgroundColor:"red",
    padding: "2%"
  },

  top: {
    paddingTop:20
  },

  bottom: {
    marginVertical: 30,
    paddingHorizontal: 30
  },

  // scrollView: {
  //   flexDirection:'row',
  //   backgroundColor: 'white',
  //   marginHorizontal: 0,
  //   paddingLeft:5
  // },

  // button: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   width: 150,
  //   height: 30,
  //   borderRadius: 0,
  // },

  // buttonText: {
  //   color: "#b9c7ee",
  //   fontWeight: "bold",
  //   fontSize: 15
  // },

  // indicator:{
  //   paddingTop:245,
  //   paddingLeft:90,
  // },
  



  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "flex-end",
  //   paddingRight:20
  // },
  // modalView: {
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 2,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5
  // },
  // buttonDes: {
  //   borderRadius: 20,
  //   padding: 10,
  // },
  // buttonOpen: {
  //   backgroundColor: "#215ab2",
  // },
  // buttonClose: {
  //   backgroundColor: "#215ab2",
  // }, 
});