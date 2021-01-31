import * as React from 'react';
import { TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from '@expo-google-fonts/tangerine';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import { JournalParamList } from '../types';
import { prompts } from '../prompts';

type FinJournalScreenNavigationProp = StackNavigationProp<JournalParamList, 'FinJournalScreen'>;
type Props = {
    navigation: FinJournalScreenNavigationProp;
};

declare global {
  var journalText: String;
}

const objKeys = Object.keys(prompts);
const ranIndex = parseInt(objKeys[Math.floor(Math.random() * objKeys.length)]);
const promptText = JSON.stringify(prompts[ranIndex].prompt).replace(/['"]+/g, '');

export default function JournalScreen({navigation}: Props) {

  let [fontsLoaded] = useFonts({
    Tangerine_400Regular,
    Tangerine_700Bold,
  });

  const [text, onChangeText] = React.useState('Let your thoughts flow');
  global.journalText = text;

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
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
            <Text style={styles.prompt}>Prompt: {promptText}</Text>
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
    textAlign: 'center',
    marginHorizontal: 10, 
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  gradient: {
    height: 150,
    width: 360,
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
});