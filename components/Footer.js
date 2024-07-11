/* eslint-disable prettier/prettier */
// Footer.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')} style={styles.footerButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Search')}>
        <Image source={require('../assets/search.png')} style={styles.footerButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('More')}>
        <Image source={require('../assets/more.png')} style={styles.footerButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Group')}>
        <Image source={require('../assets/group.png')} style={styles.footerButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('User')}>
        <Image source={require('../assets/user.png')} style={styles.footerButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: '7%',
    alignItems: "center"
  },
  footerButton: {
    padding: 10,
  },
  footerButtonImage: {
    width: 35,
    height: 35,
  },
});

export default Footer;
