import * as React from 'react';
import { Image, TouchableOpacity, Button, Alert, StyleSheet } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, BadScript_400Regular } from '@expo-google-fonts/bad-script';
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import * as Linking from 'expo-linking';

import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

export default function SongScreen(){

  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("The video has finished playing!");
    }
  }, []);

  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  let [fontsLoaded] = useFonts({
    BadScript_400Regular,
    PatrickHand_400Regular,
  });

  function goToLink1() {
    Linking.openURL('https://open.spotify.com/track/3znD2JTezT8ZLkp2pmft2l');
  }

  function goToLink2() {
    Linking.openURL('https://open.spotify.com/track/6hjh2phISvfR1Ib6S0FK7b');
  }

  function goToLink3() {
    Linking.openURL('https://open.spotify.com/track/6l0SEG60EHOxny0ZA4lxmO');
  }

  function goToPodcast1() {
    Linking.openURL('https://open.spotify.com/show/2SOpj1RYna4yua8aKZiuME?si=57hT_Y7kRmScy1o_Wnqtlw');
  }

  function goToPodcast2() {
    Linking.openURL('https://open.spotify.com/show/5J0xAfsLX7bEYzGxOin4Sd?si=smnumrNeTx-IiHeJsgs5Mw');
  }

  function goToPodcast3() {
    Linking.openURL('https://open.spotify.com/show/3nKvLT48YbbRQoCYQ4ern1?si=MHVSXsqFTtC3D4pIDpSJtQ');
  }

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <ScrollView>
        <View style={styles.firstTitle}>
          <LinearGradient
              colors={['#e3ffe7', '#d9e7ff']}
              style={styles.gradient}
              start={{ x: 0.55, y: 0.8 }}
              end={{ x: 0.4, y: 0.1 }}
            >
              <Text style={styles.title}>Chillax Time</Text>
          </LinearGradient>
        </View>
        <View style={styles.video}>
          <YoutubePlayer
            height={240}
            play={playing}
            videoId={"8w5InPjOk-w"}
            onChangeState={onStateChange}
          />
          <Button title={playing ? "Pause" : "🌴 Want to be on an island eating coconuts? 🥥"} onPress={togglePlaying} />
        </View>

        <View style={styles.separator}/>

        <View style={styles.songs}>
          <LinearGradient
            colors={['#e3ffe7', '#d9e7ff']}
            style={styles.gradient}
            start={{ x: 0.55, y: 0.8 }}
            end={{ x: 0.4, y: 0.1 }}
          >
            <Text style={styles.title}>Songs to help you cheer up~</Text>
          </LinearGradient>

          <TouchableOpacity onPress={()=> goToLink1()}>
              <Image style={styles.imageStyle} source={require('../assets/images/talktome.png')} />
          </TouchableOpacity>
          <Text style={styles.song}>♫ Talk to Me - Cavetown</Text>

          <View style={styles.songSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <TouchableOpacity onPress={()=> goToLink2()}>
              <Image style={styles.imageStyle} source={require('../assets/images/tryingmybest.png')} />
          </TouchableOpacity>
          <Text style={styles.song}>♫ Trying My Best - Anson Seabra</Text>

          <View style={styles.songSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <TouchableOpacity onPress={()=> goToLink3()}>
              <Image style={styles.imageStyle} source={require('../assets/images/silence.png')} />
          </TouchableOpacity>
          <Text style={styles.song}>♫ Silence - Before You Exit</Text>
        </View>

        <View style={styles.separator}/>

        <View>
          <LinearGradient
            colors={['#e3ffe7', '#d9e7ff']}
            style={styles.gradient}
            start={{ x: 0.55, y: 0.8 }}
            end={{ x: 0.4, y: 0.1 }}
          >
            <Text style={styles.title}>Your COVID Guide</Text>
          </LinearGradient>

          <TouchableOpacity onPress={()=> goToPodcast1()}>
              <Image style={styles.imageStyle} source={require('../assets/images/goodnews.png')} />
          </TouchableOpacity>
          <Text style={styles.song}>🎤 The Good News</Text>

          <View style={styles.songSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <TouchableOpacity onPress={()=> goToPodcast2()}>
              <Image style={styles.imageStyle} source={require('../assets/images/lifekit.png')} />
          </TouchableOpacity>
          <Text style={styles.song}>🎤 Life Kit</Text>

          <View style={styles.songSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <TouchableOpacity onPress={()=> goToPodcast3()}>
              <Image style={styles.imageStyle} source={require('../assets/images/cnnpodcast.png')} />
          </TouchableOpacity>
          <Text style={styles.podcast}>🎤 Coronavirus: Fact vs Fiction</Text>
        </View>

        <View style={styles.separator}/>

          <LinearGradient
              colors={['#e3ffe7', '#d9e7ff']}
              style={styles.gradient}
              start={{ x: 0.55, y: 0.8 }}
              end={{ x: 0.4, y: 0.1 }}
            >
              <Text style={styles.title}>A Dose of Happy</Text>
          </LinearGradient>
          <View style={styles.video}>
            <YoutubePlayer
              height={240}
              play={playing}
              videoId={"bCVkOqSDywI"}
              onChangeState={onStateChange}
            />
            <Button title={playing ? "Pause" : "Play 🐱 🐶"} onPress={togglePlaying} />
          </View>

          <View style={styles.separator}/>

          <View style={styles.video}>
            <YoutubePlayer
              height={240}
              play={playing}
              videoId={"iuyG9gbZHFM"}
              onChangeState={onStateChange}
            />
            <Button title={playing ? "Pause" : "Play 😴"} onPress={togglePlaying} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    marginTop: 10,
  },
  songs: {
    marginTop: 20,
  },
  gradient: {
    height: 45,
    width: 300,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'PatrickHand_400Regular',
  },
  firstTitle: {
    marginTop: 30,
    fontFamily: 'PatrickHand_400Regular',
  },
  separator: {
    marginVertical: 10,
  },
  song: {
    marginTop: 13,
    fontFamily: 'BadScript_400Regular',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  songSeparator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  podcast: {
    marginTop: 13,
    fontFamily: 'BadScript_400Regular',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});