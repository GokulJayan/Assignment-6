import React, { useState } from 'react';
import {Alert, Modal, TouchableOpacity, Button, Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function showTransaction() {
  
  const [Load, setLoad] = useState(false);
  const toggleLoading = () => {
    setLoad(!Load);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.top}>
          <Icon style={{paddingBottom:125,paddingRight:300, position:'absolute'}} name="bars" size={30} color="#ccd8f3" />
          <Text style={{ fontSize: 15, color: '#ccd8f3', textAlign: 'center', fontWeight: 'bold', alignSelf:'flex-end', position:'absolute',paddingRight:35, paddingBottom:130}}>Deposit</Text>
          <Text style={{ fontSize: 25, color: '#ccd8f3', textAlign: 'center', fontWeight: 'bold', alignSelf:'flex-end', position:'absolute',paddingRight:30, paddingBottom:80}}>INR  5000</Text>
      </View>
      
      <View style={styles.middle}>
        <Image
          source={{ uri: 'https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png' }}
          style={{ width: 320, height: 190, paddingTop:20, paddingLeft:40, borderRadius:10}}
         />
      </View>
      
      <View style={styles.bottom}>
        
        <View>
          <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=banking&slug_icon=money-transfer' }}
            style={{ width: 65, height: 65, paddingTop:0, paddingLeft:0, borderRadius:10, backgroundColor:'#1150a9'}}
            />
 
            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=banking&slug_icon=donate' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />

            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=shopping&slug_icon=credit-card' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />

            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=network-security&slug_icon=business-card-01' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />

            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=gadgets&slug_icon=ipad' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />

            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=application&slug_icon=tab-history' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />

            <Image
            source={{ uri: 'https://flaticons.net/icon.php?slug_category=science-technology&slug_icon=power' }}
            style={{ width: 65, height: 65, paddingTop:0, marginLeft:30, borderRadius:10, backgroundColor:'#1150a9'}}
            />
            <Image
            source={{ uri: 'https://www.macmillandictionary.com/external/slideshow/full/White_full.png' }}
            style={{ width: 1, height: 1, paddingTop:0, marginLeft:30, borderRadius:10}}
            />

          </ScrollView>
        </View>

        <View>
          <Text style={{ fontSize: 20, color: '#215ab2', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:30}}>Latest Transactions</Text>
        </View>

        <View>
          <Text style={{ fontSize: 15, color: '#858585', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:75}}>Adithyan</Text>
          <Text style={{ fontSize: 15, color: '#d1d1d1', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:95}}>Transfer from 259 00 213</Text>
          <Text style={{ fontSize: 15, color: '#58c880', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingLeft:250, paddingTop:75}}>+150.00</Text>
          <Text style={{ fontSize: 15, color: '#e6e2da', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:115}}>──────────────────────────────</Text>
        </View>

        <View>
          <Text style={{ fontSize: 15, color: '#858585', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:135}}>Bakery</Text>
          <Text style={{ fontSize: 15, color: '#d1d1d1', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:155}}>Transfer to 999 11 801</Text>
          <Text style={{ fontSize: 15, color: '#eb4c60', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingLeft:255, paddingTop:135}}>-50.00</Text>
          <Text style={{ fontSize: 15, color: '#e6e2da', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:175}}>──────────────────────────────</Text>
        </View>

        <View>
          <Text style={{ fontSize: 15, color: '#858585', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:195}}>Bakery</Text>
          <Text style={{ fontSize: 15, color: '#d1d1d1', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingRight:0, paddingTop:215}}>Transfer to 999 11 801</Text>
          <Text style={{ fontSize: 15, color: '#eb4c60', textAlign: 'center', fontWeight: 'bold', position:'absolute',paddingLeft:255, paddingTop:195}}>-50.00</Text>
        </View>

        <TouchableOpacity style={styles.indicator} onPress={toggleLoading}>
          <View style={{...styles.button,}}>
          <Text style={styles.buttonText}>
            {Load? "Loading" : "Show all"}
          </Text>
          {Load && <ActivityIndicator size="small" color="green" />}   
          </View>
      </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This feature is under maintenance</Text>
            <Pressable
              style={[styles.buttonDes, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Go Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonDes, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>AI assistant</Text>
      </Pressable>
    </View>

    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  top: {
    flex:2.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#014ccb',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  middle:{
    backgroundColor:'white',
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:100,
  },

  bottom: {
    flex: 4,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30
  },

  scrollView: {
    flexDirection:'row',
    backgroundColor: 'white',
    marginHorizontal: 0,
    paddingLeft:5
  },

  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
    height: 30,
    borderRadius: 0,
  },

  buttonText: {
    color: "#b9c7ee",
    fontWeight: "bold",
    fontSize: 15
  },

  indicator:{
    paddingTop:245,
    paddingLeft:90,
  },
  



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight:20
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonDes: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#215ab2",
  },
  buttonClose: {
    backgroundColor: "#215ab2",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:30
  }
});