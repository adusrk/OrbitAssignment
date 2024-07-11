/* eslint-disable prettier/prettier */
// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Footer from '../components/Footer';

const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [];
      for (let i = 0; i < 20; i++) {
        const response = await axios.get('https://picsum.photos/800');
        fetchedImages.push(response.request.responseURL);
      }
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
      <Text style={styles.headerText}>For You</Text>
      <View style={styles.contentDescription}>
        <Text style={styles.caption}>Caption goes here</Text>
        <Text style={styles.description}>This is an assignment and here we will be displaying the content of the image</Text>
        <Text style={styles.hashtags}>#hashtag1 #hashtag2 #hashtag3</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('../assets/add-user.png')} style={styles.rightButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('../assets/heart.png')} style={styles.rightButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('../assets/comment.png')} style={styles.rightButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('../assets/share.png')} style={styles.rightButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Image source={require('../assets/send.png')} style={styles.rightButtonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={height}
        pagingEnabled
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerText: {
    position: 'absolute',
    top: 40,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentDescription: {
    position: 'absolute',
    bottom: 65,
    left: 10,
  },
  caption: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 15,
    marginVertical: 5,
  },
  hashtags: {
    color: 'white',
    fontSize: 14,
  },
  rightContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'space-around',
    height: '40%',
    alignItems: 'center',
  },
  rightButton: {
    marginVertical: 10,
  },
  rightButtonImage: {
    width: 35,
    height: 35,
  },
});

export default HomeScreen;
