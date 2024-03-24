/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function App() {
  const logAsLevelOne = () => {
    Alert.alert('This is level one');
  };

  const logAsLevelTwo = () => {
    Alert.alert('This is level two');
  };

  const logAsLevelThree = () => {
    Alert.alert('This is level three');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={logAsLevelOne} style={styles.btn}>
            <Text style={styles.btnText}>Lvl One</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logAsLevelTwo} style={styles.btn}>
            <Text style={styles.btnText}>Lvl Two</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logAsLevelThree} style={styles.btn}>
            <Text style={styles.btnText}>Lvl Three</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures that SafeAreaView takes up the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: "grey"
  },
  btn: {
    height: '5%',
    width: '80%',
    backgroundColor: 'tomato',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  btnText: {
    color: "white",
  }
});
