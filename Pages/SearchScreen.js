/* eslint-disable prettier/prettier */
// SearchScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import Footer from '../components/Footer';
import axios from 'axios';

const trendingHashtags = [
  'https://picsum.photos/id/1011/200',
  'https://picsum.photos/id/1012/200',
  'https://picsum.photos/id/1013/200',
  'https://picsum.photos/id/1014/200',
  'https://picsum.photos/id/1015/200',
];

const topCommunity = [
  'https://picsum.photos/id/1016/200',
  'https://picsum.photos/id/1021/200',
  'https://picsum.photos/id/1018/200',
  'https://picsum.photos/id/1019/200',
  'https://picsum.photos/id/1020/200',
];

const topNomads = [
  {
    image: 'https://picsum.photos/id/1021/200',
    username: '@playaparker',
    followers: '245k followers',
  },
  {
    image: 'https://picsum.photos/id/1022/200',
    username: '@mhogan',
    followers: '240k followers',
  },
  {
    image: 'https://picsum.photos/id/1023/200',
    username: '@rayjosh',
    followers: '234k followers',
  },
  {
    image: 'https://picsum.photos/id/1025/200',
    username: '@adusrk',
    followers: '300k followers',
  },
];
const { height } = Dimensions.get('window');


const SearchScreen = ({navigation}) => {
  const [topImage, setTopImage] = useState('');

  useEffect(() => {
    const fetchTopImage = async () => {
      const response = await axios.get('https://picsum.photos/id/101/800');
      setTopImage(response.request.responseURL);
    };

    fetchTopImage();
  }, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Discover the world</Text>
        <TextInput style={styles.searchBar} placeholder="Search" />
          <Image source={{ uri: topImage }} style={styles.topImage} />
        <Text style={styles.sectionTitle}>Trending Hashtags</Text>
        <FlatList
          data={trendingHashtags}
          horizontal
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={{uri: item}} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
        <Text style={styles.sectionTitle}>Top Community</Text>
        <FlatList
          data={topCommunity}
          horizontal
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={{uri: item}} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
        <Text style={styles.sectionTitle}>Top Nomads</Text>
        <FlatList
          data={topNomads}
          horizontal
          renderItem={({item}) => (
            <View style={styles.nomadContainer}>
              <Image source={{uri: item.image}} style={styles.nomadImage} />
              <Text style={styles.nomadUsername}>{item.username}</Text>
              <Text style={styles.nomadFollowers}>{item.followers}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: height * 0.07,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalList: {
    marginVertical: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  nomadContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  nomadImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nomadUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  nomadFollowers: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SearchScreen;
