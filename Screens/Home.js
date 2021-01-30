import React,{useState, useEffect} from "react";
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet,ImageBackground, TouchableOpacity  } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View } from "react-native";
import { Button } from "react-native";
import {Text} from "react-native-elements"
import { Icon } from 'react-native-elements'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Home = (props) => {
 
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {
      label: "Mart",
      value: "Mart",
    },
    {
      label: "Cash and Carry",
      value: "Cash and Carry",
    },
    {
      label: "Paradise Store",
      value: "Paradise Store",
    },
  ]);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  const handleCart = () => {
    props.navigation.navigate('Cart')
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  let controller;
return(
    <View style={styles.container}>
        <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/Gradient_iqNmACq.png")}
       / >
           </View> 
           <View style={styles.dropdown}>
           <DropDownPicker
            style={{ backgroundColor: "orange" }}
            labelStyle={{
              fontSize: 18,
              textAlign: "left",
              color: "white",
            }}
            arrowStyle={{
              backgroundColor: "purple",
            }}
            dropDownStyle={{ backgroundColor: "gray" }}
            containerStyle={{ height: 40 }}
            placeholder="Select Store"
            items={items}
            controller={(instance) => (controller = instance)}
            onChangeList={(items, callback) => {
              new Promise((resolve, reject) => resolve(setItems(items)))
                .then(() => callback())
                .catch(() => {});
            }}
            defaultValue={value}
            onChangeItem={(item) => setValue(item.value)}
          />
           </View>
           <View style={styles.barcode}>
           <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button  title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
           </View>
           <TouchableOpacity onPress={handleCart} style={styles.button}>
           <View style={{flexDirection: "row", alignSelf:"center", alignItems:"stretch", justifyContent:"space-around" }}>
             
               <Text style={{fontSize: 25, color: "purple" ,fontWeight: "bold"}}>view cart</Text>
               <FontAwesomeIcon
                size={30}
                color="purple"
                name="shopping-cart"
                style={styles.icon4}
              ></FontAwesomeIcon>
             
           </View>
           </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    rect: {
        flex: 1
      },
      background: {
        flex: 1
      },
      dropdown:{
        position: "absolute",
        width: "100%",
        marginTop: 10
      },
      barcode: {
        position: "absolute",
        top: 80,
        height: 500,
        width: 400
      },
      button: {
        position: "absolute",
        justifyContent: "center",
        height: 60,
        top: 600,
        alignSelf:"center",
        width: 290,
        backgroundColor: "yellow",
        borderRadius: 5,
        
      }
  });
export default Home;