import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Pressable,
  Text,
} from 'react-native';

export default function Like() {
  const [likeCount, setLikeCount] = React.useState(0);
    

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return(
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Pressable
        onPress={handleLike}
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
         <Feather name="thumbs-up" size={20} color="black" />
        </Pressable>
        <Text style={{marginTop: -12}}>{likeCount}</Text>
        </View>
  );
}