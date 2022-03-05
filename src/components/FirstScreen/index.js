import React from 'react';
import {Alert, Modal, TouchableOpacity, Button, Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator} from 'react-native';

export default function FirstScreen({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/powerrangers/images/f/f0/Power_Rangers_SPD_S13_Logo_2005.png/revision/latest?cb=20210315001816' }}
          style={{ width: 300, height: 140, marginLeft:50,paddingTop:20, paddingLeft:100, borderRadius:10}}
         />

         <Text style={styles.text2}>

         Power Rangers S.P.D. is the thirteenth season of the American television series, Power Rangers, and is based on the 28th Super Sentai series Tokusou Sentai Dekaranger. 
         The season shares its title with the Korean dub of Dekaranger in South Korea, whose logo is similar to the American series. 
         The initials in the title stand for "Space Patrol Delta"; in Dekaranger, it stood for Special Police Dekaranger, and in the South Korean dub of Dekaranger, it stood for Special Police Delta.
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
    paddingTop:50,
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