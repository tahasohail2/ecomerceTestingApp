import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { event } from "react-native-reanimated";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import {db, auth} from "../config/firebase";


function Login(props) {

    const [username, setUsername] = useState('');
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        
      });
    const [user, setUser] = useState(null);


    const handleLogin = () => {
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then(() => props.navigation.navigate("Home"))
        .catch((error) => alert(setValues({error: error.message})));
    }
     

    
    


// useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//         if(authUser) {
//             // If user has logged in...
//             console.log(authUser);
//             setUser(authUser);
//             props.navigation.navigate('Home');
//         } else {
//             // user logged out...
//             setUser(null);
//             props.navigation.navigate('Signup');
//         }
//     })
//     return () => {
//         // cleanup fucntion
//         unsubscribe();
//     }
// }, [user, username]);



  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View >
        
          <View style={styles.logoColumn}>
            <View style={styles.logo}>
              <View style={styles.endWrapperFiller}></View>
              <View style={styles.text3Column}>
                <Text style={styles.text3}>QR Scanner</Text>
                <View style={styles.rect7}></View>
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.usernameColumn}>
                {/* <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                  ></TextInput>
                </View>
                 */}
               
                <View style={styles.email}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    textContentType="emailAddress"
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={values.email}
                    onChangeText={(value) => setValues({...values, email: value})}
                    secureTextEntry={false}
                    style={styles.passwordInput}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    textContentType="password"
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={values.password}
                    onChangeText={(value) => setValues({...values, password: value})}
                    secureTextEntry={false}
                    style={styles.passwordInput}
                  ></TextInput>
                </View>
                
                {/* <View style={styles.phone}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Phone"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.passwordInput}
                  ></TextInput>
                </View> */}
                
              </View>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
              >
                <Text style={styles.text2}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.logoColumnFiller}></View>
          <View style={styles.footerTexts}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.button2}
            >
              <View style={styles.createAccountFiller}></View>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.button2Filler}></View>
            <Text style={styles.needHelp}>Need Help?</Text>
          </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
    
  },
  
  rect_imageStyle: {},
  logo: {
    bottom: 100
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
   
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginRight: 4
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: -1
  },
  form: {
    height: 230,
    
  },
  username: {
    bottom: 80, 
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  email: {
    bottom: 80, 
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  phone: {
    bottom: 80, 
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    bottom: 80, 
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    bottom: 50, 
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }
});

export default Login;
