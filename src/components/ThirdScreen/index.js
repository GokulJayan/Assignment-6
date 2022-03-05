import React from 'react';
import {Alert, Modal, TouchableOpacity, Button, Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator} from 'react-native';

export default function ThirdScreen({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/powerrangers/images/5/51/Power_Rangers_RPM_logo.png/revision/latest?cb=20201211044443' }}
          style={{ width: 250, height: 150, marginLeft:73,paddingTop:0, paddingLeft:100, borderRadius:10}}
         />

         <Text style={styles.text2}>

         Power Rangers RPM is the seventeenth season of the American television series Power Rangers, which uses footage, costumes, and other props from the Super Sentai series. 
         In the case of RPM, the season was an adaptation of Engine Sentai Go-onger, the thirty-second installment of the series.
         The season was the eighth and final to air on ABC stations, premiering March 7, 2009 on ABC Kids. 
         Due to the low ratings of the preceding season, Jungle Fury, RPM was also the final season to be produced and distributed.
         </Text>
      </View>

      <View style={styles.bottom}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Dino Thunder")} style={styles.Button}>
          <Text style={styles.text1}>See Next</Text>
        </TouchableOpacity> */}
      </View>
   
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    // flex: 1,
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
    paddingTop:40,
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
    // flex:1,
    paddingTop:20
  },

  bottom: {
    // flex: 2,
    marginVertical: 70,
    paddingHorizontal: 30
  },
})