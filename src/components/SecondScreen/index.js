import React from 'react';
import {Alert, Modal, TouchableOpacity, Button, Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator} from 'react-native';

export default function FirstScreen({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/powerrangers/images/9/97/Power_Rangers_Dino_Thunder_S12_Logo.png/revision/latest?cb=20210313233258' }}
          style={{ width: 300, height: 70, marginLeft:50,paddingTop:190, paddingLeft:100, borderRadius:10}}
         />

         <Text style={styles.text2}>
         Power Rangers Dino Thunder is an American tokusatsu television series, the twelfth season of the Power Rangers franchise. 
         This incarnation of Power Rangers was adapted from Bakuryū Sentai Abaranger, the 27th entry of Toei Company's long-running Super Sentai franchise.
         Dino Thunder was also the subtitle of the Korean dub of Abaranger in South Korea and had a similar/identical logo to the American version as well. 
         It was the first series to be aired on Toon Disney as part of Jetix.
         </Text>
      </View>

      <View style={styles.bottom}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate(" ")} style={styles.Button}>
          <Text style={styles.text1}>Exit</Text>
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
    paddingTop:20,
  },

  bottom: {
    // flex: 2,
    paddingHorizontal: 30
  },
})