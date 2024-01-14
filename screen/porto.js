import React from 'react';
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet, 
  Image,
  Pressable,
  Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

import Projects from '../components/projects';


export default function Porto() {
        
  return(
  <ScrollView style={styles.container}>
    <Image
    source={require('../assets/markes.jpg')} 
    style={styles.profile} />

    <Text style={styles.title}>Sahal Arya Bara</Text>
    <Text style={styles.paragraph}>
    Saya seseorang yang tertarik pada bidang IT khususnya untuk Software Programming dan UI/UX Design.
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%', marginBottom: 80}}>
      <Text style={styles.title}>My Recent Project</Text>

      <Projects
      imageUri={require('../assets/snack-icon.png')}
      name={'SayMobil'}
      desc={'Marketplace Cars'}     
      linking={'https://github.com/seveent'}
      />
            
      <Text style={{borderColor: 'black'}}></Text>

      <Projects
      imageUri={require('../assets/snack-icon.png')}
      name={'Online Shop'}
      desc={'Shopping for Online'}

      linking={'https://github.com/seveent'}
       />
       
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    margin: 10,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: '28%'
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});



