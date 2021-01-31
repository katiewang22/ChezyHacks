import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import moment from 'moment';

export default function FinJournalScreen() {
    
    // Finds the time
    const time = moment().format('MMM Do YYYY, h:mm a');

    // Screen
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/paper.jpg')} style={styles.image}>
          <Text style={styles.title}>{time}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.journalEntries}>{journalText}</Text>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 510,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  title: {
    marginTop: 8,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Tangerine_700Bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  journalEntries: {
    color:'#595959', 
    fontSize: 40, 
    marginLeft: 150,
    marginRight: 80,
    marginBottom: 90,
    fontFamily: 'Tangerine_400Regular',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});