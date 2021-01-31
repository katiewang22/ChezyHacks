import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useFonts, OleoScriptSwashCaps_400Regular } from '@expo-google-fonts/oleo-script-swash-caps';
import { BadScript_400Regular } from '@expo-google-fonts/bad-script';
import { Niconne_400Regular } from '@expo-google-fonts/niconne';

import { Text, View } from '../components/Themed';
import { quotes } from '../quotes';

export default function HomeScreen() {

  // Loading fonts
  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_400Regular,
    BadScript_400Regular,
    Niconne_400Regular,
  });

  // Getting random quotes and its author
  const objKeys = Object.keys(quotes);
  const ranIndex = parseInt(objKeys[Math.floor(Math.random() * objKeys.length)]);
  const quoteText = JSON.stringify(quotes[ranIndex].text);
  const quoteAuthor = JSON.stringify(quotes[ranIndex].author).replace(/['"]+/g, ''); 

  // Screen
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/homebg.png')} style={styles.image}>
          <Text style={styles.title}>Aurora</Text>
          <Text style={styles.quoteText}>{quoteText}</Text>
          <Text style={styles.quoteAuthor}>- {quoteAuthor}</Text>
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
	quoteText: {
		fontSize: 35,
    textAlign: "center",
    fontFamily: 'Niconne_400Regular',
    marginTop: 20,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
	},
	quoteAuthor: {
		fontSize: 23,
    color: "#515151",
    textAlign: "center",
    fontFamily: 'BadScript_400Regular',
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
	},
});
