import * as React from 'react';
import { Button, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from '@expo-google-fonts/tangerine';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import { JournalParamList } from '../types';

type FinJournalScreenNavigationProp = StackNavigationProp<JournalParamList, 'FinJournalScreen'>;
type Props = {
    navigation: FinJournalScreenNavigationProp;
};

declare global {
  var journalText: String;
}

export default function JournalScreen({navigation}: Props) {

  let [fontsLoaded] = useFonts({
    Tangerine_400Regular,
    Tangerine_700Bold,
  });

  //1. Type entry
  //2. Press submit
  //3. See previous entries below

  /*const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }*/

  const [text, onChangeText] = React.useState('Begin writing');

  global.journalText = text;

  //var writingText = global.journalText;

  //const [writingText, setWritingText] = React.useState(String);
  //const [journalTime, setJournalTime] = React.useState(String);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <LinearGradient
              colors={['#F6BD60', '#F28482']}
              style={styles.gradient}
              >
                <Text style={styles.title}>Let your thoughts flow</Text>
                <Text style={styles.prompt}>Prompt: </Text>
            </LinearGradient>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TextInput
              multiline
              numberOfLines={20}
              placeholder={text}
              onChangeText={text => onChangeText(text)}
              style={styles.journal}
            />
            <TouchableOpacity onPress={() => navigation.navigate('FinJournalScreen')}>
              <View>
                <Text>Done!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

/*<View style={styles.button}>
                  <Text style={styles.buttonText}>Done!</Text>
              </View>*/

/*<Text style={styles.journalEntries}>
              {journalTime}: {journalText}
            </Text>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffcf5',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    justifyContent: "space-around",
    backgroundColor: '#fffcf5',
  },
  title: {
    marginTop: 8,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Tangerine_700Bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  prompt: {
    marginTop: 8,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Tangerine_700Bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  gradient: {
    height: 110,
    width: 300,
  },
  journal: {
    color:'#595959', 
    fontSize: 40, 
    marginHorizontal: 5,
    fontFamily: 'Tangerine_400Regular',
    borderColor: 'black',
    borderWidth: 1,
    height: 250,
    width: 350,
  },
  /*journalEntries: {
    color:'#595959', 
    fontSize: 40, 
    marginHorizontal: 5,
    fontFamily: 'Tangerine_400Regular',
  },*/
});
