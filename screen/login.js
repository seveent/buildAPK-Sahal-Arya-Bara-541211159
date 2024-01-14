import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import UsernameInput from '../components/usernameinput'
import PasswordInput from '../components/passwordinput'


export default function Login({navigation}) {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/4207.jpg')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.description}>Login untuk melanjutkan</Text>

      <UsernameInput />
      <PasswordInput />
            
      <Text style={styles.lupaPw}>Lupa Password?</Text>

      <Pressable 
      style={styles.btnLogin}
      onPress={() => navigation.navigate('Portfolio')}
      >
        
        <Text style={styles.btntext}>Login</Text>
        
        
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          gap: 12,
        }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text
            style={{
              width: 40,
              paddingBottom: 2,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Atau
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

     
      
      <View style={styles.registerBtnGroup}>
      <Text style={styles.belumpunya}>Belum punya akun?</Text>
      <Pressable
      onPress={() => navigation.navigate('Register')}>
      <Text style={[styles.reset, {color: '#0275d8'}]}>Register</Text>
      </Pressable>
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 48,
    backgroundColor: '#fafafa',
  },
  logo: {
    width: 96,
    height: 96,
    marginTop:70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    marginTop: 10,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    textAlign: 'center',
  },
 
  reset: {
    fontWeight: "500",
    color: "#000000"
  },
  registerBtnGroup: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    marginTop: 120,
    paddingBottom: 75,
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
 
  btntext: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 
  lupaPw: {
    marginVertical: 15,
    textAlign: "right"
  },
  btnSecondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:25,
  },
  btnSecondary: {
    borderWidth:1,
    padding: 5,
    borderRadius:8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSecondaryImage:{
    width: 25,
    height:25,
  }
});
