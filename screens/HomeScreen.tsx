import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useFonts, OleoScriptSwashCaps_400Regular } from '@expo-google-fonts/oleo-script-swash-caps';

import AppLoading from 'expo-app-loading';

import { Text, View } from '../components/Themed';

export default function HomeScreen() {

  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/homebg.png')} style={styles.image}>
          <Text style={styles.title}>Aurora</Text>
          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 50, 
    fontFamily: "OleoScriptSwashCaps_400Regular",
    textAlign: "center",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    justifyContent: "center",
  },
});
