import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import {getData} from '../Async Storage/storage';
const Home = () => {
  const [posts, setposts] = useState([]);
  const [currentid, setcurrentid] = useState('');
  useEffect(() => {
    fetchPosts();
  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, []),
  );

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'http://your own ip config cmd ip address :3000/get-posts',
      );
      setposts(response.data);
    } catch (error) {
      console.log('error fetching post', error);
    }
  };
  console.log('post are', posts);

  const handlelike = async postId => {
    try {
      const userId = await getData('userid');
      setcurrentid(userId);
      const response = await axios.put(
        `http://your own ip config cmd ip address :3000/post/${postId}/${userId}/like`,
      );
      console.log('like response', response);
      const updatedpost = response.data;
      const updatedposts = posts?.map(post =>
        post?._id === updatedpost._id ? updatedpost : post,
      );
      setposts(updatedposts);
    } catch (error) {
      console.log('error liking the post');
    }
  };

  const handleunlike = async postId => {
    try {
      const userId = await getData('userid');
      setcurrentid(userId);
      const response = await axios.put(
        `http://your own ip config cmd ip address :3000/post/${postId}/${userId}/unlike`,
      );
      console.log('unlike response', response);
      const updatedpost = response.data;
      const updatedposts = posts?.map(post =>
        post?._id === updatedpost._id ? updatedpost : post,
      );
      setposts(updatedposts);
    } catch (error) {
      console.log('error unliking the post');
    }
  };
  return (
    <ScrollView style={{marginTop: 0, flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          style={{height: 40, width: 60, resizeMode: 'contain'}}
          source={{
            uri: 'https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png',
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        {posts.map((post, index) => (
          <View
            key={index}
            style={{
              padding: 15,
              borderColor: '#0D0D0D',
              borderTopWidth: 1,
              flexDirection: 'row',
              gap: 10,
              marginVertical: 10,
            }}>
            <View>
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
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 4}}>
                {post.user.name}
              </Text>
              <Text>{post.content}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    post?.likes?.includes(currentid)
                      ? handleunlike(post._id)
                      : handlelike(post._id)
                  }>
                  <Icon
                    name="favorite"
                    size={20}
                    color={post?.likes?.includes(currentid) ? 'red' : 'gray'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="mode-comment" size={20} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="share" size={20} color="gray" />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 7, color: 'gray'}}>
                {post?.likes?.length} likes * {post?.replies?.length} replies
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
