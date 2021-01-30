import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/homebg.png')} style={styles.image}>
        <Text style={styles.title}>Aurora</Text>
      </ImageBackground>
    </View>
  );
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    justifyContent: "center",
  },
});
