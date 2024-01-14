import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Pressable,
  Text,
} from 'react-native';

export default function Dislike() {
  const [dislikeCount, setDislikeCount] = React.useState(0);

  const handleDislike = () => {
      setDislikeCount(dislikeCount + 1);
    };

  return(
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <Pressable
    onPress={handleDislike}
    style={({pressed}) => [{backgroundColor: pressed ? '#DDDDDD' : '#eaeaea',
    color: 'black',
    width: 40,
    minHeight: 40,
    borderRadius: 40/2,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    }]}>
      <Feather name="thumbs-down" size={20} color="black" />
    </Pressable>
    <Text style={{marginTop: -12}}>{dislikeCount}</Text>
  </View>
  );
}