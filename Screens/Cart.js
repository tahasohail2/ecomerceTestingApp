import React, {useEffect, useState} from "react";
import { Card,Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import {db} from "../config/firebase";
import firebase from "firebase";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Cart = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        db.ref(`users/`).on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setData(responselist)
            console.log(snapshot.val())
            
        });
        }
        
        useEffect(() => {
          getData();
        }, []);

        
           
        

    return(
        <ScrollView>
        <View style={styles.container}>
            
            <View>
            {data.map((item,key) => {
                return(
                        <View style={styles.card}>
                        <Card containerStyle={styles.cardContainer} key={key}>
                        <Text style={styles.text}>{item.username}</Text>
                        <Text style={styles.text1}>{item.price}</Text>
                        <Image style={styles.image} source={{uri: item.profile_picture}} />
                    </Card>
                    </View>
                )
            })}
            </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    
      cardContainer:{
          backgroundColor: "#000000",  
          borderRadius: 10  
      },
      card:{
        marginTop: 10,
        marginBottom:10
      },
      text:{
          fontSize: 20,
          color: "white" ,
          alignSelf:"center",
          fontWeight: "bold"
      },
      text1:{
          
      },
      image:{
        height: 300,
        width: 300,
        alignSelf:"center",
        marginTop: 10
      },
      text1: {
        color: "white",
        fontSize: 16,
        alignSelf:"center",
      }
    
  });
export default Cart;