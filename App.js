/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

export default function App() {
  //Adding identication
  const [level, setLevel] = useState(0);

  //Different levels of sign up
  const logAsLevelOne = () => {
    setLevel(1);
  };

  const logAsLevelTwo = () => {
    setLevel(2);
  };

  const logAsLevelThree = () => {
    setLevel(3);
  };

  const logAsLevelFour = () => {
    setLevel(4);
  };

  useEffect(()=>{
  });

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
        <TouchableOpacity onPress={logAsLevelFour} style={styles.btn}>
          <Text style={styles.btnText}>Lvl Four</Text>
        </TouchableOpacity>
          <Text style={styles.levelText}>Selected Level: {level}</Text>
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
    margin: 5,
  },
  btnText: {
    color: 'white',
  },
});
