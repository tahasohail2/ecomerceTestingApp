import React, {useEffect, useState} from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import {db} from "../config/firebase";
import firebase from "firebase";

const Cart = ({storeName, productImage, productPrice,productName}) => {


    return(
        <View style={styles.container}>
            <Text> Add to cart</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    
  });
export default Cart;