import { Image, StyleSheet, View, Text } from 'react-native'

import BtnLike from './like'
import BtnDislike from './dislike'
import BtnGithub from './github'

export default function Projects(props){
  return(
    <>
      <Image
      source={props.imageUri}
      style={styles.project}
      />

      <Text
      style={styles.projectTitle}>{props.name}</Text>
      <Text
      >{props.desc}</Text>
      <Text
      >View On:</Text>
      
      <BtnGithub
      link={props.linking}
      />

      <View
        style={styles.count}>
          
          <BtnLike />
          <BtnDislike />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  project: {
      maxWidth: '100%',
      maxHeight: 350,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 4,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
});