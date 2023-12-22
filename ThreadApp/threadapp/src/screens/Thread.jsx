import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getData} from '../Async Storage/storage';
import axios from 'axios';

const Thread = () => {
  const [content, setcontent] = useState('');

  const handlePostSubmit = async () => {
    try {
      const currentUserId = await getData('userid');
      const postData = {
        userId: currentUserId,
      };

      if (content) {
        postData.content = content;
      }
      console.log('data and id', currentUserId, postData);
      const response = await axios.post(
        'http://your own ip config cmd ip address :3000/create-posts',
        postData,
      );
      if (response.status === 200) {
        setcontent('');
      }
    } catch (error) {
      console.log('Error creating post', error);
    }
  };

  return (
    <SafeAreaView style={{padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          gap: 5,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
          }}
        />
        <Text style={{color: '#009fff', fontWeight: 'bold'}}>
          Maithani_ji Rocks
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <TextInput
          placeholder="Type your message..."
          placeholderTextColor={'black'}
          value={content}
          onChangeText={text => setcontent(text)}
          multiline
        />
      </View>
      <View style={styles.container}>
        <Button onPress={handlePostSubmit} title="Share Post" />
      </View>
    </SafeAreaView>
  );
};

export default Thread;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 0, // Adjust the horizontal padding to make the button smaller
  },
});
